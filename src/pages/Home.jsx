import { Link } from "react-router-dom";
import { SUBJECTS, simuladoPath, flashcardsPath } from "../data/subjects.js";

export default function Home() {
  return (
    <>
      <p className="eyebrow">ADS</p>
      <h1>Apostilas interativas</h1>
      <p className="lede mt-0">Escolha uma matéria para ver os assuntos e o simulado de prova.</p>

      <div className="card-grid">
        {SUBJECTS.map((subject) => (
          <div key={subject.slug} className="card-group" data-subject={subject.slug}>
            <Link to={`/${subject.slug}`} className="group block no-underline">
              <span className="card-eyebrow">Matéria</span>
              <span className="card-title transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                {subject.label}
              </span>
              <p className="card-desc">
                {subject.chapters.length} assunto{subject.chapters.length === 1 ? "" : "s"} + {subject.exam.label}{" "}
                com simulado
              </p>
            </Link>
            <div
              className="mt-4 flex flex-wrap gap-2 border-t border-neutral-200 pt-3 dark:border-neutral-800"
              role="group"
              aria-label={`Atalhos de ${subject.label}`}
            >
              <Link to={simuladoPath(subject)} className="card-shortcut">
                Simulado
              </Link>
              <Link to={flashcardsPath(subject)} className="card-shortcut">
                Flashcards
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
