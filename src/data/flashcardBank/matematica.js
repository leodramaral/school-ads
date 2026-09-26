// Banco de flashcards de Matemática (Matrizes e Determinantes). Diferente do
// QUIZ_BANK (múltipla escolha), aqui cada card é um par frente/verso simples —
// definição, notação ou propriedade — pensado para revisão rápida.
// Ids prefixados com "fm"/"fd" para não colidir com o namespace do simulado
// (m*/d*), embora o progresso de flashcards já use uma chave de localStorage
// separada.

export const FLASHCARD_BANK = [
  // ---------------- MATRIZES ----------------
  {
    id: "fm1",
    topico: "Matrizes",
    frente: "O que é uma matriz do tipo (ordem) $m \\times n$?",
    verso:
      "Uma tabela de números com $m$ linhas e $n$ colunas, nessa ordem (linhas vezes colunas), com $m \\cdot n$ elementos ao todo.",
  },
  {
    id: "fm2",
    topico: "Matrizes",
    frente: "Na notação $a_{ij}$, o que representam $i$ e $j$?",
    verso: "$i$ é o índice da linha e $j$ é o índice da coluna — o índice de linha sempre vem primeiro.",
  },
  {
    id: "fm3",
    topico: "Matrizes",
    frente: "O que é uma matriz linha e o que é uma matriz coluna?",
    verso:
      "Matriz linha é toda matriz $1 \\times n$ (uma única linha). Matriz coluna é toda matriz $n \\times 1$ (uma única coluna).",
  },
  {
    id: "fm4",
    topico: "Matrizes",
    frente: "O que é uma matriz quadrada e o que se chama de \"ordem\" nesse caso?",
    verso:
      "É toda matriz do tipo $n \\times n$ (mesmo número de linhas e colunas). Nesse caso, diz-se que a matriz tem ordem $n$.",
  },
  {
    id: "fm5",
    topico: "Matrizes",
    frente: "Em uma matriz quadrada, quais elementos formam a diagonal principal e quais formam a secundária?",
    verso:
      "Diagonal principal: elementos em que $i = j$. Diagonal secundária: elementos em que $i + j = n + 1$.",
  },
  {
    id: "fm6",
    topico: "Matrizes",
    frente: "O que é a matriz nula $O_{m \\times n}$?",
    verso: "A matriz em que todos os elementos são iguais a zero.",
  },
  {
    id: "fm7",
    topico: "Matrizes",
    frente: "O que caracteriza uma matriz diagonal?",
    verso:
      "É uma matriz quadrada em que só os elementos da diagonal principal podem ser diferentes de zero — todo o resto é zero.",
  },
  {
    id: "fm8",
    topico: "Matrizes",
    frente: "O que é a matriz identidade $I_n$?",
    verso:
      "Uma matriz diagonal em que, além disso, todos os elementos da diagonal principal são iguais a 1: $a_{ij}=1$ se $i=j$, e $a_{ij}=0$ se $i \\neq j$.",
  },
  {
    id: "fm9",
    topico: "Matrizes",
    frente: "Quando duas matrizes $A$ e $B$ são consideradas iguais?",
    verso:
      "Quando têm a mesma ordem $m \\times n$ e todo elemento de $A$ é idêntico ao elemento de $B$ na mesma posição.",
  },
  {
    id: "fm10",
    topico: "Matrizes",
    frente: "O que é a matriz transposta $A^{t}$ e qual é a sua ordem, se $A$ é $m \\times n$?",
    verso:
      "É obtida transformando cada linha de $A$ na coluna correspondente (nenhum valor muda, só a posição). $A^{t}$ é do tipo $n \\times m$.",
  },
  {
    id: "fm11",
    topico: "Matrizes",
    frente: "O que é a matriz oposta $-A$?",
    verso: "É a matriz obtida trocando o sinal de todos os elementos de $A$, sem exceção.",
  },
  {
    id: "fm12",
    topico: "Matrizes",
    frente: "Quando uma matriz quadrada $A$ é chamada de simétrica? E de anti-simétrica?",
    verso:
      "Simétrica quando $A = A^{t}$ (isto é, $a_{ij} = a_{ji}$). Anti-simétrica quando $A = -A^{t}$.",
  },
  {
    id: "fm13",
    topico: "Matrizes",
    frente: "Qual é a condição de existência da soma $A + B$, e como ela é calculada?",
    verso:
      "$A+B$ só existe se $A$ e $B$ tiverem exatamente a mesma ordem $m \\times n$. É feita elemento a elemento: $c_{ij} = a_{ij} + b_{ij}$.",
  },
  {
    id: "fm14",
    topico: "Matrizes",
    frente: "Como a subtração $A - B$ é feita, na prática?",
    verso:
      "Como a soma de $A$ com a oposta de $B$: $A - B = A + (-B)$. Primeiro troca-se o sinal de todos os elementos de $B$, depois soma-se normalmente.",
  },
  {
    id: "fm15",
    topico: "Matrizes",
    frente: "O que significa multiplicar uma matriz $A$ por um número real (escalar) $x$?",
    verso: "Multiplicar cada elemento de $A$ por $x$.",
  },
  {
    id: "fm16",
    topico: "Matrizes",
    frente: "Qual é a condição de existência do produto $A \\cdot B$, e qual a ordem do resultado?",
    verso:
      "Só existe se o número de colunas de $A$ for igual ao número de linhas de $B$: $A_{m\\times p}\\cdot B_{p\\times n} \\Rightarrow (A\\cdot B)_{m\\times n}$. O resultado herda as linhas de $A$ e as colunas de $B$.",
  },
  {
    id: "fm17",
    topico: "Matrizes",
    frente: "Como se calcula cada elemento $c_{ij}$ do produto $A \\cdot B$?",
    verso:
      "Pega-se a linha $i$ de $A$ e a coluna $j$ de $B$, multiplicam-se os elementos correspondentes um a um, e soma-se tudo.",
  },
  {
    id: "fm18",
    topico: "Matrizes",
    frente: "A multiplicação de matrizes é comutativa? Ou seja, $A\\cdot B = B\\cdot A$ sempre?",
    verso:
      "Não. Em geral $A\\cdot B \\neq B\\cdot A$ — trocar a ordem pode até mudar se o produto existe.",
  },
  {
    id: "fm19",
    topico: "Matrizes",
    frente: "O que define a matriz inversa $A^{-1}$ de uma matriz quadrada $A$?",
    verso: "É a matriz de mesma ordem tal que $A \\cdot A^{-1} = A^{-1} \\cdot A = I_n$.",
  },
  {
    id: "fm20",
    topico: "Matrizes",
    frente: "Toda matriz quadrada tem inversa?",
    verso:
      "Não. Assim como o número 0 não tem inverso multiplicativo, existem matrizes sem inversa — o critério que decide isso é o valor do determinante de $A$.",
  },

  // ---------------- DETERMINANTES ----------------
  {
    id: "fd1",
    topico: "Determinantes",
    frente: "Para que tipo de matriz existe determinante, e como ele é indicado?",
    verso:
      "Só existe para matrizes quadradas (ordem $n\\times n$). É indicado por $\\det M$ ou pela matriz entre barras verticais, $|M|$.",
  },
  {
    id: "fd2",
    topico: "Determinantes",
    frente: "Qual é a fórmula do determinante de uma matriz de ordem 2?",
    verso:
      "$\\det \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix} = a_{11}a_{22} - a_{12}a_{21}$ — produto da diagonal principal menos produto da diagonal secundária.",
  },
  {
    id: "fd3",
    topico: "Determinantes",
    frente: "O que é o menor complementar $MC_{ij}$ de um elemento $a_{ij}$?",
    verso: "É o determinante que sobra quando se apagam a linha $i$ e a coluna $j$ da matriz.",
  },
  {
    id: "fd4",
    topico: "Determinantes",
    frente: "Como se calcula o cofator $A_{ij}$ a partir do menor complementar?",
    verso: "$A_{ij} = (-1)^{i+j} \\cdot MC_{ij}$ — o menor complementar com um possível ajuste de sinal.",
  },
  {
    id: "fd5",
    topico: "Determinantes",
    frente: "Como funciona o padrão de sinais \"tabuleiro de xadrez\" do fator $(-1)^{i+j}$?",
    verso:
      "Vale $+1$ quando $i+j$ é par e $-1$ quando $i+j$ é ímpar, começando com $+$ no canto $a_{11}$.",
  },
  {
    id: "fd6",
    topico: "Determinantes",
    frente: "O que é a matriz adjunta $adj\\,A$?",
    verso:
      "É a transposta da matriz dos cofatores $\\overline{A}$ (a matriz formada pelo cofator de cada elemento de $A$): $adj\\,A = (\\overline{A})^{t}$.",
  },
  {
    id: "fd7",
    topico: "Determinantes",
    frente: "O que diz o Teorema de Laplace?",
    verso:
      "Permite calcular o determinante de qualquer matriz quadrada escolhendo uma única fila (linha ou coluna) e somando o produto de cada elemento dessa fila pelo seu cofator: $\\det M = \\sum_i a_{ij}A_{ij}$.",
  },
  {
    id: "fd8",
    topico: "Determinantes",
    frente: "Para qual ordem de matriz vale a Regra de Sarrus, e qual é a primeira etapa dela?",
    verso:
      "Vale só para matrizes $3\\times 3$. Primeira etapa: repetir as duas primeiras colunas à direita da matriz, para visualizar as seis diagonais.",
  },
  {
    id: "fd9",
    topico: "Determinantes",
    frente: "Na Regra de Sarrus, quais diagonais entram com sinal positivo e quais com sinal negativo?",
    verso:
      "As três diagonais \"para baixo\" (principal e paralelas) entram com sinal positivo; as três \"para cima\" (secundária e paralelas) entram com sinal negativo.",
  },
  {
    id: "fd10",
    topico: "Determinantes",
    frente: "Se uma fila (linha ou coluna) de uma matriz é toda nula, quanto vale o determinante?",
    verso: "Zero.",
  },
  {
    id: "fd11",
    topico: "Determinantes",
    frente: "Se duas filas paralelas de uma matriz são iguais ou proporcionais, quanto vale o determinante?",
    verso: "Zero, nos dois casos.",
  },
  {
    id: "fd12",
    topico: "Determinantes",
    frente: "O que diz o Teorema de Jacobi?",
    verso:
      "O determinante de uma matriz não se altera quando se soma, aos elementos de uma fila, uma combinação linear dos elementos correspondentes de filas paralelas a ela.",
  },
  {
    id: "fd13",
    topico: "Determinantes",
    frente: "Para que serve, na prática, aplicar o Teorema de Jacobi antes de usar Laplace?",
    verso:
      "Para \"fabricar zeros\" em uma fila sem alterar o valor do determinante, tornando o cálculo por Laplace bem mais curto.",
  },
  {
    id: "fd14",
    topico: "Determinantes",
    frente: "É verdade que $\\det A = \\det A^{t}$?",
    verso: "Sim — transpor uma matriz não muda o valor do seu determinante.",
  },
  {
    id: "fd15",
    topico: "Determinantes",
    frente: "O que acontece com o determinante ao trocar de posição duas filas paralelas?",
    verso: "O sinal do determinante se inverte.",
  },
  {
    id: "fd16",
    topico: "Determinantes",
    frente: "Qual a diferença entre multiplicar por $k$ uma única fila da matriz e multiplicar a matriz inteira por $k$?",
    verso:
      "Multiplicar uma fila por $k$ multiplica o determinante por $k$. Multiplicar a matriz inteira (ordem $n$) por $k$ multiplica o determinante por $k^{n}$.",
  },
  {
    id: "fd17",
    topico: "Determinantes",
    frente: "Se uma matriz é triangular (zeros acima ou abaixo da diagonal principal), como se calcula o determinante?",
    verso: "É o produto dos elementos da diagonal principal.",
  },
  {
    id: "fd18",
    topico: "Determinantes",
    frente: "Como se relaciona $\\det(A\\cdot B)$ com $\\det A$ e $\\det B$? E $\\det(A^{-1})$?",
    verso: "$\\det(A\\cdot B) = \\det A \\cdot \\det B$, e por consequência $\\det(A^{-1}) = \\dfrac{1}{\\det A}$.",
  },
  {
    id: "fd19",
    topico: "Determinantes",
    frente: "Em que consiste a Regra de Chió, em linhas gerais?",
    verso:
      "Reduz a ordem do determinante de $n$ para $n-1$: escolhe-se um elemento igual a 1, apaga-se sua linha e coluna, de cada elemento restante subtrai-se o produto dos dois elementos eliminados que se cruzam com ele, e multiplica-se o resultado por $(-1)^{i+j}$ (linha/coluna apagadas).",
  },
  {
    id: "fd20",
    topico: "Determinantes",
    frente: "Qual é a fórmula da matriz inversa usando determinante e adjunta, e quando ela é válida?",
    verso: "$A^{-1} = \\dfrac{1}{\\det A} \\cdot adj\\,A$, válida apenas quando $\\det A \\neq 0$.",
  },
  {
    id: "fd21",
    topico: "Determinantes",
    frente: "Qual é o atalho para inverter uma matriz $2\\times 2$, $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$?",
    verso:
      "Trocar de posição os elementos da diagonal principal, trocar o sinal dos da diagonal secundária, e dividir tudo pelo determinante: $A^{-1} = \\dfrac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$.",
  },
  {
    id: "fd22",
    topico: "Determinantes",
    frente: "O determinante de uma matriz $1\\times 1$, $M=[a_{11}]$, vale o quê?",
    verso: "O próprio elemento: $\\det M = a_{11}$.",
  },
];
