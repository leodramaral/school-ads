// Repetição espaçada (SM-2 simplificado): certo/errado já vindo da correção
// automática do quiz (ou da autoavaliação do flashcard) é usado como "quality"
// (5 ou 0). Estado persiste no localStorage, indexado pelo id da questão/card —
// cada deck (simulado, flashcards) usa sua própria chave, para não misturar
// progresso de coisas conceitualmente diferentes.

import { shuffle } from "./shuffle.js";

const STORAGE_KEY = "simulado-srs-v1";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const MIN_EASE = 1.3;
const INITIAL_EASE = 2.5;

export function loadState(storageKey = STORAGE_KEY) {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : {};
  } catch {
    // localStorage indisponível (modo privado, etc.) — segue sem persistência.
    return {};
  }
}

export function saveState(state, storageKey = STORAGE_KEY) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
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

// Monta um round priorizando, nessa ordem: revisões atrasadas (mais atrasada
// primeiro), depois itens nunca vistos, depois revisões ainda não devidas (a
// que vence mais cedo). Itens nunca vistos ficam em um grupo à parte —
// misturá-los com as revisões pela mesma "dueDate" faria eles sempre vencerem
// as revisões de verdade, já que "nunca visto" não tem um timestamp real.
// Genérico o bastante para servir tanto o simulado quanto os flashcards —
// cada chamador decide o que fazer com o item além do `srsCard` anexado
// (ex.: embaralhar alternativas).
export function buildRound(bank, srsState, roundSize) {
  const now = Date.now();
  const withCard = bank.map((item) => ({ item, card: srsState[item.id] ?? defaultCard() }));

  const dueReview = withCard.filter(({ card }) => card.lastReviewed && isDue(card, now));
  const newCards = withCard.filter(({ card }) => !card.lastReviewed);
  const upcoming = withCard.filter(({ card }) => card.lastReviewed && !isDue(card, now));
  dueReview.sort((a, b) => a.card.dueDate - b.card.dueDate);
  upcoming.sort((a, b) => a.card.dueDate - b.card.dueDate);

  let picked = dueReview.slice(0, roundSize);
  if (picked.length < roundSize) {
    picked = picked.concat(shuffle(newCards).slice(0, roundSize - picked.length));
  }
  if (picked.length < roundSize) {
    picked = picked.concat(upcoming.slice(0, roundSize - picked.length));
  }

  return shuffle(picked).map(({ item, card }) => ({ ...item, srsCard: card }));
}
