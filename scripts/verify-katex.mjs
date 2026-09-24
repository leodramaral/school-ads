// Verifica que todas as expressões LaTeX usadas no site (banco de questões + páginas)
// são renderizáveis pelo KaTeX, sem precisar abrir um navegador.
import katex from "katex";
import { readFileSync } from "node:fs";
import { QUIZ_BANK } from "../src/data/quizBank.js";

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

// 1) Banco de questões: extrai todos os trechos $...$
for (const q of QUIZ_BANK) {
  const fields = [q.enunciado, q.explicacao, ...q.opcoes.map((o) => o.texto)];
  for (const field of fields) {
    const matches = field.match(/\$[^$]+\$/g) || [];
    for (const m of matches) {
      check(m.slice(1, -1), `quizBank[${q.id}]`);
    }
  }
}

// 2) Páginas JSX: extrai math="..." (aceita aspas simples/duplas)
const pages = [
  "src/pages/Matrizes.jsx",
  "src/pages/Determinantes.jsx",
  "src/pages/Pratica.jsx",
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
