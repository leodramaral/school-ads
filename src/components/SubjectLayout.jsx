import { Outlet } from "react-router-dom";

// Wrapper de rota: agrupa as páginas de uma matéria (/materia/*) sem
// renderizar nada por si só — só existe para dar nesting real no router.
export default function SubjectLayout() {
  return <Outlet />;
}
