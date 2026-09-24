import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p className="eyebrow">ADS · Matemática Aplicada à Computação II</p>
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
          <p>
            Formato da prova, questões descritivas modelo (Teorema de Jacobi e cálculo livre) e o
            quiz interativo de treino.
          </p>
        </Link>
      </div>
    </>
  );
}
