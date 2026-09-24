// Estrutura de navegação compartilhada entre a Sidebar e as páginas de conteúdo.
// Cada seção corresponde a um capítulo/rota; "items" são as âncoras internas
// da página, mostradas na sidebar quando esse capítulo está ativo.

export const SECTIONS = [
  {
    path: "/matrizes",
    label: "Matrizes",
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
    path: "/determinantes",
    label: "Determinantes",
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
  {
    path: "/pratica",
    label: "Prova NPC1",
    items: [
      { id: "formato", label: "Como é a prova do 1º NPC" },
      { id: "questao-jacobi", label: "Modelo — Teorema de Jacobi" },
      { id: "questao-calculo-livre", label: "Modelo — cálculo livre" },
      { id: "checklist", label: "Checklist antes da prova" },
    ],
  },
];
