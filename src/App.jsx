import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SubjectLayout from "./components/SubjectLayout.jsx";
import ExamLayout from "./components/ExamLayout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Cada matéria (páginas + banco de questões do simulado) só é baixada quando
// o visitante realmente navega até ela — evita que todo mundo carregue o
// conteúdo de todas as matérias (e o KaTeX) só para abrir a Home.
const Home = lazy(() => import("./pages/Home.jsx"));
const SubjectHome = lazy(() => import("./pages/SubjectHome.jsx"));
const Matrizes = lazy(() => import("./pages/matematica/Matrizes.jsx"));
const Determinantes = lazy(() => import("./pages/matematica/Determinantes.jsx"));
const Pratica = lazy(() => import("./pages/matematica/Pratica.jsx"));
const IntroducaoIhc = lazy(() => import("./pages/ihc/Introducao.jsx"));
const UsabilidadeIhc = lazy(() => import("./pages/ihc/Usabilidade.jsx"));
const HeuristicasIhc = lazy(() => import("./pages/ihc/Heuristicas.jsx"));
const FatoresHumanosIhc = lazy(() => import("./pages/ihc/FatoresHumanos.jsx"));
const ErgonomiaIhc = lazy(() => import("./pages/ihc/Ergonomia.jsx"));
const ProvaIhc = lazy(() => import("./pages/ihc/Prova.jsx"));
const Simulado = lazy(() => import("./pages/Simulado.jsx"));

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
          <Suspense fallback={<p className="muted">Carregando…</p>}>
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
          </Suspense>
        </main>
      </div>
      <Footer />
    </>
  );
}
