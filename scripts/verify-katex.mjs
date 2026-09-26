// Verifica que todas as expressões LaTeX usadas no site (banco de questões + páginas)
// são renderizáveis pelo KaTeX, sem precisar abrir um navegador.
import katex from "katex";
import { readFileSync } from "node:fs";
import { QUIZ_BANK_LOADERS } from "../src/data/quizBank/index.js";
import { FLASHCARD_BANK_LOADERS } from "../src/data/flashcardBank/index.js";

let errors = 0;
let checked = 0;

function check(math, context) {
  checked++;
  try {
    katex.renderToString(math, { throwOnError: true, strict: "warn" });
  } catch (err) {
    errors++;
    console.error(`\n[ERRO] ${context}\n  math: ${math}\n  -> ${err.message}`);
  }
}

// 1) Bancos de questões (um por matéria): extrai todos os trechos $...$
for (const [subject, load] of Object.entries(QUIZ_BANK_LOADERS)) {
  const bank = await load();
  for (const q of bank) {
    const fields = [q.enunciado, q.explicacao, ...q.opcoes.map((o) => o.texto)];
    for (const field of fields) {
      const matches = field.match(/\$[^$]+\$/g) || [];
      for (const m of matches) {
        check(m.slice(1, -1), `quizBank[${subject}][${q.id}]`);
      }
    }
  }
}

// 2) Bancos de flashcards (um por matéria): extrai todos os trechos $...$
for (const [subject, load] of Object.entries(FLASHCARD_BANK_LOADERS)) {
  const bank = await load();
  for (const card of bank) {
    const fields = [card.frente, card.verso];
    for (const field of fields) {
      const matches = field.match(/\$[^$]+\$/g) || [];
      for (const m of matches) {
        check(m.slice(1, -1), `flashcardBank[${subject}][${card.id}]`);
      }
    }
  }
}

// 3) Páginas JSX: extrai math="..." (aceita aspas simples/duplas)
const pages = [
  "src/pages/matematica/Matrizes.jsx",
  "src/pages/matematica/Determinantes.jsx",
  "src/pages/matematica/Pratica.jsx",
  "src/pages/Home.jsx",
];

for (const page of pages) {
  const src = readFileSync(new URL(`../${page}`, import.meta.url), "utf-8");
  const regex = /math="((?:[^"\\]|\\.)*)"/g;
  let match;
  while ((match = regex.exec(src))) {
    check(match[1], page);
  }
}

console.log(`\nVerificação concluída: ${checked} expressões checadas, ${errors} erro(s).`);
process.exit(errors > 0 ? 1 : 0);
