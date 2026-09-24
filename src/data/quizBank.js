// Banco de questões do quiz interativo (Matrizes e Determinantes).
// A cada tentativa, 6 questões são sorteadas do banco e as alternativas embaralhadas,
// então refazer o quiz sempre resulta em uma prova diferente.

export const QUIZ_BANK = [
  // ---------------- MATRIZES ----------------
  {
    id: "m1",
    topico: "Matrizes",
    enunciado: "Uma matriz $A$ tem 3 linhas e 5 colunas. Qual é a sua ordem (tipo)?",
    opcoes: [
      { texto: "$3 \\times 5$", correta: true },
      { texto: "$5 \\times 3$" },
      { texto: "$8$ (soma de linhas e colunas)" },
      { texto: "$15$ (produto de linhas e colunas)" },
    ],
    explicacao:
      "A ordem de uma matriz é sempre dada como (número de linhas) × (número de colunas). Como são 3 linhas e 5 colunas, a ordem é $3 \\times 5$.",
  },
  {
    id: "m2",
    topico: "Matrizes",
    enunciado: "Seja $A=[a_{ij}]_{2\\times 2}$, onde $a_{ij} = 2i - j$. Qual é o elemento $a_{21}$?",
    opcoes: [
      { texto: "$3$", correta: true },
      { texto: "$1$" },
      { texto: "$-3$" },
      { texto: "$5$" },
    ],
    explicacao:
      "Substituindo $i=2$ e $j=1$ na regra $a_{ij}=2i-j$: $a_{21} = 2(2) - 1 = 4 - 1 = 3$. Repare no jogo de sinal: é $2i$ menos $j$, não mais.",
  },
  {
    id: "m3",
    topico: "Matrizes",
    enunciado: "A matriz identidade $I_3$ é uma matriz quadrada de ordem 3 em que:",
    opcoes: [
      { texto: "Todos os elementos da diagonal principal são 1 e os demais são 0", correta: true },
      { texto: "Todos os elementos são iguais a 1" },
      { texto: "Todos os elementos são iguais a 0" },
      { texto: "Os elementos da diagonal secundária são 1 e os demais são 0" },
    ],
    explicacao:
      "Por definição, $I_n = [a_{ij}]$ com $a_{ij}=1$ se $i=j$ (diagonal principal) e $a_{ij}=0$ se $i\\neq j$. A matriz com 1's na diagonal secundária não é a identidade.",
  },
  {
    id: "m4",
    topico: "Matrizes",
    enunciado:
      "Se $A = \\begin{bmatrix} 2 & 3 & 0 \\\\ -1 & 4 & 5 \\end{bmatrix}$, qual é a matriz transposta $A^{t}$?",
    opcoes: [
      { texto: "$\\begin{bmatrix} 2 & -1 \\\\ 3 & 4 \\\\ 0 & 5 \\end{bmatrix}$", correta: true },
      { texto: "$\\begin{bmatrix} -2 & 1 \\\\ -3 & -4 \\\\ 0 & -5 \\end{bmatrix}$" },
      { texto: "$\\begin{bmatrix} 2 & 3 & 0 \\\\ -1 & 4 & 5 \\end{bmatrix}$ (a própria $A$)" },
      { texto: "$\\begin{bmatrix} 0 & 3 & 2 \\\\ 5 & 4 & -1 \\end{bmatrix}$" },
    ],
    explicacao:
      "Transpor significa transformar linhas em colunas, mantendo a ordem e o sinal de cada elemento. A 1ª linha de $A$ (2, 3, 0) vira a 1ª coluna de $A^t$, e a 2ª linha (-1, 4, 5) vira a 2ª coluna.",
  },
  {
    id: "m5",
    topico: "Matrizes",
    enunciado: "Qual é a matriz oposta de $A = \\begin{bmatrix} 3 & -5 \\\\ -2 & 0 \\end{bmatrix}$?",
    opcoes: [
      { texto: "$\\begin{bmatrix} -3 & 5 \\\\ 2 & 0 \\end{bmatrix}$", correta: true },
      { texto: "$\\begin{bmatrix} 3 & -5 \\\\ -2 & 0 \\end{bmatrix}$" },
      { texto: "$\\begin{bmatrix} -3 & -5 \\\\ -2 & 0 \\end{bmatrix}$" },
      { texto: "$\\begin{bmatrix} 5 & -3 \\\\ 0 & -2 \\end{bmatrix}$" },
    ],
    explicacao:
      "A matriz oposta $-A$ troca o sinal de todos os elementos: o positivo vira negativo e o negativo vira positivo. O zero continua zero, pois $-0=0$.",
  },
  {
    id: "m6",
    topico: "Matrizes",
    enunciado: "Para que a soma $A + B$ exista, é necessário que:",
    opcoes: [
      { texto: "$A$ e $B$ tenham exatamente a mesma ordem (mesmo número de linhas e colunas)", correta: true },
      { texto: "$A$ e $B$ sejam matrizes quadradas" },
      { texto: "O número de colunas de $A$ seja igual ao número de linhas de $B$" },
      { texto: "$A$ e $B$ tenham o mesmo determinante" },
    ],
    explicacao:
      "A adição (e a subtração) de matrizes é feita elemento a elemento, na mesma posição. Por isso só existe quando as duas matrizes têm exatamente a mesma ordem $m \\times n$.",
  },
  {
    id: "m7",
    topico: "Matrizes",
    enunciado:
      "Se $A$ é do tipo $3 \\times 2$ e $B$ é do tipo $2 \\times 4$, qual é a ordem da matriz produto $A \\cdot B$?",
    opcoes: [
      { texto: "$3 \\times 4$", correta: true },
      { texto: "$2 \\times 2$" },
      { texto: "$4 \\times 3$" },
      { texto: "O produto não existe" },
    ],
    explicacao:
      "O produto $A_{m\\times p} \\cdot B_{p \\times n}$ existe quando o número de colunas de $A$ ($p=2$) é igual ao número de linhas de $B$ ($p=2$), e resulta numa matriz $m \\times n = 3 \\times 4$: linhas de $A$, colunas de $B$.",
  },
  {
    id: "m8",
    topico: "Matrizes",
    enunciado: "Sobre a multiplicação de matrizes $A \\cdot B$, é correto afirmar que, em geral:",
    opcoes: [
      { texto: "$A \\cdot B \\neq B \\cdot A$ (a propriedade comutativa não vale)", correta: true },
      { texto: "$A \\cdot B = B \\cdot A$ sempre que os produtos existirem" },
      { texto: "$A \\cdot B$ é sempre igual à matriz nula" },
      { texto: "$A \\cdot B$ só existe se $A = B$" },
    ],
    explicacao:
      "Diferente da multiplicação de números reais, a multiplicação de matrizes não é comutativa: trocar a ordem dos fatores normalmente muda o resultado (e pode até mudar se o produto existe).",
  },
  {
    id: "m9",
    topico: "Matrizes",
    enunciado:
      "Dada $A = \\begin{bmatrix} 1 & 2 \\\\ -3 & 4 \\end{bmatrix}$, qual é o elemento da posição (linha 2, coluna 1) do produto $A \\cdot A$?",
    opcoes: [
      { texto: "$-15$", correta: true },
      { texto: "$13$" },
      { texto: "$5$" },
      { texto: "$-9$" },
    ],
    explicacao:
      "O elemento (2,1) do produto é (2ª linha de $A$) vezes (1ª coluna de $A$), somando os produtos: $(-3)\\cdot 1 + 4\\cdot(-3) = -3 + (-12) = -15$. Repare no sinal: $4 \\cdot (-3)$ é negativo, e soma-se a $-3$.",
  },
  {
    id: "m10",
    topico: "Matrizes",
    enunciado: "Uma matriz quadrada $A$ é dita simétrica quando:",
    opcoes: [
      { texto: "$A = A^{t}$", correta: true },
      { texto: "$A = -A^{t}$" },
      { texto: "$A \\cdot A^{t} = 0$" },
      { texto: "Todos os elementos fora da diagonal são iguais a 1" },
    ],
    explicacao:
      "Matriz simétrica é aquela que coincide com sua transposta: $a_{ij} = a_{ji}$ para todo par $(i,j)$. Quando $A = -A^t$, ela é chamada anti-simétrica.",
  },
  {
    id: "m11",
    topico: "Matrizes",
    enunciado:
      "Multiplicando a matriz $A = \\begin{bmatrix} 4 & -1 \\\\ 0 & 2 \\end{bmatrix}$ pelo número real $-2$, obtemos:",
    opcoes: [
      { texto: "$\\begin{bmatrix} -8 & 2 \\\\ 0 & -4 \\end{bmatrix}$", correta: true },
      { texto: "$\\begin{bmatrix} 8 & 2 \\\\ 0 & 4 \\end{bmatrix}$" },
      { texto: "$\\begin{bmatrix} -8 & -2 \\\\ 0 & -4 \\end{bmatrix}$" },
      { texto: "$\\begin{bmatrix} 2 & -8 \\\\ -4 & 0 \\end{bmatrix}$" },
    ],
    explicacao:
      "Multiplica-se cada elemento por $-2$, respeitando o jogo de sinal (negativo × positivo = negativo; negativo × negativo = positivo): $4\\cdot(-2)=-8$, $-1\\cdot(-2)=2$, $0\\cdot(-2)=0$, $2\\cdot(-2)=-4$.",
  },
  {
    id: "m12",
    topico: "Matrizes",
    enunciado: "Duas matrizes $A$ e $B$, de mesma ordem, são iguais quando:",
    opcoes: [
      { texto: "Todos os elementos que ocupam a mesma posição são idênticos", correta: true },
      { texto: "Têm o mesmo determinante" },
      { texto: "A soma dos elementos de $A$ é igual à soma dos elementos de $B$" },
      { texto: "$A \\cdot B = I$" },
    ],
    explicacao:
      "Igualdade de matrizes é definida posição a posição: $A=B \\iff a_{ij}=b_{ij}$ para todo $i,j$. Não basta ter o mesmo determinante ou a mesma soma.",
  },

  // ---------------- DETERMINANTES ----------------
  {
    id: "d1",
    topico: "Determinantes",
    enunciado: "O determinante de $M = \\begin{bmatrix} 3 & 5 \\\\ 2 & 4 \\end{bmatrix}$ vale:",
    opcoes: [
      { texto: "$2$", correta: true },
      { texto: "$22$" },
      { texto: "$-2$" },
      { texto: "$12$" },
    ],
    explicacao:
      "Para ordem 2: $\\det M = a_{11}a_{22} - a_{12}a_{21} = 3\\cdot 4 - 5\\cdot 2 = 12 - 10 = 2$. É diagonal principal menos diagonal secundária.",
  },
  {
    id: "d2",
    topico: "Determinantes",
    enunciado: "Se uma matriz quadrada tem uma linha inteira formada só por zeros, o seu determinante é:",
    opcoes: [
      { texto: "Igual a zero", correta: true },
      { texto: "Igual a 1" },
      { texto: "Igual ao número de colunas" },
      { texto: "Indefinido" },
    ],
    explicacao:
      "Propriedade P1 dos determinantes: quando todos os elementos de uma fila (linha ou coluna) são nulos, o determinante da matriz é nulo.",
  },
  {
    id: "d3",
    topico: "Determinantes",
    enunciado: "Se trocarmos de posição duas linhas paralelas de uma matriz quadrada, o determinante:",
    opcoes: [
      { texto: "Muda de sinal, mas mantém o valor absoluto", correta: true },
      { texto: "Permanece exatamente igual" },
      { texto: "Fica igual a zero" },
      { texto: "É multiplicado por 2" },
    ],
    explicacao:
      "Propriedade P8: trocar a posição de duas filas paralelas troca o sinal do determinante. Isso é muito usado ao organizar contas antes de aplicar Laplace ou Sarrus.",
  },
  {
    id: "d4",
    topico: "Determinantes",
    enunciado:
      "Duas linhas de uma matriz quadrada são proporcionais (uma é múltiplo da outra). Podemos concluir que o determinante:",
    opcoes: [
      { texto: "É igual a zero", correta: true },
      { texto: "É igual a 1" },
      { texto: "É negativo" },
      { texto: "Não pode ser calculado" },
    ],
    explicacao:
      "Propriedade P3: se duas filas paralelas são proporcionais, o determinante é nulo — usando o Teorema de Jacobi é possível zerar uma fila inteira.",
  },
  {
    id: "d5",
    topico: "Determinantes",
    enunciado: "O cofator $A_{ij}$ de um elemento $a_{ij}$ é calculado por:",
    opcoes: [
      { texto: "$A_{ij} = (-1)^{i+j} \\cdot MC_{ij}$", correta: true },
      { texto: "$A_{ij} = (-1)^{i \\cdot j} \\cdot MC_{ij}$" },
      { texto: "$A_{ij} = MC_{ij}$, sem troca de sinal" },
      { texto: "$A_{ij} = i + j - MC_{ij}$" },
    ],
    explicacao:
      "O cofator é o menor complementar $MC_{ij}$ multiplicado por $(-1)^{i+j}$. Esse sinal alterna como um tabuleiro de xadrez: $+,-,+,-,\\ldots$ conforme a soma $i+j$ é par ou ímpar.",
  },
  {
    id: "d6",
    topico: "Determinantes",
    enunciado:
      "Qual técnica prática é usada especificamente para calcular determinantes de matrizes $3\\times 3$, repetindo as duas primeiras colunas ao lado da matriz?",
    opcoes: [
      { texto: "Regra de Sarrus", correta: true },
      { texto: "Regra de Cramer" },
      { texto: "Teorema de Jacobi" },
      { texto: "Regra de Chió" },
    ],
    explicacao:
      "A Regra de Sarrus é o dispositivo prático (repetir as duas primeiras colunas) usado só para determinantes de 3ª ordem, não para ordem 2 nem para ordem maior que 3.",
  },
  {
    id: "d7",
    topico: "Determinantes",
    enunciado: "Se $A$ e $B$ são matrizes quadradas de mesma ordem, então $\\det(A \\cdot B)$ é igual a:",
    opcoes: [
      { texto: "$\\det A \\cdot \\det B$", correta: true },
      { texto: "$\\det A + \\det B$" },
      { texto: "$\\det A - \\det B$" },
      { texto: "$(\\det A)^{\\det B}$" },
    ],
    explicacao:
      "Propriedade P11: $\\det(AB) = \\det A \\cdot \\det B$. Já a soma $\\det(A+B)$ não é igual a $\\det A + \\det B$ em geral (propriedade P13).",
  },
  {
    id: "d8",
    topico: "Determinantes",
    enunciado: "O Teorema de Jacobi afirma que o determinante de uma matriz não se altera quando:",
    opcoes: [
      {
        texto: "Somamos a uma fila uma combinação linear dos elementos correspondentes de filas paralelas",
        correta: true,
      },
      { texto: "Multiplicamos todas as filas por um mesmo número" },
      { texto: "Trocamos a matriz pela sua transposta e multiplicamos por -1" },
      { texto: "Somamos 1 a cada elemento da matriz" },
    ],
    explicacao:
      "O Teorema de Jacobi permite substituir uma fila pela soma dela com um múltiplo de outra fila paralela, sem alterar o valor do determinante — muito útil para criar zeros antes de aplicar Laplace.",
  },
  {
    id: "d9",
    topico: "Determinantes",
    enunciado: "Multiplicando todos os elementos de uma única fila de uma matriz $3\\times 3$ por $5$, o novo determinante fica:",
    opcoes: [
      { texto: "5 vezes o determinante original", correta: true },
      { texto: "$5^3 = 125$ vezes o determinante original" },
      { texto: "Igual ao determinante original" },
      { texto: "Dividido por 5" },
    ],
    explicacao:
      "Propriedade P7: multiplicar todos os elementos de uma fila por um número real multiplica o determinante por esse mesmo número. (Se a matriz inteira fosse multiplicada por $k$, aí sim o determinante seria multiplicado por $k^n$ — propriedade P12.)",
  },
  {
    id: "d10",
    topico: "Determinantes",
    enunciado:
      "Para uma matriz triangular (todos os elementos acima ou abaixo da diagonal principal são nulos), o determinante é igual a:",
    opcoes: [
      { texto: "O produto dos elementos da diagonal principal", correta: true },
      { texto: "A soma dos elementos da diagonal principal" },
      { texto: "Sempre zero" },
      { texto: "O maior elemento da matriz" },
    ],
    explicacao:
      "Propriedade P9: quando os elementos acima ou abaixo da diagonal principal são todos nulos, o determinante é simplesmente o produto dos elementos dessa diagonal.",
  },
  {
    id: "d11",
    topico: "Determinantes",
    enunciado: "Uma matriz quadrada $A$ admite inversa $A^{-1}$ se, e somente se:",
    opcoes: [
      { texto: "$\\det A \\neq 0$", correta: true },
      { texto: "$\\det A = 0$" },
      { texto: "$A$ é simétrica" },
      { texto: "$A$ é a matriz identidade" },
    ],
    explicacao:
      "A fórmula $A^{-1} = \\dfrac{1}{\\det A}\\cdot adjA$ só faz sentido quando $\\det A \\neq 0$. Se $\\det A = 0$, a matriz é chamada singular e não tem inversa.",
  },
  {
    id: "d12",
    topico: "Determinantes",
    enunciado: "A matriz adjunta de $A$ ($adj\\,A$) é definida como:",
    opcoes: [
      { texto: "A transposta da matriz dos cofatores de $A$", correta: true },
      { texto: "A própria matriz dos cofatores, sem transpor" },
      { texto: "A matriz $A$ multiplicada por $-1$" },
      { texto: "A matriz identidade de mesma ordem de $A$" },
    ],
    explicacao:
      "$adj\\,A = (\\overline{A})^{t}$, onde $\\overline{A}$ é a matriz formada pelos cofatores de cada elemento de $A$. É essa matriz adjunta que entra na fórmula da inversa.",
  },
];
