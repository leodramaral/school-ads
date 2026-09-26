// Um loader por matéria em vez de um import estático: assim o banco de
// flashcards de uma matéria só entra no bundle de quem realmente abre os
// flashcards dela, em vez de vir junto com o de todas as outras matérias.
export const FLASHCARD_BANK_LOADERS = {
  matematica: () => import("./matematica.js").then((m) => m.FLASHCARD_BANK),
  ihc: () => import("./ihc.js").then((m) => m.FLASHCARD_BANK),
};
