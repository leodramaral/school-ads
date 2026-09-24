import { useMemo, useState } from "react";
import { InlineMath } from "react-katex";
import { QUIZ_BANK } from "../data/quizBank.js";
import { shuffle, sample } from "../utils/shuffle.js";

const QUESTIONS_PER_ROUND = 6;
const LETTERS = ["A", "B", "C", "D"];

// Renderiza um texto que pode conter trechos $...$ com LaTeX misturados com texto comum.
function RichText({ text }) {
  const parts = text.split(/(\$[^$]+\$)/g).filter((p) => p !== "");
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("$") && part.endsWith("$") ? (
          <InlineMath key={i} math={part.slice(1, -1)} />
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function buildRound() {
  const chosen = sample(QUIZ_BANK, QUESTIONS_PER_ROUND);
  return chosen.map((q) => {
    const opcoes = shuffle(q.opcoes.map((o, i) => ({ ...o, _origIndex: i })));
    return { ...q, opcoesEmbaralhadas: opcoes };
  });
}

export default function Quiz() {
  const [round, setRound] = useState(() => buildRound());
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [log, setLog] = useState([]);
  const [finished, setFinished] = useState(false);

  const question = round[step];
  const total = round.length;
  const score = useMemo(() => log.filter((l) => l.correct).length, [log]);

  function handleSelect(index) {
    if (answered) return;
    setSelected(index);
  }

  function handleConfirm() {
    if (selected === null) return;
    const opt = question.opcoesEmbaralhadas[selected];
    setAnswered(true);
    setLog((prev) => [
      ...prev,
      {
        pergunta: question.enunciado,
        correct: !!opt.correta,
      },
    ]);
  }

  function handleNext() {
    if (step + 1 >= total) {
      setFinished(true);
      return;
    }
    setStep((s) => s + 1);
    setSelected(null);
    setAnswered(false);
  }

  function handleRestart() {
    setRound(buildRound());
    setStep(0);
    setSelected(null);
    setAnswered(false);
    setLog([]);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / total) * 100);
    let message = "Vale revisar Matrizes e Determinantes com calma antes da prova.";
    if (pct === 100) message = "Nota máxima! Você está pronto para o 1º NPC.";
    else if (pct >= 70) message = "Muito bom! Reforce só os pontos que errou.";
    else if (pct >= 40) message = "Bom começo — releia as páginas de Matrizes e Determinantes.";

    return (
      <>
        <p className="eyebrow">Quiz interativo</p>
        <h1>Resultado</h1>
        <div className="quiz-card quiz-result">
          <p className="muted mt-0">Você acertou</p>
          <p className="score">
            {score} / {total}
          </p>
          <p>{message}</p>
        </div>

        <div className="score-breakdown">
          {log.map((item, i) => (
            <div className="row" key={i}>
              <span className={`tag ${item.correct ? "ok" : "no"}`}>{item.correct ? "✓" : "✕"}</span>
              <span>
                Questão {i + 1}: <RichText text={item.pergunta} />
              </span>
            </div>
          ))}
        </div>

        <div className="center">
          <button className="btn" onClick={handleRestart}>
            Refazer o quiz (novas questões)
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="eyebrow">Quiz interativo</p>
      <h1>Matrizes e Determinantes</h1>
      <p className="lede mt-0">
        {QUESTIONS_PER_ROUND} questões de múltipla escolha, sorteadas de um banco maior. A ordem das
        alternativas — e as próprias questões — mudam a cada tentativa.
      </p>

      <div className="quiz-meta">
        <span>
          Questão {step + 1} de {total}
        </span>
        <span>{question.topico}</span>
      </div>
      <div className="progress-bar">
        <span style={{ width: `${((step + (answered ? 1 : 0)) / total) * 100}%` }} />
      </div>

      <div className="quiz-card">
        <p className="quiz-topic">{question.topico}</p>
        <p className="quiz-question">
          <RichText text={question.enunciado} />
        </p>

        <ul className="quiz-options">
          {question.opcoesEmbaralhadas.map((opt, i) => {
            let cls = "quiz-option";
            if (answered) {
              cls += " disabled";
              if (opt.correta) cls += " correct";
              else if (i === selected) cls += " incorrect";
            } else if (i === selected) {
              cls += " selected";
            }
            return (
              <li key={i}>
                <button className={cls} onClick={() => handleSelect(i)} disabled={answered}>
                  <span className="opt-letter">{LETTERS[i]}</span>
                  <span>
                    <RichText text={opt.texto} />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {answered && (
          <div className={`quiz-feedback show ${log[log.length - 1]?.correct ? "good" : "bad"}`}>
            <strong>{log[log.length - 1]?.correct ? "Correto! " : "Não foi dessa vez. "}</strong>
            <RichText text={question.explicacao} />
          </div>
        )}

        <div className="quiz-actions">
          {!answered ? (
            <button className="btn" onClick={handleConfirm} disabled={selected === null}>
              Confirmar resposta
            </button>
          ) : (
            <button className="btn" onClick={handleNext}>
              {step + 1 >= total ? "Ver resultado" : "Próxima questão"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
