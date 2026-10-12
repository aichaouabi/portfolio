import { useState } from "react";
import { ArrowUpRight, Sun, Moon, Menu, X } from "lucide-react";
import { nav } from "../content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    document.documentElement.dataset.theme === "dark",
  );
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("aicha-theme", next ? "dark" : "light");
    } catch {}
  };
  return (
    <header>
      <div className="nav-wrap">
        <a
          href="#accueil"
          className="brand"
          aria-label="Aicha Ouabi Idar, accueil"
        >
          <span className="monogram">
            ao<span>.</span>
          </span>
          <span>
            Aicha Ouabi Idar<small>QSE & PERFORMANCE</small>
          </span>
        </a>
        <nav
          aria-label="Navigation principale"
          className={open ? "open" : ""}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.getElementById("menu-toggle")?.focus();
            }
          }}
        >
          {nav.map(([name, id]) => (
            <a key={id} href={"#" + id} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Échangeons <ArrowUpRight size={16} />
          </a>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={toggle}
            aria-label={
              dark ? "Activer le mode clair" : "Activer le mode sombre"
            }
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            id="menu-toggle"
            className="icon-button mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
