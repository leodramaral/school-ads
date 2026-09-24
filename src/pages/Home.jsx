import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p className="eyebrow">ADS · Matemática Aplicada à Computação II</p>
      <h1>Apostila Interativa</h1>
      <p className="lede">
        Material de apoio para o 1º NPC, começando pelo módulo de <strong>Geometria Analítica I</strong>:
        Matrizes e Determinantes. Cada tópico traz a explicação passo a passo — sem pular etapas, com
        atenção especial ao jogo de sinal — e termina em um quiz que muda a cada tentativa.
      </p>

      <div className="callout callout--def">
        <h4>Como a prova é organizada</h4>
        <p className="mt-0">
          O 1º NPC tem 8 questões: <strong>6 de múltipla escolha</strong> sobre os conceitos de Matrizes
          e Determinantes, e <strong>2 descritivas</strong> — uma sobre o <strong>Teorema de Jacobi</strong>{" "}
          e outra de <strong>cálculo livre</strong> (provavelmente envolvendo uma matriz 2×2 ou 3×3).
        </p>
      </div>

      <div className="card-grid">
        <Link to="/matrizes" className="card">
          <span className="card-index">Capítulo 1</span>
          <h3>Matrizes</h3>
          <p>Definição, tipos especiais, operações (soma, subtração, multiplicação) e matriz inversa.</p>
        </Link>

        <Link to="/determinantes" className="card">
          <span className="card-index">Capítulo 2</span>
          <h3>Determinantes</h3>
          <p>
            Ordem 2 e 3, cofatores, Laplace, Sarrus, propriedades e o Teorema de Jacobi em detalhe.
          </p>
        </Link>

        <Link to="/pratica" className="card">
          <span className="card-index">Foco na prova</span>
          <h3>Prova NPC1</h3>
          <p>Roteiro para as duas questões descritivas: Teorema de Jacobi e cálculo livre.</p>
        </Link>

        <Link to="/quiz" className="card">
          <span className="card-index">Treino</span>
          <h3>Quiz interativo</h3>
          <p>6 questões de múltipla escolha sorteadas e embaralhadas a cada tentativa.</p>
        </Link>
      </div>

      <hr className="divider" />

      <h2 id="como-estudar">Como estudar com esta apostila</h2>
      <ol className="steps">
        <li>
          <strong>Leia Matrizes e Determinantes na ordem.</strong> Determinantes depende de conceitos
          de Matrizes (ordem, transposta), então vale seguir a sequência.
        </li>
        <li>
          <strong>Preste atenção nos quadros de "Atenção — jogo de sinal".</strong> Eles marcam os pontos
          onde erros de sinal (mais comuns do que parecem) costumam derrubar a nota.
        </li>
        <li>
          <strong>Refaça o quiz várias vezes.</strong> As questões e a ordem das alternativas mudam a
          cada tentativa, então repetir de fato ajuda a fixar o conteúdo.
        </li>
        <li>
          <strong>Termine em "Prova NPC1".</strong> Lá estão exemplos resolvidos exatamente no formato
          das duas questões descritivas da prova.
        </li>
      </ol>
    </>
  );
}
