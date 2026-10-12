import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";
import { expertise, copy } from "../content";
import Heading from "./Heading";
import ProcessArt from "./ProcessArt";

export default function Expertise() {
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const preview = hovered === null ? null : expertise[hovered];
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const item = selected === null ? null : expertise[selected];

  useEffect(() => {
    if (selected === null || !dialog.current) return;
    const modal = dialog.current;
    if (!modal.open) modal.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (modal.open) modal.close();
      trigger.current?.focus({ preventScroll: true });
    };
  }, [selected]);

  const close = () => setSelected(null);

  return (
    <section id="expertises" className="tinted">
      <div className="section-shell reveal">
        <div className="heading-row">
          <Heading
            label="Mes domaines d’expertise"
            title={copy.expertiseTitle}
          />
          <p>
            Relier les systèmes, les processus et les équipes pour faire
            progresser votre organisation.
          </p>
        </div>
        <ProcessArt
          onPreview={setHovered}
          onSelect={(index, button) => {
            setHovered(null);
            trigger.current = button;
            setSelected(index);
          }}
        />
        {preview && selected === null && (
          <div
            className="expertise-dialog expertise-preview"
            aria-hidden="true"
          >
            <span className="eyebrow">
              <i />
              Mon expertise
            </span>
            <h2>{preview.title}</h2>
            <p>{preview.description}</p>
            <ul className="expertise-dialog-list">
              {preview.details.map((detail) => (
                <li key={detail}>
                  <Check size={18} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <dialog
          ref={dialog}
          id="expertise-dialog"
          className="expertise-dialog"
          aria-labelledby="expertise-dialog-title"
          aria-describedby="expertise-dialog-description"
          onCancel={(event) => {
            event.preventDefault();
            close();
          }}
          onClose={close}
          onClick={(event) => {
            if (event.target !== event.currentTarget) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < bounds.left ||
              event.clientX > bounds.right ||
              event.clientY < bounds.top ||
              event.clientY > bounds.bottom
            )
              close();
          }}
        >
          {item && (
            <>
              <div className="expertise-dialog-header">
                <span className="eyebrow">
                  <i />
                  Mon expertise
                </span>
                <button
                  type="button"
                  className="icon-button"
                  autoFocus
                  aria-label="Fermer les détails de l’expertise"
                  onClick={close}
                >
                  <X size={20} />
                </button>
              </div>
              <h2 id="expertise-dialog-title">{item.title}</h2>
              <p id="expertise-dialog-description">{item.description}</p>
              <ul className="expertise-dialog-list">
                {item.details.map((detail) => (
                  <li key={detail}>
                    <Check size={18} aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <a
                className="button primary"
                href="#contact"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("project-subject", { detail: item.title }),
                  );
                  close();
                }}
              >
                {copy.project}
                <ArrowUpRight size={18} />
              </a>
            </>
          )}
        </dialog>
      </div>
    </section>
  );
}
