import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header({ onToggleSidebar, sidebarOpen }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          className="nav-toggle"
          aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={sidebarOpen}
          onClick={onToggleSidebar}
        >
          ☰
        </button>

        <NavLink to="/" className="brand">
          Apostila Interativa
          <span className="brand-sub">ADS · Matemática Aplicada II</span>
        </NavLink>

        <ThemeToggle />
      </div>
    </header>
  );
}
