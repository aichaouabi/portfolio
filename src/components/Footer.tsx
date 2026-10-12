import { ArrowUpRight } from "lucide-react";
import { profile, nav } from "../content";

export default function Footer() {
  return (
    <footer>
      <div className="section-shell">
        <div className="footer-main">
          <a className="brand" href="#accueil">
            <span className="monogram">
              ao<span>.</span>
            </span>
            <span>
              {profile.name}
              <small>QSE · Lean Management · Performance Opérationnelle</small>
            </span>
          </a>
          <a className="text-link" href="#contact">
            Construisons la suite <ArrowUpRight size={19} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Aicha Ouabi Idar. Tous droits réservés.</span>
          <nav aria-label="Navigation de pied de page">
            {nav.map(([name, id]) => (
              <a href={"#" + id} key={id}>
                {name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
