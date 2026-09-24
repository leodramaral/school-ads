import { InlineMath as M } from "react-katex";
import MathBlock from "../components/MathBlock.jsx";
import Callout from "../components/Callout.jsx";
import { Link } from "react-router-dom";

export default function Matrizes() {
  return (
    <>
      <p className="eyebrow">Capítulo 1</p>
      <h1>Matrizes</h1>
      <p className="lede mt-0">
        Antes de falar de determinantes, é preciso dominar bem o que é uma matriz, como ela é montada
        e quais operações podemos fazer com ela. Vamos com calma, sem pular nenhuma etapa.
      </p>

      <h2 id="o-que-e">O que é uma matriz</h2>
      <p>
        Uma <strong>matriz</strong> é simplesmente uma tabela de números organizada em linhas
        (horizontais) e colunas (verticais). Se a tabela tem <M math="m" /> linhas e <M math="n" />{" "}
        colunas, dizemos que ela é uma matriz do tipo (ou <strong>ordem</strong>) <M math="m \times n" />{" "}
        — sempre "linhas vezes colunas", nessa ordem. Ao todo, uma matriz <M math="m \times n" /> tem{" "}
        <M math="m \cdot n" /> elementos — um para cada combinação possível de linha e coluna.
      </p>

      <MathBlock math="A = \begin{bmatrix} 1 & -2 & 3 \\ 0 & 4 & 2 \end{bmatrix}" />
      <p className="center muted mt-0">
        Essa matriz <M math="A" /> tem 2 linhas e 3 colunas, então é do tipo <M math="2 \times 3" />.
      </p>

      <p>
        Cada número dentro da matriz é chamado de <strong>elemento</strong>. Para identificar a posição
        de um elemento, usamos dois índices: <M math="a_{ij}" /> é o elemento que está na linha{" "}
        <M math="i" /> e na coluna <M math="j" />. Por convenção, o índice de linha sempre vem primeiro.
      </p>

      <Callout kind="def" title="Notação geral">
        <p className="mt-0">
          Uma matriz <M math="A" /> do tipo <M math="m \times n" /> pode ser escrita de forma abreviada
          como:
        </p>
        <MathBlock math="A = [a_{ij}]_{m \times n}, \quad 1 \le i \le m, \ 1 \le j \le n" />
      </Callout>

      <p>
        Muitas vezes o exercício não te dá a matriz pronta — ele dá uma <strong>regra</strong> (uma
        fórmula) para montar cada elemento a partir de <M math="i" /> e <M math="j" />. Vamos ver isso
        com bastante cuidado, porque é aqui que erros de sinal aparecem com frequência.
      </p>

      <div className="callout callout--example">
        <h4>Exemplo resolvido — montando uma matriz a partir de uma regra</h4>
        <p className="mt-0">
          Monte a matriz <M math="A = [a_{ij}]_{2\times 2}" />, sabendo que <M math="a_{ij} = 2i - j" />.
        </p>
        <ol className="steps">
          <li>
            <strong>Entenda a estrutura.</strong> Uma matriz <M math="2\times 2" /> tem 2 linhas e 2
            colunas, ou seja, 4 elementos: <M math="a_{11}, a_{12}, a_{21}, a_{22}" />.
          </li>
          <li>
            <strong>Calcule cada elemento, um de cada vez</strong>, substituindo <M math="i" /> e{" "}
            <M math="j" /> na fórmula <M math="a_{ij} = 2i - j" />:
            <MathBlock math="a_{11} = 2(1) - 1 = 2 - 1 = 1" />
            <MathBlock math="a_{12} = 2(1) - 2 = 2 - 2 = 0" />
            <MathBlock math="a_{21} = 2(2) - 1 = 4 - 1 = 3" />
            <MathBlock math="a_{22} = 2(2) - 2 = 4 - 2 = 2" />
          </li>
          <li>
            <strong>Monte a matriz</strong> colocando cada elemento na sua posição (linha <M math="i" />
            , coluna <M math="j" />):
            <MathBlock math="A = \begin{bmatrix} 1 & 0 \\ 3 & 2 \end{bmatrix}" />
          </li>
        </ol>
      </div>

      <Callout kind="warn" title="Atenção — jogo de sinal">
        <p className="mt-0">
          Quando a fórmula tem subtração, como <M math="2i - j" />, resolva a multiplicação primeiro e
          só depois subtraia. Um erro muito comum é trocar a ordem: <M math="2i - j" /> não é o mesmo
          que <M math="j - 2i" />. Se a regra envolver números negativos (por exemplo{" "}
          <M math="a_{ij} = i - 2j" /> com <M math="j" /> podendo deixar o resultado negativo), lembre-se
          que "menos com menos dá mais": <M math="i - 2(-j)" /> nunca aparece aqui porque{" "}
          <M math="i" /> e <M math="j" /> são sempre índices positivos (1, 2, 3, ...), mas o{" "}
          <em>resultado</em> <M math="a_{ij}" /> pode, sim, ser negativo — e isso é normal.
        </p>
      </Callout>

      <h2 id="tipos-especiais">Tipos especiais de matrizes</h2>
      <p>
        Algumas configurações de matriz aparecem tanto que ganharam nomes próprios. Vale a pena
        decorar essa "galeria", porque as questões de múltipla escolha adoram testar se você reconhece
        cada uma delas.
      </p>

      <h3>Matriz linha e matriz coluna</h3>
      <p>
        <strong>Matriz linha</strong> é toda matriz <M math="1 \times n" /> (uma única linha).{" "}
        <strong>Matriz coluna</strong> é toda matriz <M math="n \times 1" /> (uma única coluna).
      </p>
      <MathBlock math="A = \begin{bmatrix} 4 & 7 & -3 & 1 \end{bmatrix}_{1\times 4} \qquad B = \begin{bmatrix} 4 \\ -1 \\ 0 \end{bmatrix}_{3\times 1}" />

      <h3>Matriz quadrada, diagonal principal e diagonal secundária</h3>
      <p>
        <strong>Matriz quadrada</strong> é toda matriz do tipo <M math="n \times n" /> — mesmo número de
        linhas e colunas. Nesse caso, dizemos que a matriz tem <strong>ordem</strong> <M math="n" />.
      </p>
      <p>
        Em uma matriz quadrada, a <strong>diagonal principal</strong> é formada pelos elementos em que{" "}
        <M math="i = j" /> (a "diagonal que desce da esquerda para a direita"). A{" "}
        <strong>diagonal secundária</strong> é formada pelos elementos em que <M math="i + j = n + 1" />{" "}
        (a diagonal que "sobe").
      </p>
      <div className="callout callout--example">
        <h4>Exemplo</h4>
        <MathBlock math="A_3 = \begin{bmatrix} -1 & 2 & 5 \\ 3 & 0 & -3 \\ 5 & 7 & -6 \end{bmatrix}" />
        <ul className="mt-0">
          <li>
            Diagonal principal ( <M math="i=j" /> ): <M math="-1, \ 0, \ -6" />
          </li>
          <li>
            Diagonal secundária ( <M math="i+j = n+1 = 4" /> ): <M math="5, \ 0, \ 5" />
          </li>
        </ul>
      </div>

      <h3>Matriz nula, matriz diagonal e matriz identidade</h3>
      <ul>
        <li>
          <strong>Matriz nula</strong> (<M math="O_{m\times n}" />): todos os elementos são zero.
        </li>
        <li>
          <strong>Matriz diagonal</strong>: matriz quadrada em que só os elementos da diagonal principal
          podem ser diferentes de zero — todo o resto é zero.
        </li>
        <li>
          <strong>Matriz identidade</strong> (<M math="I_n" />): matriz diagonal em que, além disso, os
          elementos da diagonal principal são todos iguais a 1.
        </li>
      </ul>
      <MathBlock math="I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}" />
      <Callout kind="def" title="A matriz identidade em uma linha">
        <MathBlock math="I_n = [a_{ij}], \quad a_{ij} = \begin{cases} 1, & \text{se } i = j \\ 0, & \text{se } i \neq j \end{cases}" />
      </Callout>

      <h2 id="igualdade">Igualdade de matrizes</h2>
      <p>
        Duas matrizes <M math="A" /> e <M math="B" /> são iguais quando têm a mesma ordem{" "}
        <M math="m \times n" /> <strong>e</strong> todo elemento de <M math="A" /> é idêntico ao
        elemento de <M math="B" /> que ocupa a mesma posição.
      </p>
      <div className="callout callout--example">
        <h4>Exemplo — usando igualdade de matrizes para achar incógnitas</h4>
        <p className="mt-0">
          Se <M math="\begin{bmatrix} 0 & b \\ -2 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 3 \\ -2 & c \end{bmatrix}" />
          , então cada posição precisa "bater": comparando a posição (1,2), <M math="b = 3" />; comparando
          a posição (2,2), <M math="c = 1" />.
        </p>
      </div>

      <h2 id="transposta">Matriz transposta</h2>
      <p>
        A <strong>transposta</strong> de uma matriz <M math="A" />, indicada por <M math="A^{t}" />, é
        obtida transformando cada linha de <M math="A" /> na coluna correspondente de{" "}
        <M math="A^{t}" /> (ou, o que dá no mesmo, cada coluna em linha). Nenhum valor muda — só a
        posição.
      </p>
      <ol className="steps">
        <li>
          <strong>Confira a ordem original.</strong> Se <M math="A" /> é do tipo <M math="m \times n" />
          , então <M math="A^{t}" /> será do tipo <M math="n \times m" />.
        </li>
        <li>
          <strong>Transforme a 1ª linha de <M math="A" /> na 1ª coluna de <M math="A^{t}" />.</strong>{" "}
          Depois a 2ª linha vira a 2ª coluna, e assim por diante.
        </li>
      </ol>
      <div className="callout callout--example">
        <h4>Exemplo</h4>
        <MathBlock math="A = \begin{bmatrix} 2 & 3 & 0 \\ -1 & -2 & 1 \end{bmatrix} \quad \Longrightarrow \quad A^{t} = \begin{bmatrix} 2 & -1 \\ 3 & -2 \\ 0 & 1 \end{bmatrix}" />
        <p className="mt-0">
          A 1ª linha de <M math="A" /> era <M math="(2, 3, 0)" /> e virou a 1ª coluna de{" "}
          <M math="A^{t}" />. A 2ª linha, <M math="(-1, -2, 1)" />, virou a 2ª coluna — sinais incluídos,
          sem trocar nada.
        </p>
      </div>

      <h2 id="oposta-simetrica">Matriz oposta e matriz simétrica</h2>
      <p>
        A <strong>matriz oposta</strong> de <M math="A" />, indicada por <M math="-A" />, é obtida
        trocando o sinal de <em>todos</em> os elementos de <M math="A" />.
      </p>
      <Callout kind="warn" title="Atenção — jogo de sinal">
        <p className="mt-0">
          Trocar o sinal de um elemento positivo o torna negativo, e vice-versa. O zero não muda
          (<M math="-0 = 0" />). Um erro comum é trocar o sinal só de alguns elementos — troque{" "}
          <strong>todos</strong>, sem exceção.
        </p>
        <MathBlock math="A = \begin{bmatrix} 3 & 0 \\ 4 & -1 \end{bmatrix} \quad \Longrightarrow \quad -A = \begin{bmatrix} -3 & 0 \\ -4 & 1 \end{bmatrix}" />
      </Callout>

      <p>
        Uma matriz quadrada <M math="A" /> é <strong>simétrica</strong> quando <M math="A = A^{t}" /> —
        ou seja, ela não muda ao ser transposta. Isso acontece quando os elementos "espelhados" em
        relação à diagonal principal são iguais: <M math="a_{ij} = a_{ji}" />. Quando{" "}
        <M math="A = -A^{t}" />, a matriz é chamada <strong>anti-simétrica</strong>.
      </p>

      <h2 id="soma-subtracao">Adição e subtração de matrizes</h2>
      <Callout kind="def" title="Condição de existência">
        <p className="mt-0">
          <M math="A + B" /> só existe se <M math="A" /> e <M math="B" /> tiverem exatamente a mesma
          ordem <M math="m \times n" />. A soma é feita <strong>elemento a elemento</strong>, na mesma
          posição: <M math="c_{ij} = a_{ij} + b_{ij}" />.
        </p>
      </Callout>
      <p>
        A subtração <M math="A - B" /> é, na prática, a soma de <M math="A" /> com a oposta de{" "}
        <M math="B" />: <M math="A - B = A + (-B)" />. Por isso, o primeiro passo de uma subtração é
        trocar o sinal de todos os elementos da segunda matriz.
      </p>

      <div className="callout callout--example">
        <h4>Exemplo — subtração, passo a passo</h4>
        <p className="mt-0">
          Calcule <M math="\begin{bmatrix} 4 & 7 \\ 3 & 0 \end{bmatrix} - \begin{bmatrix} 1 & 2 \\ 0 & -2 \end{bmatrix}" />.
        </p>
        <ol className="steps">
          <li>
            <strong>Troque o sinal da segunda matriz</strong> (calcule a oposta dela):
            <MathBlock math="-\begin{bmatrix} 1 & 2 \\ 0 & -2 \end{bmatrix} = \begin{bmatrix} -1 & -2 \\ 0 & 2 \end{bmatrix}" />
          </li>
          <li>
            <strong>Some posição por posição</strong> com a primeira matriz:
            <MathBlock math="\begin{bmatrix} 4 & 7 \\ 3 & 0 \end{bmatrix} + \begin{bmatrix} -1 & -2 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} 4+(-1) & 7+(-2) \\ 3+0 & 0+2 \end{bmatrix} = \begin{bmatrix} 3 & 5 \\ 3 & 2 \end{bmatrix}" />
          </li>
        </ol>
      </div>

      <Callout kind="warn" title="Atenção — jogo de sinal">
        <p className="mt-0">
          O erro mais comum aqui é esquecer de trocar o sinal de <em>todos</em> os elementos da matriz
          que está sendo subtraída, ou trocar o sinal só na hora de somar (e esquecer em algum
          elemento). Faça sempre em duas etapas separadas: (1) inverta o sinal de <M math="B" /> por
          completo, (2) some normalmente.
        </p>
      </Callout>

      <h2 id="escalar">Multiplicação por um número real (escalar)</h2>
      <p>
        Multiplicar uma matriz <M math="A" /> por um número real <M math="x" /> significa multiplicar{" "}
        <em>cada elemento</em> de <M math="A" /> por <M math="x" />.
      </p>
      <div className="callout callout--example">
        <h4>Exemplo</h4>
        <MathBlock math="3 \cdot \begin{bmatrix} 2 & 7 \\ -1 & 0 \end{bmatrix} = \begin{bmatrix} 3\cdot 2 & 3\cdot 7 \\ 3\cdot(-1) & 3\cdot 0 \end{bmatrix} = \begin{bmatrix} 6 & 21 \\ -3 & 0 \end{bmatrix}" />
      </div>
      <Callout kind="warn" title="Atenção — jogo de sinal">
        <p className="mt-0">
          Se o número for negativo, use a regra dos sinais da multiplicação:
        </p>
        <table>
          <thead>
            <tr>
              <th>Sinal do número</th>
              <th>Sinal do elemento</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>+</td>
              <td>−</td>
              <td>−</td>
            </tr>
            <tr>
              <td>−</td>
              <td>+</td>
              <td>−</td>
            </tr>
            <tr>
              <td>−</td>
              <td>−</td>
              <td>+</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-0">
          Ou seja: sinais <strong>iguais</strong> geram resultado <strong>positivo</strong>; sinais{" "}
          <strong>diferentes</strong> geram resultado <strong>negativo</strong>. Essa regrinha vai
          reaparecer o tempo todo — em multiplicação de matrizes e em determinantes.
        </p>
      </Callout>

      <h2 id="multiplicacao">Multiplicação de matrizes</h2>
      <p>
        Este é o ponto em que mais gente se confunde, porque a multiplicação de matrizes{" "}
        <strong>não</strong> é feita elemento a elemento como na soma. Vamos construir a ideia devagar.
      </p>

      <Callout kind="def" title="Condição de existência">
        <p className="mt-0">
          O produto <M math="A \cdot B" /> só existe se o <strong>número de colunas de</strong>{" "}
          <M math="A" /> for igual ao <strong>número de linhas de</strong> <M math="B" />:
        </p>
        <MathBlock math="A_{m \times p} \cdot B_{p \times n} \ \Longrightarrow \ (A \cdot B)_{m \times n}" />
        <p className="mt-0">
          Repare que o resultado herda o número de <strong>linhas de A</strong> e o número de{" "}
          <strong>colunas de B</strong>. O "<M math="p" />" do meio precisa ser igual dos dois lados —
          e "desaparece" no resultado.
        </p>
      </Callout>

      <p>
        Cada elemento <M math="c_{ij}" /> do produto é calculado assim: pegue a{" "}
        <strong>linha <M math="i" /> de <M math="A" /></strong>, pegue a{" "}
        <strong>coluna <M math="j" /> de <M math="B" /></strong>, multiplique os elementos
        correspondentes um a um, e some tudo.
      </p>

      <div className="callout callout--example">
        <h4>Exemplo — multiplicação 2×2, elemento por elemento</h4>
        <p className="mt-0">
          Calcule <M math="A \cdot B" /> para{" "}
          <M math="A = \begin{bmatrix} 2 & 3 \\ 4 & 1 \end{bmatrix}" /> e{" "}
          <M math="B = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}" />.
        </p>
        <ol className="steps">
          <li>
            <strong>
              Elemento (linha 1, coluna 1):
            </strong>{" "}
            multiplique a 1ª linha de <M math="A" /> pela 1ª coluna de <M math="B" />:
            <MathBlock math="c_{11} = 2\cdot 1 + 3\cdot 3 = 2 + 9 = 11" />
          </li>
          <li>
            <strong>Elemento (linha 1, coluna 2):</strong> 1ª linha de <M math="A" /> com a 2ª coluna de{" "}
            <M math="B" />:
            <MathBlock math="c_{12} = 2\cdot 2 + 3\cdot 4 = 4 + 12 = 16" />
          </li>
          <li>
            <strong>Elemento (linha 2, coluna 1):</strong> 2ª linha de <M math="A" /> com a 1ª coluna de{" "}
            <M math="B" />:
            <MathBlock math="c_{21} = 4\cdot 1 + 1\cdot 3 = 4 + 3 = 7" />
          </li>
          <li>
            <strong>Elemento (linha 2, coluna 2):</strong> 2ª linha de <M math="A" /> com a 2ª coluna de{" "}
            <M math="B" />:
            <MathBlock math="c_{22} = 4\cdot 2 + 1\cdot 4 = 8 + 4 = 12" />
          </li>
          <li>
            <strong>Monte o resultado</strong> juntando os quatro elementos na posição certa:
            <MathBlock math="A \cdot B = \begin{bmatrix} 11 & 16 \\ 7 & 12 \end{bmatrix}" />
          </li>
        </ol>
      </div>

      <Callout kind="warn" title="Atenção — jogo de sinal na multiplicação de matrizes">
        <p className="mt-0">
          Quando algum elemento é negativo, resolva cada multiplicação individualmente, com cuidado no
          sinal, antes de somar. Por exemplo, se a linha de <M math="A" /> é{" "}
          <M math="(-3, \, 4)" /> e a coluna de <M math="B" /> é <M math="(1, \, -3)" />:
        </p>
        <MathBlock math="(-3)\cdot 1 + 4\cdot(-3) = -3 + (-12) = -15" />
        <p className="mt-0">
          Repare: <M math="4 \cdot (-3)" /> dá <M math="-12" /> (sinais diferentes → negativo), e depois{" "}
          <M math="-3 + (-12)" /> é uma soma de dois negativos, que dá <M math="-15" />. Nunca "cancele"
          sinais de cabeça — escreva cada conta.
        </p>
      </Callout>

      <Callout kind="warn" title="A multiplicação de matrizes não é comutativa">
        <p className="mt-0">
          Em geral, <M math="A \cdot B \neq B \cdot A" />. Trocar a ordem dos fatores pode até mudar se o
          produto existe (por exemplo, se <M math="A" /> é <M math="4\times 1" /> e <M math="B" /> é{" "}
          <M math="2\times 3" />, então <M math="A\cdot B" /> não existe, mas talvez{" "}
          <M math="B \cdot A" /> também não exista — sempre confira as ordens). Isso é bem diferente do
          que acontece com números reais, onde <M math="3\times 5 = 5\times 3" />.
        </p>
      </Callout>

      <h2 id="inversa">Matriz inversa (primeira ideia)</h2>
      <p>
        Dada uma matriz quadrada <M math="A" /> de ordem <M math="n" />, se existir uma matriz{" "}
        <M math="A^{-1}" />, também de ordem <M math="n" />, tal que:
      </p>
      <MathBlock math="A \cdot A^{-1} = A^{-1} \cdot A = I_n" />
      <p>
        então <M math="A^{-1}" /> é chamada <strong>matriz inversa</strong> de <M math="A" />. Uma forma
        de encontrá-la é montar um sistema de equações a partir dessa igualdade — mas existe um jeito
        muito mais rápido, usando <strong>determinantes</strong>, que é o assunto do próximo capítulo.
      </p>

      <Callout kind="def" title="Nem toda matriz quadrada tem inversa">
        <p className="mt-0">
          Assim como o número 0 não tem inverso multiplicativo (não existe número que multiplicado por
          0 dê 1), existem matrizes que não admitem inversa. No próximo capítulo você vai ver exatamente
          o critério que decide isso: o valor do <strong>determinante</strong> de <M math="A" />.
        </p>
      </Callout>

      <div className="next-prev">
        <span />
        <Link to="/determinantes">
          <small>Próximo capítulo</small>
          Determinantes →
        </Link>
      </div>
    </>
  );
}
