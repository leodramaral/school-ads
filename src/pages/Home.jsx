import { Link } from "react-router-dom";
import { SUBJECTS } from "../data/subjects.js";

export default function Home() {
  return (
    <>
      <p className="eyebrow">ADS</p>
      <h1>Apostilas interativas</h1>
      <p className="lede mt-0">Escolha uma matéria para ver os assuntos e o simulado de prova.</p>

      <div className="card-grid">
        {SUBJECTS.map((subject) => (
          <Link key={subject.slug} to={`/${subject.slug}`} className="card">
            <span className="card-eyebrow">Matéria</span>
            <span className="card-title">{subject.label}</span>
            <p className="card-desc">
              {subject.chapters.length} assunto{subject.chapters.length === 1 ? "" : "s"} + {subject.exam.label}{" "}
              com simulado
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
