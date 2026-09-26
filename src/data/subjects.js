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
  {
    slug: "ihc",
    label: "Interação Humano-Computador",
    shortLabel: "IHC",
    chapters: [
      {
        slug: "introducao",
        label: "Introdução à IHC",
        eyebrow: "Aula 1",
        description:
          "Definição e escopo da IHC, a distinção entre interface e interação, e o paradigma do Design Centrado no Usuário.",
        items: [
          { id: "o-que-e-ihc", label: "O que é IHC" },
          { id: "interface-vs-interacao", label: "Interface vs. interação" },
          { id: "design-centrado-usuario", label: "Design Centrado no Usuário (DCU)" },
        ],
      },
      {
        slug: "usabilidade",
        label: "Usabilidade e Acessibilidade",
        eyebrow: "Aula 2",
        description:
          "A norma ISO 9241-11, os três pilares da usabilidade, métricas complementares e acessibilidade.",
        items: [
          { id: "norma-iso", label: "A norma ISO 9241-11" },
          { id: "tres-pilares", label: "Os três pilares da usabilidade" },
          { id: "metricas-complementares", label: "Métricas complementares" },
          { id: "acessibilidade", label: "Acessibilidade" },
        ],
      },
      {
        slug: "heuristicas",
        label: "As 10 Heurísticas de Nielsen",
        eyebrow: "Aula 3",
        description: "As dez heurísticas de usabilidade de Jakob Nielsen, com exemplos práticos.",
        items: [{ id: "heuristicas-nielsen", label: "As 10 heurísticas" }],
      },
      {
        slug: "fatores-humanos",
        label: "Fatores Humanos e Psicologia Cognitiva",
        eyebrow: "Aula 4",
        description:
          "O Processador Humano de Informações (MHP), a Lei de Miller, carga cognitiva e exemplos reais.",
        items: [
          { id: "mhp", label: "Processador Humano de Informações (MHP)" },
          { id: "lei-de-miller", label: "Lei de Miller e carga cognitiva" },
          { id: "reconhecimento-evocacao", label: "Reconhecimento vs. evocação" },
          { id: "exemplos-reais", label: "Exemplos reais sob a ótica psicológica" },
        ],
      },
      {
        slug: "ergonomia",
        label: "Ergonomia e Critérios de Scapin & Bastien",
        eyebrow: "Aula 5",
        description:
          "Os três pilares da ergonomia, os critérios de Scapin e Bastien, carga de trabalho mental e tratamento de erros.",
        items: [
          { id: "pilares-ergonomia", label: "Os três pilares da ergonomia" },
          { id: "criterios-scapin-bastien", label: "Critérios de Scapin e Bastien" },
          { id: "carga-trabalho-mental", label: "Carga de trabalho mental" },
          { id: "tratamento-erros", label: "Tratamento de erros" },
          { id: "consistencia-padronizacao", label: "Consistência e padronização" },
        ],
      },
    ],
    exam: {
      slug: "npc1",
      label: "Prova NPC1",
      eyebrow: "Foco na prova",
      description: "Revisão dos conceitos das 5 aulas e o simulado de treino.",
      items: [
        { id: "como-estudar", label: "Como usar esta revisão" },
        { id: "checklist", label: "Checklist antes da prova" },
      ],
      simulado: {
        slug: "simulado",
        label: "Simulado",
        title: "IHC: Conceitos e Fundamentos",
      },
    },
    credit: {
      sourceNote: "Baseado no Guia Integral de Estudos de IHC (resumo de aula).",
      pdfHref: "./resumo-ihc.pdf",
      pdfLabel: "Baixar resumo original em PDF",
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
