import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SECTIONS } from "../data/sections.js";

function ChevronIcon({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform 0.15s ease" }}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function Sidebar({ open, onNavigate }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState({});
  const [activeId, setActiveId] = useState(null);

  function toggleExpanded(path) {
    setExpanded((prev) => ({ ...prev, [path]: !prev[path] }));
  }

  // Scroll-spy: acompanha qual seção da página atual está visível e destaca
  // o item correspondente na sidebar, mesmo que o usuário role manualmente
  // (sem clicar em nada).
  useEffect(() => {
    const activeSection = SECTIONS.find((s) => s.path === location.pathname);
    if (!activeSection) {
      setActiveId(null);
      return undefined;
    }

    const elements = activeSection.items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <aside className={`sidebar ${open ? "open" : ""}`} aria-label="Navegação da apostila">
      <NavLink
        to="/"
        end
        onClick={onNavigate}
        className={({ isActive }) => `sidebar-home ${isActive ? "current" : ""}`}
      >
        Início
      </NavLink>

      {SECTIONS.map((section) => {
        const isActive = location.pathname === section.path;
        const isOpen = isActive || !!expanded[section.path];
        return (
          <div className="sidebar-group" key={section.path}>
            <div className="sidebar-title-row">
              <NavLink
                to={section.path}
                onClick={onNavigate}
                className={({ isActive: navActive }) => `sidebar-title ${navActive ? "current" : ""}`}
              >
                {section.label}
              </NavLink>
              {!isActive && (
                <button
                  type="button"
                  className="sidebar-expand"
                  aria-expanded={isOpen}
                  aria-label={isOpen ? `Recolher ${section.label}` : `Expandir ${section.label}`}
                  onClick={() => toggleExpanded(section.path)}
                >
                  <ChevronIcon open={isOpen} />
                </button>
              )}
            </div>
            {isOpen && (
              <ul className="sidebar-items">
                {section.items.map((item) => (
                  <li key={item.id}>
                    {isActive ? (
                      <a
                        href={`#${item.id}`}
                        className={item.id === activeId ? "current" : undefined}
                        onClick={(e) => {
                          // Evita que o HashRouter interprete "#id" como troca de rota:
                          // navega manualmente até a âncora dentro da própria página.
                          e.preventDefault();
                          onNavigate?.();
                          setActiveId(item.id);
                          requestAnimationFrame(() => {
                            document.getElementById(item.id)?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          });
                        }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      // Seção só expandida para prévia (não é a página atual): o link leva
                      // até lá e já rola para a âncora certa assim que a página carregar.
                      <NavLink to={`${section.path}#${item.id}`} onClick={onNavigate}>
                        {item.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      <div className="sidebar-group">
        <NavLink
          to="/quiz"
          onClick={onNavigate}
          className={({ isActive }) => `sidebar-title ${isActive ? "current" : ""}`}
        >
          Quiz interativo
        </NavLink>
      </div>
    </aside>
  );
}
