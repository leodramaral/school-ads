// Repetição espaçada (SM-2 simplificado): certo/errado já vindo da correção
// automática do quiz é usado como "quality" (5 ou 0), sem autoavaliação extra.
// Estado por questão persiste no localStorage, indexado pelo id da questão.

const STORAGE_KEY = "simulado-srs-v1";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const MIN_EASE = 1.3;
const INITIAL_EASE = 2.5;

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    // localStorage indisponível (modo privado, etc.) — segue sem persistência.
    return {};
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage indisponível — ignora, a sessão atual continua funcionando.
  }
}

export function defaultCard() {
  return { repetitions: 0, easeFactor: INITIAL_EASE, interval: 0, dueDate: 0, lastReviewed: null };
}

export function isDue(card, now) {
  return card.dueDate <= now;
}

export function schedule(card, correct, now) {
  const quality = correct ? 5 : 0;
  const easeFactor = Math.max(
    MIN_EASE,
    card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  let repetitions;
  let interval;
  if (!correct) {
    // Erro: volta a ficar devida imediatamente (mesma sessão), não só amanhã —
    // reforço reaparece logo, o espaçamento em dias só vale para acertos.
    repetitions = 0;
    interval = 0;
  } else {
    repetitions = card.repetitions + 1;
    if (repetitions === 1) interval = 1;
    else if (repetitions === 2) interval = 6;
    else interval = Math.round(card.interval * easeFactor);
  }

  return {
    repetitions,
    easeFactor,
    interval,
    dueDate: now + interval * ONE_DAY_MS,
    lastReviewed: now,
  };
}
