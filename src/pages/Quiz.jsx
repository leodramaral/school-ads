import { useMemo, useState } from "react";
import { InlineMath } from "react-katex";
import { Progress } from "@base-ui/react/progress";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
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

// Classes do card de cada alternativa, de acordo com o estado (selecionada,
// correta, incorreta, ou neutra) — aplicadas via a render prop do Radio.Root.
function optionClass({ checked, disabled }, isCorrect) {
  if (disabled) {
    if (isCorrect) {
      return "border-green-500 bg-green-50 dark:bg-green-500/10";
    }
    if (checked) {
      return "border-red-500 bg-red-50 dark:bg-red-500/10";
    }
    return "border-neutral-200 dark:border-neutral-800";
  }
  if (checked) {
    return "border-neutral-900 dark:border-neutral-100";
  }
  return "border-neutral-200 hover:border-blue-400 dark:border-neutral-800";
}

function letterClass({ checked, disabled }, isCorrect) {
  if (disabled) {
    if (isCorrect) return "border-green-500 bg-green-500 text-white";
    if (checked) return "border-red-500 bg-red-500 text-white";
    return "border-neutral-200 text-neutral-400 dark:border-neutral-800";
  }
  if (checked) return "border-neutral-900 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100";
  return "border-neutral-300 text-neutral-500 dark:border-neutral-700";
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

      <Progress.Root
        value={step + (answered ? 1 : 0)}
        min={0}
        max={total}
        className="mb-6 block"
      >
        <Progress.Track className="block h-1.5 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
          <Progress.Indicator className="block h-full rounded-full bg-blue-600 transition-[width] duration-300 ease-out dark:bg-blue-500" />
        </Progress.Track>
      </Progress.Root>

      <div className="quiz-card">
        <p className="quiz-topic">{question.topico}</p>
        <p className="quiz-question">
          <RichText text={question.enunciado} />
        </p>

        <RadioGroup
          value={selected}
          onValueChange={(value) => {
            if (!answered) setSelected(value);
          }}
          className="grid list-none gap-2.5 p-0"
        >
          {question.opcoesEmbaralhadas.map((opt, i) => (
            <label key={i} className="block">
              <Radio.Root
                value={i}
                disabled={answered}
                nativeButton
                render={(props, state) => (
                  <button
                    {...props}
                    type="button"
                    className={`flex w-full items-start gap-3 rounded-lg border-[1.5px] px-4 py-3 text-left transition-colors ${
                      answered ? "cursor-default" : "cursor-pointer"
                    } ${optionClass(state, !!opt.correta)}`}
                  >
                    <span
                      className={`flex h-6.5 w-6.5 flex-none items-center justify-center rounded-full border-[1.5px] text-[0.82rem] font-semibold ${letterClass(
                        state,
                        !!opt.correta
                      )}`}
                    >
                      {LETTERS[i]}
                    </span>
                    <span className="pt-0.5 text-neutral-900 dark:text-neutral-100">
                      <RichText text={opt.texto} />
                    </span>
                  </button>
                )}
              />
            </label>
          ))}
        </RadioGroup>

        {answered && (
          <div className={`quiz-feedback ${log[log.length - 1]?.correct ? "good" : "bad"}`}>
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
