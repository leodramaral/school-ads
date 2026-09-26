import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Progress } from "@base-ui/react/progress";
import { FLASHCARD_BANK_LOADERS } from "../data/flashcardBank/index.js";
import { getActiveSubject } from "../data/subjects.js";
import { loadState, saveState, schedule, buildRound } from "../utils/srs.js";
import RichText from "../components/RichText.jsx";

const CARDS_PER_ROUND = 10;
const STORAGE_KEY = "flashcards-srs-v1";

export default function Flashcards() {
  const location = useLocation();
  const subject = getActiveSubject(location.pathname);
  const deckTitle = subject.flashcards.title;

  const [srsState, setSrsState] = useState(() => loadState(STORAGE_KEY));
  const [bank, setBank] = useState(null);
  const [round, setRound] = useState(null);
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [log, setLog] = useState([]);
  const [finished, setFinished] = useState(false);

  // O banco de flashcards da matéria só é baixado aqui, ao abrir os
  // flashcards dela — não junto com o de todas as outras matérias.
  useEffect(() => {
    let cancelled = false;
    setBank(null);
    setRound(null);
    FLASHCARD_BANK_LOADERS[subject.slug]().then((loadedBank) => {
      if (cancelled) return;
      setBank(loadedBank);
      setRound(buildRound(loadedBank, srsState, CARDS_PER_ROUND));
    });
    return () => {
      cancelled = true;
    };
  }, [subject.slug]);

  const rememberedCount = useMemo(() => log.filter((l) => l.correct).length, [log]);

  if (!round) {
    return (
      <>
        <p className="eyebrow">Flashcards</p>
        <h1>{deckTitle}</h1>
        <p className="lede mt-0">Carregando cards…</p>
      </>
    );
  }

  const card = round[step];
  const total = round.length;

  if (total === 0) {
    return (
      <>
        <p className="eyebrow">Flashcards</p>
        <h1>{deckTitle}</h1>
        <p className="lede mt-0">Ainda não há flashcards cadastrados para esta matéria. Volte em breve.</p>
      </>
    );
  }

  function handleAnswer(correct) {
    setLog((prev) => [...prev, { id: card.id, frente: card.frente, correct }]);

    const updatedCard = schedule(card.srsCard, correct, Date.now());
    setSrsState((prev) => {
      const next = { ...prev, [card.id]: updatedCard };
      saveState(next, STORAGE_KEY);
      return next;
    });

    if (step + 1 >= total) {
      setFinished(true);
      return;
    }
    setStep((s) => s + 1);
    setRevealed(false);
  }

  function handleRestart() {
    setRound(buildRound(bank, srsState, CARDS_PER_ROUND));
    setStep(0);
    setRevealed(false);
    setLog([]);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((rememberedCount / total) * 100);
    let message = `Vale revisar ${deckTitle} com calma antes da prova.`;
    if (pct === 100) message = "Lembrou de tudo! Você está pronto para a prova.";
    else if (pct >= 70) message = "Muito bom! Reforce só os cards que não lembrou.";
    else if (pct >= 40) message = `Bom começo — releia as páginas de ${deckTitle}.`;

    return (
      <>
        <p className="eyebrow">Flashcards</p>
        <h1>Resultado</h1>
        <div className="quiz-card quiz-result">
          <p className="muted mt-0">Você lembrou</p>
          <p className="score">
            {rememberedCount} / {total}
          </p>
          <p>{message}</p>
        </div>

        <div className="score-breakdown">
          {log.map((item, i) => (
            <div className="row" key={i}>
              <span className={`tag ${item.correct ? "ok" : "no"}`}>{item.correct ? "✓" : "✕"}</span>
              <span>
                Card {i + 1}: <RichText text={item.frente} />
              </span>
            </div>
          ))}
        </div>

        <div className="center">
          <button className="btn" onClick={handleRestart}>
            Revisar de novo (novos cards)
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="eyebrow">Flashcards</p>
      <h1>{deckTitle}</h1>
      <p className="lede mt-0">
        {CARDS_PER_ROUND} cards priorizados por repetição espaçada: o que você marcou como "não
        lembrei" ou não revisa há mais tempo aparece primeiro. Clique para virar o card e
        autoavalie sua resposta.
      </p>

      <div className="quiz-meta">
        <span>
          Card {step + 1} de {total}
        </span>
      </div>

      <Progress.Root value={step + (revealed ? 1 : 0)} min={0} max={total} className="mb-6 block">
        <Progress.Track className="block h-1.5 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
          <Progress.Indicator className="block h-full rounded-full bg-blue-600 transition-[width] duration-300 ease-out dark:bg-blue-500" />
        </Progress.Track>
      </Progress.Root>

      <div className="flashcard-scene flashcard-enter" key={card.id}>
        <div className={`flashcard-flip ${revealed ? "is-flipped" : ""}`}>
          <div className="flashcard-face">
            <span className="flashcard-badge">{card.topico}</span>
            <p className="flashcard-text">
              <RichText text={card.frente} />
            </p>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              {card.srsCard.lastReviewed ? "revisão" : "novo"}
            </span>
          </div>
          <div className="flashcard-face flashcard-face--back">
            <span className="flashcard-badge">Resposta</span>
            <p className="flashcard-text">
              <RichText text={card.verso} />
            </p>
          </div>
        </div>
      </div>

      <div className="quiz-actions justify-center">
        {!revealed ? (
          <button className="btn" onClick={() => setRevealed(true)}>
            Mostrar resposta
          </button>
        ) : (
          <>
            <button className="btn recall-no" onClick={() => handleAnswer(false)}>
              Não lembrei
            </button>
            <button className="btn recall-yes" onClick={() => handleAnswer(true)}>
              Lembrei
            </button>
          </>
        )}
      </div>
    </>
  );
}
