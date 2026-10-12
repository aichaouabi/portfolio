import { ArrowUpRight } from "lucide-react";
import { offers, copy } from "../content";
import Heading from "./Heading";

export default function Offers() {
  return (
    <section className="section-shell offers reveal" id="accompagnement">
      <Heading label="Mes modes d’accompagnement" title={copy.offersTitle} />
      <div className="offer-grid">
        {offers.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
            <a
              className="text-link"
              href={"#contact"}
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("project-subject", { detail: title }),
                );
              }}
            >
              {copy.project}
              <ArrowUpRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
