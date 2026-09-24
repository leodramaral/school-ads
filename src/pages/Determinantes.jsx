import { InlineMath as M } from "react-katex";
import MathBlock from "../components/MathBlock.jsx";
import Callout from "../components/Callout.jsx";
import { Link } from "react-router-dom";

export default function Determinantes() {
  return (
    <>
      <p className="eyebrow">Capítulo 2</p>
      <h1>Determinantes</h1>
      <p className="lede mt-0">
        O determinante é um único número associado a uma matriz <strong>quadrada</strong>. Ele serve
        para descobrir se uma matriz tem inversa, para resolver sistemas lineares e para calcular áreas
        — e é a base de uma das duas questões descritivas da prova (Teorema de Jacobi).
      </p>

      <h2 id="o-que-e">O que é um determinante</h2>
      <p>
        Determinante só existe para <strong>matrizes quadradas</strong> (ordem <M math="n \times n" />
        ). O determinante de uma matriz <M math="M" /> é indicado por <M math="\det M" /> ou colocando a
        matriz entre barras verticais, <M math="|M|" />, em vez de colchetes.
      </p>

      <h2 id="ordem-1-2">Determinante de ordem 1 e ordem 2</h2>
      <p>
        Para uma matriz <M math="1\times 1" />, o determinante é o próprio elemento:{" "}
        <M math="M = [a_{11}] \Rightarrow \det M = a_{11}" />.
      </p>
      <p>Para uma matriz de ordem 2, existe uma fórmula direta:</p>
      <Callout kind="formula">
        <MathBlock math="\det \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix} = a_{11}a_{22} - a_{12}a_{21}" />
      </Callout>
      <p className="mt-0">
        Em palavras: <strong>produto da diagonal principal menos produto da diagonal secundária.</strong>
      </p>
      <div className="callout callout--example">
        <h4>Exemplo</h4>
        <MathBlock math="\det \begin{bmatrix} 2 & 3 \\ 4 & 5 \end{bmatrix} = 2\cdot 5 - 3\cdot 4 = 10 - 12 = -2" />
      </div>
      <Callout kind="warn" title="Atenção — jogo de sinal">
        <p className="mt-0">
          O determinante pode dar <strong>negativo</strong> mesmo que todos os elementos da matriz sejam
          positivos — o sinal de menos já está na própria fórmula. Não esqueça de subtrair o segundo
          produto, e cuidado se ele já for negativo: <M math="a_{11}a_{22} - (a_{12}a_{21})" />, ou seja,
          se <M math="a_{12}a_{21}" /> for negativo, subtrair um negativo vira soma.
        </p>
      </Callout>

      <h2 id="menor-cofator">Menor complementar e cofator</h2>
      <p>
        Para matrizes de ordem 3 ou maior, precisamos de duas ferramentas antes de calcular o
        determinante diretamente: o <strong>menor complementar</strong> e o <strong>cofator</strong>.
      </p>

      <Callout kind="def" title="Menor complementar (MC)">
        <p className="mt-0">
          O menor complementar <M math="MC_{ij}" /> de um elemento <M math="a_{ij}" /> é o determinante
          que sobra quando <strong>apagamos a linha <M math="i" /> e a coluna <M math="j" /></strong> da
          matriz.
        </p>
      </Callout>

      <div className="callout callout--example">
        <h4>Exemplo</h4>
        <p className="mt-0">
          Dada <M math="M = \begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix}" />
          , para achar <M math="MC_{12}" /> apagamos a linha 1 e a coluna 2:
        </p>
        <MathBlock math="MC_{12} = \begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} = a_{21}a_{33} - a_{23}a_{31}" />
      </div>

      <Callout kind="def" title="Cofator">
        <p className="mt-0">
          O cofator <M math="A_{ij}" /> é o menor complementar com um possível ajuste de sinal:
        </p>
        <MathBlock math="A_{ij} = (-1)^{i+j} \cdot MC_{ij}" />
      </Callout>

      <Callout kind="warn" title="Atenção — jogo de sinal em tabuleiro de xadrez">
        <p className="mt-0">
          O fator <M math="(-1)^{i+j}" /> vale <M math="+1" /> quando <M math="i+j" /> é par, e{" "}
          <M math="-1" /> quando <M math="i+j" /> é ímpar. Isso forma um padrão de "tabuleiro de xadrez"
          de sinais, começando com <M math="+" /> no canto <M math="a_{11}" />:
        </p>
        <MathBlock math="\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}" />
        <p className="mt-0">
          Para saber o sinal de <M math="A_{23}" />, por exemplo, basta ver a posição (linha 2, coluna
          3) nesse tabuleiro: é <M math="-" />. Confirmando pela fórmula: <M math="i+j = 2+3 = 5" />{" "}
          (ímpar) <M math="\Rightarrow (-1)^5 = -1" />. Bate certinho.
        </p>
      </Callout>

      <h2 id="adjunta">Matriz adjunta</h2>
      <p>
        Se calcularmos o cofator de <em>cada</em> elemento de uma matriz <M math="A" />, montamos a{" "}
        <strong>matriz dos cofatores</strong>, indicada por <M math="\overline{A}" />. A{" "}
        <strong>matriz adjunta</strong> de <M math="A" /> é a transposta dessa matriz de cofatores:
      </p>
      <Callout kind="formula">
        <MathBlock math="adj\,A = \left(\overline{A}\right)^{t}" />
      </Callout>
      <p>
        Vamos usar a matriz adjunta mais adiante, na fórmula da <strong>matriz inversa</strong>.
      </p>

      <h2 id="laplace">Teorema de Laplace (ordem 3 ou mais)</h2>
      <p>
        O Teorema de Laplace permite calcular o determinante de qualquer matriz quadrada de ordem{" "}
        <M math="n \ge 2" />, escolhendo <strong>uma única fila</strong> (linha ou coluna) e somando o
        produto de cada elemento dessa fila pelo seu respectivo cofator.
      </p>
      <Callout kind="formula">
        <MathBlock math="\det M = \sum_{i=1}^{m} a_{ij}\, A_{ij} \quad \text{(fixando uma coluna } j \text{, por exemplo)}" />
      </Callout>

      <div className="callout callout--example">
        <h4>Exemplo resolvido</h4>
        <p className="mt-0">
          Calcule <M math="D = \begin{vmatrix} 1 & 2 & 3 \\ 2 & 1 & 2 \\ 2 & 4 & 3 \end{vmatrix}" />{" "}
          aplicando Laplace na 1ª coluna (é uma escolha livre; qualquer fila funciona).
        </p>
        <ol className="steps">
          <li>
            <strong>Monte os três termos</strong>, um para cada elemento da 1ª coluna, cada um
            multiplicado pelo seu cofator:
            <MathBlock math="D = 1\cdot(-1)^{1+1}\begin{vmatrix}1 & 2\\4 & 3\end{vmatrix} + 2\cdot(-1)^{2+1}\begin{vmatrix}2 & 3\\4 & 3\end{vmatrix} + 2\cdot(-1)^{3+1}\begin{vmatrix}2 & 3\\1 & 2\end{vmatrix}" />
          </li>
          <li>
            <strong>Resolva cada determinante 2×2</strong> (diagonal principal menos diagonal
            secundária):
            <MathBlock math="\begin{vmatrix}1 & 2\\4 & 3\end{vmatrix} = 3-8=-5 \qquad \begin{vmatrix}2 & 3\\4 & 3\end{vmatrix} = 6-12=-6 \qquad \begin{vmatrix}2 & 3\\1 & 2\end{vmatrix} = 4-3=1" />
          </li>
          <li>
            <strong>Aplique os sinais</strong> <M math="(-1)^{i+1}" /> de cada termo: o 1º é{" "}
            <M math="+" />, o 2º é <M math="-" />, o 3º é <M math="+" />:
            <MathBlock math="D = 1(+1)(-5) + 2(-1)(-6) + 2(+1)(1)" />
          </li>
          <li>
            <strong>Resolva as multiplicações e some</strong>, com atenção total ao sinal:
            <MathBlock math="D = -5 + 12 + 2 = 9" />
          </li>
        </ol>
      </div>

      <Callout kind="warn" title="Atenção — jogo de sinal no Laplace">
        <p className="mt-0">
          A causa nº 1 de erro no Teorema de Laplace é esquecer o sinal <M math="(-1)^{i+j}" /> de algum
          termo, ou aplicá-lo errado. Escreva o "tabuleiro de xadrez" de sinais na margem da prova antes
          de começar — isso evita a maior parte dos erros. Escolher uma fila com zeros reduz o trabalho,
          já que qualquer termo multiplicado por 0 desaparece.
        </p>
      </Callout>

      <h2 id="sarrus">Regra de Sarrus (só para ordem 3)</h2>
      <p>
        A Regra de Sarrus é um atalho prático — só vale para matrizes <M math="3\times 3" /> — que
        evita usar cofatores.
      </p>
      <ol className="steps">
        <li>
          <strong>Repita as duas primeiras colunas</strong> à direita da matriz.
        </li>
        <li>
          <strong>Some os três produtos "para baixo"</strong> (diagonal principal e as duas paralelas a
          ela) — esses entram <strong>com sinal positivo</strong>.
        </li>
        <li>
          <strong>Some os três produtos "para cima"</strong> (diagonal secundária e as duas paralelas a
          ela) — esses entram <strong>com sinal negativo</strong>.
        </li>
      </ol>
      <MathBlock math="D = -(a_{13}a_{22}a_{31} + a_{11}a_{23}a_{32} + a_{12}a_{21}a_{33}) + (a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32})" />

      <div className="callout callout--example">
        <h4>Exemplo resolvido</h4>
        <p className="mt-0">
          Calcule <M math="D = \begin{vmatrix} 2 & 3 & -1 \\ 4 & 1 & 2 \\ -3 & 2 & 1 \end{vmatrix}" />{" "}
          pela Regra de Sarrus.
        </p>
        <ol className="steps">
          <li>
            <strong>Repita as duas primeiras colunas ao lado</strong> da matriz, só para visualizar as
            seis diagonais:
            <MathBlock math="\begin{matrix} 2 & 3 & -1 & 2 & 3 \\ 4 & 1 & 2 & 4 & 1 \\ -3 & 2 & 1 & -3 & 2 \end{matrix}" />
          </li>
          <li>
            <strong>Calcule os três produtos "para baixo"</strong> (diagonal principal e as duas
            paralelas a ela) — entram com sinal positivo:
            <MathBlock math="2\cdot 1\cdot 1 = 2 \qquad 3\cdot 2\cdot(-3) = -18 \qquad (-1)\cdot 4\cdot 2 = -8" />
            <MathBlock math="\text{Soma dos positivos: } 2 + (-18) + (-8) = -24" />
          </li>
          <li>
            <strong>Calcule os três produtos "para cima"</strong> (diagonal secundária e as duas
            paralelas a ela) — entram com sinal negativo:
            <MathBlock math="(-1)\cdot 1\cdot(-3) = 3 \qquad 2\cdot 2\cdot 2 = 8 \qquad 3\cdot 4\cdot 1 = 12" />
            <MathBlock math="\text{Soma dos negativos: } 3 + 8 + 12 = 23" />
          </li>
          <li>
            <strong>Subtraia a soma dos negativos da soma dos positivos:</strong>
            <MathBlock math="D = -24 - 23 = -47" />
          </li>
        </ol>
        <p className="mt-0">
          Repare como, mesmo nesse "atalho", o jogo de sinal aparece em praticamente todo produto — por
          isso vale treinar bastante multiplicação de números com sinal antes da prova.
        </p>
      </div>

      <h2 id="propriedades">Propriedades dos determinantes</h2>
      <p>
        Essas propriedades não substituem o cálculo, mas evitam contas longas quando a matriz tem uma
        estrutura especial. Vale a pena reconhecê-las de cabeça para as questões de múltipla escolha.
      </p>
      <table>
        <thead>
          <tr>
            <th>Propriedade</th>
            <th>Enunciado resumido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P1</td>
            <td>Fila (linha ou coluna) toda nula ⇒ determinante = 0.</td>
          </tr>
          <tr>
            <td>P2</td>
            <td>Duas filas paralelas iguais ⇒ determinante = 0.</td>
          </tr>
          <tr>
            <td>P3</td>
            <td>Duas filas paralelas proporcionais ⇒ determinante = 0.</td>
          </tr>
          <tr>
            <td>P4</td>
            <td>Uma fila é combinação linear de outras filas paralelas ⇒ determinante = 0.</td>
          </tr>
          <tr>
            <td>P5</td>
            <td>
              <strong>Teorema de Jacobi</strong> — somar a uma fila uma combinação linear de outra fila
              paralela não altera o determinante.
            </td>
          </tr>
          <tr>
            <td>P6</td>
            <td>
              <M math="\det A = \det A^{t}" />.
            </td>
          </tr>
          <tr>
            <td>P7</td>
            <td>Multiplicar todos os elementos de uma fila por <M math="k" /> multiplica o determinante por <M math="k" />.</td>
          </tr>
          <tr>
            <td>P8</td>
            <td>Trocar duas filas paralelas de posição inverte o sinal do determinante.</td>
          </tr>
          <tr>
            <td>P9</td>
            <td>Matriz triangular (zeros acima ou abaixo da diagonal principal) ⇒ determinante = produto da diagonal principal.</td>
          </tr>
          <tr>
            <td>P10</td>
            <td>Zeros acima/abaixo da diagonal secundária ⇒ determinante = produto dessa diagonal × <M math="(-1)^{n(n-1)/2}" />.</td>
          </tr>
          <tr>
            <td>P11</td>
            <td>
              <M math="\det(A\cdot B) = \det A \cdot \det B" />, e por consequência{" "}
              <M math="\det(A^{-1}) = \dfrac{1}{\det A}" />.
            </td>
          </tr>
          <tr>
            <td>P12</td>
            <td>
              <M math="\det(kA) = k^{n}\cdot\det A" /> (matriz inteira multiplicada por <M math="k" />).
            </td>
          </tr>
          <tr>
            <td>P13</td>
            <td>
              <M math="\det(A+B) \neq \det A + \det B" /> em geral.
            </td>
          </tr>
        </tbody>
      </table>

      <Callout kind="warn" title="Atenção — não confunda P7 com P12">
        <p className="mt-0">
          É um erro clássico de prova: multiplicar <strong>uma fila</strong> por <M math="k" /> multiplica
          o determinante por <M math="k" /> (expoente 1). Multiplicar a{" "}
          <strong>matriz inteira</strong> por <M math="k" /> multiplica o determinante por{" "}
          <M math="k^n" />, onde <M math="n" /> é a ordem da matriz. São situações diferentes!
        </p>
      </Callout>

      <h2 id="jacobi">Teorema de Jacobi</h2>
      <p className="lede mt-0">
        Este é o tema de uma das duas questões descritivas da prova — vale a pena dominar tanto o
        enunciado quanto o passo a passo de aplicação.
      </p>

      <Callout kind="def" title="Enunciado">
        <p className="mt-0">
          O determinante de uma matriz <strong>não se altera</strong> quando somamos, aos elementos de
          uma fila (linha ou coluna), uma <strong>combinação linear</strong> dos elementos
          correspondentes de filas paralelas a ela.
        </p>
      </Callout>

      <p>
        Em outras palavras: você pode pegar uma linha (ou coluna), somar a ela um múltiplo de outra
        linha (ou coluna) paralela, e o determinante <strong>continua exatamente o mesmo</strong>. Isso
        é extremamente útil para "fabricar zeros" antes de aplicar o Teorema de Laplace, tornando a
        conta bem mais curta.
      </p>

      <p>
        O Teorema de Jacobi é mais útil quando o determinante <strong>não</strong> é obviamente zero
        (como seria se duas filas fossem iguais ou proporcionais), mas queremos simplificar a matriz —
        por exemplo, criar um zero em uma posição conveniente — sem alterar o valor final.
      </p>

      <div className="callout callout--example">
        <h4>Exemplo resolvido — o uso típico do Teorema de Jacobi</h4>
        <p className="mt-0">
          Retome a matriz do exemplo de Laplace,{" "}
          <M math="D = \begin{vmatrix} 1 & 2 & 3 \\ 2 & 1 & 2 \\ 2 & 4 & 3 \end{vmatrix}" />, cujo
          determinante já calculamos: <M math="D = 9" />.
        </p>
        <ol className="steps">
          <li>
            <strong>Escolha a operação de Jacobi.</strong> Vamos substituir a{" "}
            <M math="C_1" /> (coluna 1) pela soma dela com <M math="2 \times C_2" /> (o dobro da coluna
            2). Isso é uma <em>combinação linear</em> permitida pelo teorema:
            <MathBlock math="C_1 \rightarrow C_1 + 2C_2" />
          </li>
          <li>
            <strong>Recalcule cada elemento da nova coluna 1</strong>, somando ao elemento antigo o
            dobro do elemento correspondente da coluna 2:
            <MathBlock math="\text{linha 1: } 1 + 2(2) = 5 \qquad \text{linha 2: } 2 + 2(1) = 4 \qquad \text{linha 3: } 2 + 2(4) = 10" />
          </li>
          <li>
            <strong>Monte a nova matriz</strong> (as colunas 2 e 3 continuam iguais):
            <MathBlock math="\begin{vmatrix} 5 & 2 & 3 \\ 4 & 1 & 2 \\ 10 & 4 & 3 \end{vmatrix}" />
          </li>
          <li>
            <strong>Confirme que o determinante não mudou</strong>, recalculando por Sarrus:
            <MathBlock math="\text{Positivos: } 5\cdot1\cdot3 + 2\cdot2\cdot10 + 3\cdot4\cdot4 = 15+40+48 = 103" />
            <MathBlock math="\text{Negativos: } 3\cdot1\cdot10 + 5\cdot2\cdot4 + 2\cdot4\cdot3 = 30+40+24 = 94" />
            <MathBlock math="D = 103 - 94 = 9" />
            <p className="mt-0">
              O valor é exatamente o mesmo de antes da substituição. Essa é a "mágica" do Teorema de
              Jacobi: trocamos os números da matriz, mas preservamos o determinante.
            </p>
          </li>
        </ol>
      </div>

      <Callout kind="warn" title="Atenção — como a prova costuma cobrar Jacobi">
        <p className="mt-0">
          Normalmente a questão descritiva pede para você <strong>demonstrar</strong> ou{" "}
          <strong>aplicar</strong> o teorema em uma matriz dada, mostrando: (1) qual operação de
          combinação linear você escolheu (ex.: <M math="L_2 \rightarrow L_2 - 3L_1" />), (2) o
          recálculo de cada elemento da fila trocada, e (3) a verificação de que o novo determinante é
          igual ao original. Escreva essas três etapas de forma explícita — é isso que o professor
          espera ver, não só o resultado final.
        </p>
      </Callout>

      <Callout kind="warn" title="Atenção — jogo de sinal na combinação linear">
        <p className="mt-0">
          Se a operação envolve subtração, como <M math="L_2 \rightarrow L_2 - 3L_1" />, cuidado ao
          multiplicar <M math="3" /> pela linha 1 quando ela tiver elementos negativos — e ao subtrair
          esse resultado da linha 2. Resolva sempre em duas etapas: primeiro calcule <M math="3L_1" />{" "}
          por completo, depois subtraia elemento a elemento de <M math="L_2" />.
        </p>
      </Callout>

      <h2 id="chio">Regra de Chió</h2>
      <p>
        A Regra de Chió é outra técnica para reduzir a ordem de um determinante (de ordem{" "}
        <M math="n" /> para ordem <M math="n-1" />, com o mesmo valor), útil quando a matriz tem algum
        elemento igual a 1.
      </p>
      <ol className="steps">
        <li>
          <strong>Escolha um elemento igual a 1</strong> e apague a linha e a coluna onde ele está.
        </li>
        <li>
          <strong>De cada elemento restante, subtraia o produto</strong> dos dois elementos "eliminados"
          que se cruzam com a linha e a coluna daquele elemento (um vindo da linha apagada, outro da
          coluna apagada).
        </li>
        <li>
          <strong>Multiplique o novo determinante por <M math="(-1)^{i+j}" /></strong>, onde{" "}
          <M math="i" /> e <M math="j" /> são a linha e a coluna que você apagou no passo 1.
        </li>
      </ol>
      <Callout kind="warn" title="Atenção — Chió tem duas subtrações encadeadas">
        <p className="mt-0">
          Em "subtraia o produto dos dois elementos eliminados", primeiro multiplique os dois valores
          (respeitando o sinal de cada um) e só depois subtraia esse produto do elemento restante. Se o
          produto for negativo, subtrair um negativo vira soma — mais um lugar clássico de erro de
          sinal.
        </p>
      </Callout>

      <h2 id="inversa-determinante">Matriz inversa via determinante</h2>
      <p>
        Agora fechamos o ciclo com Matrizes: a forma mais direta de calcular a inversa de uma matriz
        quadrada usa exatamente o determinante e a matriz adjunta que vimos acima.
      </p>
      <Callout kind="formula">
        <MathBlock math="A^{-1} = \frac{1}{\det A} \cdot adj\,A \qquad \text{válido apenas se } \det A \neq 0" />
      </Callout>

      <div className="callout callout--example">
        <h4>Exemplo resolvido — inversa de uma matriz 2×2</h4>
        <p className="mt-0">
          Calcule a inversa de <M math="A = \begin{bmatrix} -2 & 3 \\ -1 & 4 \end{bmatrix}" />.
        </p>
        <ol className="steps">
          <li>
            <strong>Calcule o determinante</strong> e confirme que é diferente de zero:
            <MathBlock math="\det A = (-2)(4) - (3)(-1) = -8 - (-3) = -8 + 3 = -5" />
          </li>
          <li>
            <strong>Calcule o cofator de cada elemento.</strong> Para uma matriz <M math="2\times 2" />
            , cada menor complementar é só o elemento "cruzado":
            <MathBlock math="A_{11} = (-1)^{1+1}\cdot 4 = 4 \qquad A_{12} = (-1)^{1+2}\cdot(-1) = 1" />
            <MathBlock math="A_{21} = (-1)^{2+1}\cdot 3 = -3 \qquad A_{22} = (-1)^{2+2}\cdot(-2) = -2" />
          </li>
          <li>
            <strong>Monte a matriz dos cofatores</strong> e depois transponha para obter a adjunta:
            <MathBlock math="\overline{A} = \begin{bmatrix} 4 & 1 \\ -3 & -2 \end{bmatrix} \Longrightarrow adj\,A = \begin{bmatrix} 4 & -3 \\ 1 & -2 \end{bmatrix}" />
          </li>
          <li>
            <strong>Divida a adjunta pelo determinante</strong> (multiplique cada elemento por{" "}
            <M math="\tfrac{1}{\det A}" />):
            <MathBlock math="A^{-1} = \frac{1}{-5}\begin{bmatrix} 4 & -3 \\ 1 & -2 \end{bmatrix} = \begin{bmatrix} -\tfrac{4}{5} & \tfrac{3}{5} \\[4pt] -\tfrac{1}{5} & \tfrac{2}{5} \end{bmatrix}" />
          </li>
        </ol>
      </div>

      <Callout kind="def" title="Atalho para matrizes 2×2">
        <p className="mt-0">
          Para uma matriz <M math="2\times 2" />, existe um atalho equivalente à fórmula geral: troque
          de posição os elementos da diagonal principal, troque o sinal dos elementos da diagonal
          secundária, e divida tudo pelo determinante:
        </p>
        <MathBlock math="A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \Longrightarrow A^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}" />
      </Callout>

      <div className="next-prev">
        <Link to="/matrizes">
          <small>Capítulo anterior</small>← Matrizes
        </Link>
        <Link to="/pratica">
          <small>Próxima página</small>
          Prova NPC1 (Jacobi + cálculo livre) →
        </Link>
      </div>
    </>
  );
}
