import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Collapsible } from "@base-ui/react/collapsible";
import { SUBJECTS, chapterPath, examPath, simuladoPath, flashcardsPath } from "../data/subjects.js";

function ChevronIcon() {
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
      className="transition-transform duration-150 ease-out group-data-panel-open:rotate-90"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

const navLinkClass = (isActive) =>
  `block rounded-md px-2 py-1 text-[0.85rem] no-underline ${
    isActive
      ? "bg-blue-50 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
  }`;

// Achata uma matéria em capítulos + prova, todos no mesmo formato de "seção"
// que a sidebar sabe renderizar (path, label, items de âncora). A prova
// carrega também o link do simulado, que é filho dela, não uma seção à parte.
function subjectSections(subject) {
  const chapters = subject.chapters.map((chapter) => ({
    path: chapterPath(subject, chapter),
    label: chapter.label,
    items: chapter.items,
    simulado: null,
  }));

  const exam = {
    path: examPath(subject),
    label: subject.exam.label,
    items: subject.exam.items,
    simulado: { path: simuladoPath(subject), label: subject.exam.simulado.label },
  };

  const flashcards = {
    path: flashcardsPath(subject),
    label: subject.flashcards.label,
    items: [],
    simulado: null,
  };

  return [...chapters, exam, flashcards];
}

export default function Sidebar({ open, onNavigate }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState({});
  const [activeId, setActiveId] = useState(null);

  // Scroll-spy: acompanha qual seção da página atual está visível e destaca
  // o item correspondente na sidebar, mesmo que o usuário role manualmente
  // (sem clicar em nada).
  useEffect(() => {
    const allSections = SUBJECTS.flatMap(subjectSections);
    const activeSection = allSections.find((s) => s.path === location.pathname);
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
    <aside
      className={`${open ? "block" : "hidden"} border-b border-neutral-200 bg-canvas px-5 py-4 md:sticky md:top-14 md:block md:max-h-[calc(100vh-3.5rem)] md:w-64 md:flex-none md:overflow-y-auto md:border-b-0 md:border-r md:px-4 md:py-7 dark:border-neutral-800 dark:bg-canvas-dark`}
      aria-label="Navegação da apostila"
    >
      <NavLink
        to="/"
        end
        onClick={onNavigate}
        className={({ isActive }) =>
          `mb-3 block border-b border-neutral-200 pb-3.5 text-[0.95rem] font-semibold no-underline dark:border-neutral-800 ${
            isActive ? "text-blue-600 dark:text-blue-400" : "text-neutral-900 hover:text-blue-600 dark:text-neutral-50 dark:hover:text-blue-400"
          }`
        }
      >
        Início
      </NavLink>

      {SUBJECTS.map((subject) => (
        <div className="mb-8 last:mb-0" key={subject.slug}>
          <NavLink
            to={`/${subject.slug}`}
            end
            onClick={onNavigate}
            className={({ isActive }) =>
              `mb-2 block px-0.5 text-[0.72rem] font-semibold uppercase tracking-wide no-underline ${
                isActive ? "text-blue-600 dark:text-blue-400" : "text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
              }`
            }
          >
            {subject.shortLabel}
          </NavLink>

          {subjectSections(subject).map((section) => {
            const isOwnPage = location.pathname === section.path;
            const isBranchActive =
              isOwnPage || (section.simulado && location.pathname === section.simulado.path);
            const isOpen = isBranchActive || !!expanded[section.path];
            const hasExpandable = section.items.length > 0 || !!section.simulado;

            return (
              <div className="mb-3 last:mb-0" key={section.path}>
                <Collapsible.Root
                  open={isOpen}
                  onOpenChange={(next) => setExpanded((prev) => ({ ...prev, [section.path]: next }))}
                >
                  <div className="flex items-center gap-1">
                    <NavLink
                      to={section.path}
                      onClick={onNavigate}
                      className={({ isActive: navActive }) =>
                        `-ml-2 block flex-1 rounded-md py-1 pl-2 pr-1 text-[0.92rem] font-semibold leading-snug no-underline ${
                          navActive
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                            : "text-neutral-900 hover:text-blue-600 dark:text-neutral-50 dark:hover:text-blue-400"
                        }`
                      }
                    >
                      {section.label}
                    </NavLink>
                    {hasExpandable && !isBranchActive && (
                      <Collapsible.Trigger
                        className="group flex h-8 w-8 flex-none items-center justify-center rounded-md text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
                        aria-label={isOpen ? `Recolher ${section.label}` : `Expandir ${section.label}`}
                      >
                        <ChevronIcon />
                      </Collapsible.Trigger>
                    )}
                  </div>

                  {hasExpandable && (
                  <Collapsible.Panel className="flex h-[var(--collapsible-panel-height)] flex-col overflow-hidden transition-[height] duration-150 ease-out data-ending-style:h-0 data-starting-style:h-0">
                    <ul className="ml-1 mt-2 list-none border-l-2 border-neutral-200 py-0 pl-3 dark:border-neutral-800">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          {isOwnPage ? (
                            <a
                              href={`#${item.id}`}
                              className={navLinkClass(item.id === activeId)}
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
                            <NavLink to={`${section.path}#${item.id}`} onClick={onNavigate} className={navLinkClass(false)}>
                              {item.label}
                            </NavLink>
                          )}
                        </li>
                      ))}
                      {section.simulado && (
                        <li>
                          <NavLink
                            to={section.simulado.path}
                            onClick={onNavigate}
                            className={({ isActive }) => navLinkClass(isActive) + " font-semibold"}
                          >
                            {section.simulado.label}
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </Collapsible.Panel>
                  )}
                </Collapsible.Root>
              </div>
            );
          })}
        </div>
      ))}
    </aside>
  );
}
