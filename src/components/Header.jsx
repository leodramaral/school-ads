import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header({ onToggleSidebar, sidebarOpen }) {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="flex h-14 items-center gap-3 px-5">
        <button
          className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-100 md:hidden dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
          aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={sidebarOpen}
          onClick={onToggleSidebar}
        >
          ☰
        </button>

        <NavLink
          to="/"
          className="flex min-w-0 flex-1 flex-col leading-tight font-semibold text-neutral-900 no-underline hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50"
        >
          <span className="text-[1.02rem]">Apostila Interativa</span>
          <span className="text-[0.7rem] font-normal uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            ADS · Matemática Aplicada II
          </span>
        </NavLink>

        <ThemeToggle />
      </div>
    </header>
  );
}
