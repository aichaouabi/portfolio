import { ArrowUpRight } from "lucide-react";
import { profile, copy } from "../content";
import Heading from "./Heading";

export default function Isolean() {
  return (
    <section id="isolean" className="section-shell isolean reveal">
      <div>
        <Heading label="Ma philosophie ISOLEAN" title={copy.isoleanTitle} />
        <p>{profile.approach}</p>
        <span className="approach-note">
          <span className="small-dot" />
          Deux approches. Une même ambition.
        </span>
      </div>
      <div className="convergence">
        <svg viewBox="0 0 560 320" aria-hidden="true">
          <circle cx="215" cy="150" r="118" />
          <circle cx="345" cy="150" r="118" />
          <path d="M215 32A118 118 0 0 1 215 268" className="animated-path" />
        </svg>
        <div className="iso-side">
          <strong>ISO</strong>
          <span>
            Structuration
            <br />
            Maîtrise des risques
            <br />
            Conformité
            <br />
            Fiabilité des processus
          </span>
        </div>
        <div className="lean-side">
          <strong>LEAN</strong>
          <span>
            Création de valeur
            <br />
            Efficacité opérationnelle
            <br />
            Élimination des gaspillages
            <br />
            Amélioration continue
          </span>
        </div>
        <div className="convergence-center">
          ISO<span>LEAN</span>
          
        </div>
        <div className="diagram-caption">
          Des systèmes proactifs. Des équipes autonomes.
        </div>
      </div>
    </section>
  );
}
