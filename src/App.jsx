import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Matrizes from "./pages/Matrizes.jsx";
import Determinantes from "./pages/Determinantes.jsx";
import Pratica from "./pages/Pratica.jsx";
import Quiz from "./pages/Quiz.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matrizes" element={<Matrizes />} />
          <Route path="/determinantes" element={<Determinantes />} />
          <Route path="/pratica" element={<Pratica />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
