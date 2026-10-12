import { ArrowUpRight, ArrowRight } from "lucide-react";
import { profile, copy } from "../content";

export default function Hero() {
  return (
    <section id="accueil" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <i />
            {copy.welcome}
          </span>
          <p className="hero-name">{profile.name}</p>
          <h1>
            Structurer vos pratiques.{" "}
            <span>
              Faire progresser vos équipes<span className="coral">.</span>
            </span>
          </h1>
          <div className="role">
            <span>{profile.role}</span>
            <strong>Experte QSE & Performance Opérationnelle</strong>
          </div>
          <p className="hero-description">{copy.tagline}</p>
          <div className="flex flex-wrap gap-3 hero-cta">
            <a className="button primary" href="#expertises">
              {copy.discover}
              <ArrowUpRight size={18} />
            </a>
            <a className="button outline" href="#contact">
              {copy.contact}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            className="profile-image"
            src={profile.image}
            alt={profile.name}
            fetchPriority="high"
          />
          <div className="portrait-caption">
            <span className="visual-note">RIGUEUR × AGILITÉ × ENGAGEMENT</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div>
          <strong>
            25<span>+</span>
          </strong>
          <p>années d’expérience</p>
        </div>
        <div>
          <strong>2021</strong>
          <p>création de VA CONSULTING</p>
        </div>
        <div>
          <strong className="stat-text">QSE · Lean · ISOLEAN</strong>
          <p>une vision intégrée de la performance</p>
        </div>
        <a href="#a-propos" className="scroll-link">
          Faisons connaissance <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
