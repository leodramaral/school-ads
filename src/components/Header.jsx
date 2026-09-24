import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/matrizes", label: "Matrizes" },
  { to: "/determinantes", label: "Determinantes" },
  { to: "/pratica", label: "Prova NPC1" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          Apostila Interativa
          <span className="brand-sub">ADS · Matemática Aplicada II</span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`site-nav ${open ? "open" : ""}`} aria-label="Navegação principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "current" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/quiz" className="nav-cta" onClick={() => setOpen(false)}>
            Quiz
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
