import { Outlet, useLocation } from "react-router-dom";
import { getActiveSubject } from "../data/subjects.js";

// Wrapper de rota: agrupa as páginas de uma matéria (/materia/*) e marca a
// árvore com data-subject, para que a identidade de cor da matéria (ver
// `[data-subject]` em index.css) alcance capítulos, prova, simulado e
// flashcards sem que cada componente precise saber em qual matéria está.
export default function SubjectLayout() {
  const location = useLocation();
  const subject = getActiveSubject(location.pathname);

  return (
    <div data-subject={subject?.slug}>
      <Outlet />
    </div>
  );
}
