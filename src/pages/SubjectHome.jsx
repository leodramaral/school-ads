import { Link, useLocation } from "react-router-dom";
import { getActiveSubject, chapterPath, examPath, flashcardsPath } from "../data/subjects.js";

// Home de uma matéria (ex: /matematica): cards para os assuntos e para a
// prova (que já leva embutido o simulado, uma vez lá dentro).
export default function SubjectHome() {
  const location = useLocation();
  const subject = getActiveSubject(location.pathname);

  return (
    <>
      <p className="eyebrow">ADS · {subject.shortLabel}</p>
      <h1>{subject.label}</h1>
      <p className="lede mt-0">Assuntos da matéria e simulado de treino para a prova.</p>

      <div className="card-grid">
        {subject.chapters.map((chapter) => (
          <Link key={chapter.slug} to={chapterPath(subject, chapter)} className="card">
            <span className="card-eyebrow">{chapter.eyebrow}</span>
            <span className="card-title">{chapter.label}</span>
            <p className="card-desc">{chapter.description}</p>
          </Link>
        ))}

        <Link to={examPath(subject)} className="card">
          <span className="card-eyebrow">{subject.exam.eyebrow}</span>
          <span className="card-title">{subject.exam.label}</span>
          <p className="card-desc">
            {subject.exam.description} O simulado de treino fica dentro dessa página.
          </p>
        </Link>

        <Link to={flashcardsPath(subject)} className="card">
          <span className="card-eyebrow">{subject.flashcards.eyebrow}</span>
          <span className="card-title">{subject.flashcards.label}</span>
          <p className="card-desc">{subject.flashcards.description}</p>
        </Link>
      </div>
    </>
  );
}
