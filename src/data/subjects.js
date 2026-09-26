// Modelo de navegação: matéria → capítulos (assuntos) → âncoras internas,
// e matéria → prova → simulado. Substitui o antigo sections.js (lista plana,
// sem noção de matéria) para suportar múltiplas matérias no mesmo site.

export const SUBJECTS = [
  {
    slug: "matematica",
    label: "Matemática Aplicada II",
    shortLabel: "Matemática",
    chapters: [
      {
        slug: "matrizes",
        label: "Matrizes",
        eyebrow: "Capítulo 1",
        description:
          "Definição, tipos especiais, operações (soma, subtração, multiplicação) e matriz inversa.",
        items: [
          { id: "o-que-e", label: "O que é uma matriz" },
          { id: "tipos-especiais", label: "Tipos especiais de matrizes" },
          { id: "igualdade", label: "Igualdade de matrizes" },
          { id: "transposta", label: "Matriz transposta" },
          { id: "oposta-simetrica", label: "Matriz oposta e matriz simétrica" },
          { id: "soma-subtracao", label: "Adição e subtração" },
          { id: "escalar", label: "Multiplicação por um número real" },
          { id: "multiplicacao", label: "Multiplicação de matrizes" },
          { id: "inversa", label: "Matriz inversa" },
        ],
      },
      {
        slug: "determinantes",
        label: "Determinantes",
        eyebrow: "Capítulo 2",
        description:
          "Ordem 2 e 3, cofatores, Laplace, Sarrus, propriedades e o Teorema de Jacobi em detalhe.",
        items: [
          { id: "o-que-e", label: "O que é um determinante" },
          { id: "ordem-1-2", label: "Determinante de ordem 1 e 2" },
          { id: "menor-cofator", label: "Menor complementar e cofator" },
          { id: "adjunta", label: "Matriz adjunta" },
          { id: "laplace", label: "Teorema de Laplace (ordem 3 ou mais)" },
          { id: "sarrus", label: "Regra de Sarrus" },
          { id: "propriedades", label: "Propriedades dos determinantes" },
          { id: "jacobi", label: "Teorema de Jacobi" },
          { id: "chio", label: "Regra de Chió" },
          { id: "inversa-determinante", label: "Matriz inversa via determinante" },
        ],
      },
    ],
    exam: {
      slug: "npc1",
      label: "Prova NPC1",
      eyebrow: "Foco na prova",
      description: "Formato da prova, questões descritivas modelo e o simulado de treino.",
      items: [
        { id: "formato", label: "Como é a prova do 1º NPC" },
        { id: "questao-jacobi", label: "Modelo — Teorema de Jacobi" },
        { id: "questao-calculo-livre", label: "Modelo — cálculo livre" },
        { id: "checklist", label: "Checklist antes da prova" },
      ],
      simulado: {
        slug: "simulado",
        label: "Simulado",
        title: "Matrizes e Determinantes",
      },
    },
    credit: {
      sourceNote:
        "Baseado nas notas de aula de Geometria Analítica I: Matrizes, Determinantes e Sistemas Lineares (Profª Viviane Carla Fortulan).",
      pdfHref: "./apostila-geometria-analitica-i.pdf",
      pdfLabel: "Baixar apostila original em PDF",
    },
  },
];

export function chapterPath(subject, chapter) {
  return `/${subject.slug}/${chapter.slug}`;
}

export function examPath(subject) {
  return `/${subject.slug}/${subject.exam.slug}`;
}

export function simuladoPath(subject) {
  return `${examPath(subject)}/${subject.exam.simulado.slug}`;
}

export function getSubjectBySlug(slug) {
  return SUBJECTS.find((s) => s.slug === slug) ?? null;
}

export function getActiveSubject(pathname) {
  return getSubjectBySlug(pathname.split("/")[1]);
}
