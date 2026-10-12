import { ArrowUpRight } from "lucide-react";
import { profile, copy } from "../content";
import Heading from "./Heading";

export default function About() {
  return (
    <section id="a-propos" className="section-shell about reveal">
      <div className="about-statement">
        <span className="eyebrow">
          <i />
          Une conviction, un parcours
        </span>
        <span className="quote-mark">“</span>
        <blockquote>{profile.philosophy}</blockquote>
        <span className="signature">Aicha Ouabi Idar</span>
      </div>
      <div>
        <Heading label="À propos" title={copy.aboutTitle} />
        <p>{profile.about}</p>
        <p>{copy.aboutEnd}</p>
        <a className="text-link" href="#methode">
          Découvrir ma façon de travailler <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
