import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { phases, copy } from "../content";
import Heading from "./Heading";

export default function Method() {
  const [active, setActive] = useState(0);
  return (
    <section id="methode" className="tinted">
      <div className="section-shell reveal">
        <Heading label="Ma méthodologie" title={copy.methodTitle} />
        <div className="phase-track">
          {phases.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              aria-expanded={active === i}
              aria-controls="phase-detail"
              className={active === i ? "phase active" : "phase"}
            >
              <span className="phase-number">0{i + 1}</span>
              <strong>{p.title}</strong>
              <span>{p.description}</span>
              <ArrowUpRight size={19} />
            </button>
          ))}
        </div>
        <div className="phase-detail" id="phase-detail" aria-live="polite">
          <div>
            <span className="eyebrow">PHASE 0{active + 1}</span>
            <h3>{phases[active].title}</h3>
          </div>
          <ul>
            {phases[active].items.map((item) => (
              <li key={item}>
                <Check size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
