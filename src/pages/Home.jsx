import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p className="eyebrow">ADS · Matemática Aplicada à Computação II</p>
      <ul className="index-list">
        <li className="index-item">
          <span className="index-index">Capítulo 1</span>
          <Link to="/matrizes">Matrizes</Link>
          <p>Definição, tipos especiais, operações (soma, subtração, multiplicação) e matriz inversa.</p>
        </li>

        <li className="index-item">
          <span className="index-index">Capítulo 2</span>
          <Link to="/determinantes">Determinantes</Link>
          <p>Ordem 2 e 3, cofatores, Laplace, Sarrus, propriedades e o Teorema de Jacobi em detalhe.</p>
        </li>

        <li className="index-item">
          <span className="index-index">Foco na prova</span>
          <Link to="/pratica">Prova NPC1</Link>
          <p>
            Formato da prova, questões descritivas modelo (Teorema de Jacobi e cálculo livre) e o
            quiz interativo de treino.
          </p>
        </li>
      </ul>
    </>
  );
}
