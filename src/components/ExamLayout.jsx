import { Outlet } from "react-router-dom";

// Wrapper de rota: agrupa a página da prova e o simulado (/materia/npc1/*)
// para que o simulado seja filho real da prova na árvore de rotas.
export default function ExamLayout() {
  return <Outlet />;
}
