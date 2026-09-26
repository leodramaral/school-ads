// Um loader por matéria em vez de um import estático: assim o banco de
// questões de uma matéria só entra no bundle de quem realmente abre o
// simulado dela, em vez de vir junto com o de todas as outras matérias.
export const QUIZ_BANK_LOADERS = {
  matematica: () => import("./matematica.js").then((m) => m.QUIZ_BANK),
  ihc: () => import("./ihc.js").then((m) => m.QUIZ_BANK),
};
