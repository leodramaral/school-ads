import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// A cada troca de rota: sem âncora, volta ao topo; com âncora (ex.: um item de
// sidebar de uma seção só "espiada", que navega para "/pagina#id"), rola até
// o elemento depois que o conteúdo da nova página for renderizado.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }, [pathname, hash]);

  return null;
}
