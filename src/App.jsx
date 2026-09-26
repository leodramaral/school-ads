import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SubjectLayout from "./components/SubjectLayout.jsx";
import ExamLayout from "./components/ExamLayout.jsx";
import Home from "./pages/Home.jsx";
import SubjectHome from "./pages/SubjectHome.jsx";
import Matrizes from "./pages/matematica/Matrizes.jsx";
import Determinantes from "./pages/matematica/Determinantes.jsx";
import Pratica from "./pages/matematica/Pratica.jsx";
import IntroducaoIhc from "./pages/ihc/Introducao.jsx";
import UsabilidadeIhc from "./pages/ihc/Usabilidade.jsx";
import HeuristicasIhc from "./pages/ihc/Heuristicas.jsx";
import FatoresHumanosIhc from "./pages/ihc/FatoresHumanos.jsx";
import ErgonomiaIhc from "./pages/ihc/Ergonomia.jsx";
import ProvaIhc from "./pages/ihc/Prova.jsx";
import Simulado from "./pages/Simulado.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} sidebarOpen={sidebarOpen} />
      <div className="flex flex-col items-stretch md:flex-row md:items-start">
        <Sidebar open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
        <main className="min-w-0 flex-1 px-5 py-8 pb-20 md:max-w-3xl md:px-10 md:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matematica" element={<SubjectLayout />}>
              <Route index element={<SubjectHome />} />
              <Route path="matrizes" element={<Matrizes />} />
              <Route path="determinantes" element={<Determinantes />} />
              <Route path="npc1" element={<ExamLayout />}>
                <Route index element={<Pratica />} />
                <Route path="simulado" element={<Simulado />} />
              </Route>
            </Route>
            <Route path="/ihc" element={<SubjectLayout />}>
              <Route index element={<SubjectHome />} />
              <Route path="introducao" element={<IntroducaoIhc />} />
              <Route path="usabilidade" element={<UsabilidadeIhc />} />
              <Route path="heuristicas" element={<HeuristicasIhc />} />
              <Route path="fatores-humanos" element={<FatoresHumanosIhc />} />
              <Route path="ergonomia" element={<ErgonomiaIhc />} />
              <Route path="npc1" element={<ExamLayout />}>
                <Route index element={<ProvaIhc />} />
                <Route path="simulado" element={<Simulado />} />
              </Route>
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
