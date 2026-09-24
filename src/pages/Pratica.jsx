import { InlineMath as M } from "react-katex";
import MathBlock from "../components/MathBlock.jsx";
import Callout from "../components/Callout.jsx";
import { Link } from "react-router-dom";

export default function Pratica() {
  return (
    <>
      <p className="eyebrow">Foco na prova</p>
      <h1>Prova NPC1</h1>
      <p className="lede mt-0">
        Esta página treina especificamente o formato das duas questões descritivas da prova, com
        modelos de resposta completos — do jeito que se espera que uma resposta escrita seja
        organizada.
      </p>

      <h2 id="formato">Como é a prova do 1º NPC</h2>
      <p>A prova tem 8 questões, divididas assim:</p>
      <ul>
        <li>
          <strong>6 questões de múltipla escolha</strong> sobre os conceitos de Matrizes e
          Determinantes (tipos de matriz, operações, propriedades de determinante, cofatores etc.) —
          treine essa parte no <Link to="/quiz">quiz interativo</Link>.
        </li>
        <li>
          <strong>1 questão descritiva sobre o Teorema de Jacobi</strong> — normalmente pede para
          aplicar o teorema em uma matriz dada, mostrando os passos.
        </li>
        <li>
          <strong>1 questão de cálculo livre</strong>, provavelmente com uma matriz{" "}
          <M math="2\times 2" /> ou <M math="3\times 3" /> — pode pedir determinante, inversa, ou
          operações entre matrizes.
        </li>
      </ul>

      <Callout kind="warn" title="Atenção — questão descritiva é avaliada pelo caminho, não só pela resposta">
        <p className="mt-0">
          Em uma questão descritiva, o valor da nota normalmente está distribuído entre as etapas do
          cálculo, não só no número final. Mesmo com pressa, escreva cada passo — inclusive as contas
          intermediárias de sinal — como nos modelos abaixo.
        </p>
      </Callout>

      <h2 id="questao-jacobi">Modelo — questão sobre Teorema de Jacobi</h2>
      <div className="callout callout--example">
        <h4>Enunciado (modelo de prova)</h4>
        <p className="mt-0">
          Utilizando o Teorema de Jacobi, substitua a linha <M math="L_3" /> da matriz abaixo pela soma
          dela com <M math="(-2)L_1" />, e mostre que o determinante não se altera.
        </p>
        <MathBlock math="A = \begin{vmatrix} 1 & 0 & 2 \\ 3 & 1 & 1 \\ 2 & 0 & 5 \end{vmatrix}" />
      </div>

      <div className="callout callout--example">
        <h4>Resposta modelo</h4>
        <p className="mt-0">
          O raciocínio tem três partes: (1) calcular o determinante <em>antes</em> da operação, para
          ter um valor de referência; (2) aplicar a operação pedida e montar a matriz nova; (3)
          calcular o determinante <em>depois</em> e comparar com o de referência. Seguindo essa ordem,
          nenhuma etapa fica solta.
        </p>
        <ol className="steps">
          <li>
            <strong>Enuncie o teorema que está sendo usado.</strong> O Teorema de Jacobi garante que o
            determinante de uma matriz não se altera ao somarmos, aos elementos de uma fila, uma
            combinação linear dos elementos correspondentes de uma fila paralela.
          </li>
          <li>
            <strong>Calcule o determinante original</strong>, <M math="\det A" /> — esse é o valor que
            precisamos "bater" no final (por Sarrus, já que é ordem 3):
            <MathBlock math="\text{Positivos: } 1\cdot1\cdot5 + 0\cdot1\cdot2 + 2\cdot3\cdot0 = 5+0+0=5" />
            <MathBlock math="\text{Negativos: } 2\cdot1\cdot2 + 1\cdot1\cdot0 + 0\cdot3\cdot5 = 4+0+0=4" />
            <MathBlock math="\det A = 5 - 4 = 1" />
          </li>
          <li>
            <strong>Aplique a operação pedida</strong>, <M math="L_3 \rightarrow L_3 + (-2)L_1" />, uma
            posição de cada vez: em cada coluna, some ao elemento antigo de <M math="L_3" /> o valor{" "}
            <M math="(-2)" /> vezes o elemento correspondente de <M math="L_1" />:
            <MathBlock math="\text{coluna 1: } 2+(-2)(1)=0 \qquad \text{coluna 2: } 0+(-2)(0)=0 \qquad \text{coluna 3: } 5+(-2)(2)=1" />
            <p className="mt-0">
              Ou seja, a nova linha 3 é <M math="L_3^{\text{novo}} = (0,\ 0,\ 1)" />.
            </p>
          </li>
          <li>
            <strong>Monte a nova matriz</strong>, trocando só a linha 3 (as linhas 1 e 2 continuam
            iguais às da matriz original):
            <MathBlock math="A' = \begin{vmatrix} 1 & 0 & 2 \\ 3 & 1 & 1 \\ 0 & 0 & 1 \end{vmatrix}" />
          </li>
          <li>
            <strong>Calcule o novo determinante</strong>, <M math="\det A'" />, pelo mesmo método usado
            no passo 2 — assim os dois valores ficam fáceis de comparar (por Sarrus):
            <MathBlock math="\text{Positivos: } 1\cdot1\cdot1 + 0\cdot1\cdot0 + 2\cdot3\cdot0 = 1+0+0=1" />
            <MathBlock math="\text{Negativos: } 2\cdot1\cdot0 + 1\cdot1\cdot0 + 0\cdot3\cdot1 = 0+0+0=0" />
            <MathBlock math="\det A' = 1 - 0 = 1" />
          </li>
          <li>
            <strong>Conclua comparando os dois valores</strong> calculados nos passos 2 e 5:{" "}
            <M math="\det A = 1" /> e <M math="\det A' = 1" />. São iguais, confirmando o Teorema de
            Jacobi — e de quebra, a nova matriz ficou muito mais fácil de recalcular por ter dois zeros
            na última linha.
          </li>
        </ol>
      </div>

      <h2 id="questao-calculo-livre">Modelo — questão de cálculo livre</h2>
      <p>
        Essa questão pode pedir qualquer cálculo direto: determinante, inversa ou operações entre
        matrizes. Veja um modelo de cada um dos casos mais prováveis.
      </p>

      <h3>Caso A — determinante de uma matriz 3×3</h3>
      <div className="callout callout--example">
        <h4>Enunciado (modelo)</h4>
        <p className="mt-0">
          Calcule o determinante de <M math="B = \begin{bmatrix} 2 & -1 & 3 \\ 0 & 2 & -2 \\ 1 & 4 & 1 \end{bmatrix}" />.
        </p>
      </div>
      <div className="callout callout--example">
        <h4>Resposta modelo (por Sarrus)</h4>
        <ol className="steps">
          <li>
            <strong>Repita as duas primeiras colunas</strong> ao lado da matriz (mentalmente ou no
            rascunho) para visualizar as seis diagonais.
          </li>
          <li>
            <strong>Produtos "para baixo" (positivos):</strong>
            <MathBlock math="2\cdot2\cdot1=4 \qquad (-1)\cdot(-2)\cdot1=2 \qquad 3\cdot0\cdot4=0" />
            <MathBlock math="\text{Soma: } 4+2+0=6" />
          </li>
          <li>
            <strong>Produtos "para cima" (negativos):</strong>
            <MathBlock math="3\cdot2\cdot1=6 \qquad 2\cdot(-2)\cdot4=-16 \qquad (-1)\cdot0\cdot1=0" />
            <MathBlock math="\text{Soma: } 6+(-16)+0=-10" />
          </li>
          <li>
            <strong>Subtraia</strong>:
            <MathBlock math="\det B = 6 - (-10) = 6+10=16" />
          </li>
        </ol>
      </div>

      <h3>Caso B — inversa de uma matriz 2×2</h3>
      <div className="callout callout--example">
        <h4>Enunciado (modelo)</h4>
        <p className="mt-0">
          Determine, se existir, a inversa de <M math="C = \begin{bmatrix} 5 & 2 \\ 3 & 1 \end{bmatrix}" />.
        </p>
      </div>
      <div className="callout callout--example">
        <h4>Resposta modelo</h4>
        <ol className="steps">
          <li>
            <strong>Calcule o determinante</strong> e confirme que é diferente de zero:
            <MathBlock math="\det C = 5\cdot1 - 2\cdot3 = 5-6=-1 \ \neq 0 \ \Rightarrow \ \exists\, C^{-1}" />
          </li>
          <li>
            <strong>Use o atalho para matrizes 2×2:</strong> troque a diagonal principal de posição,
            troque o sinal da diagonal secundária, e divida pelo determinante:
            <MathBlock math="C^{-1} = \frac{1}{-1}\begin{bmatrix} 1 & -2 \\ -3 & 5 \end{bmatrix} = \begin{bmatrix} -1 & 2 \\ 3 & -5 \end{bmatrix}" />
          </li>
          <li>
            <strong>Confira o resultado</strong> multiplicando <M math="C \cdot C^{-1}" /> e verificando
            que dá a identidade:
            <MathBlock math="C\cdot C^{-1} = \begin{bmatrix}5&2\\3&1\end{bmatrix}\begin{bmatrix}-1&2\\3&-5\end{bmatrix} = \begin{bmatrix}5(-1)+2(3) & 5(2)+2(-5) \\ 3(-1)+1(3) & 3(2)+1(-5)\end{bmatrix} = \begin{bmatrix}1&0\\0&1\end{bmatrix}" />
          </li>
        </ol>
        <p className="mt-0">
          Esse passo de conferência (multiplicar pela inversa e obter <M math="I" />) é uma ótima forma
          de revisar sua própria resposta durante a prova, caso sobre tempo.
        </p>
      </div>

      <h2 id="checklist">Checklist antes da prova</h2>
      <ul>
        <li>
          Sei calcular determinante de ordem 2 (produto das diagonais) e de ordem 3 (Sarrus{" "}
          <strong>ou</strong> Laplace).
        </li>
        <li>
          Sei montar a matriz dos cofatores e a matriz adjunta, com o sinal <M math="(-1)^{i+j}" /> em
          cada posição.
        </li>
        <li>
          Sei aplicar o Teorema de Jacobi mostrando as três etapas: operação escolhida, recálculo da
          fila, verificação do determinante.
        </li>
        <li>
          Sei calcular a inversa de uma matriz 2×2 pelo atalho e de uma matriz 3×3 pela fórmula{" "}
          <M math="A^{-1} = \tfrac{1}{\det A}\cdot adj\,A" />.
        </li>
        <li>
          Refiz o cálculo de sinal em cada exemplo desta apostila com a caneta na mão, sem só ler.
        </li>
        <li>
          Fiz o <Link to="/quiz">quiz interativo</Link> pelo menos três vezes seguidas, sem repetir
          erro.
        </li>
      </ul>

      <div className="center" style={{ marginTop: "2rem" }}>
        <Link to="/quiz" className="btn">
          Ir para o quiz interativo
        </Link>
      </div>
    </>
  );
}
