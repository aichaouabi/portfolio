import { profile, copy } from "../content";

export default function Vision() {
  return (
    <section id="vision" className="vision">
      <div className="section-shell reveal">
        <span className="eyebrow">
          <i />
          Ma vision
        </span>
        <h2>{copy.visionTitle}</h2>
        <p>{profile.vision}</p>
        <div className="vision-words">
          {["Performance", "Agilité", "Humain", "Valeur ajoutée"].map((s) => (
            <span key={s}>
              {s}
              <i />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
