import { ShieldCheck, Workflow, Users, MessagesSquare } from "lucide-react";
import { values, copy } from "../content";
import Heading from "./Heading";

export default function Values() {
  return (
    <section className="section-shell reveal" id="valeurs">
      <Heading label="Mes valeurs" title={copy.valuesTitle} />
      <div className="values-grid">
        {values.map(([title, text], i) => {
          const Icon = [MessagesSquare, Users, Workflow, ShieldCheck][i];
          return (
            <article key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
