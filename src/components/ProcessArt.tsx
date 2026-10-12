import {
  ArrowUpRight,
  ShieldCheck,
  ScanSearch,
  Workflow,
  Users,
  MonitorCog,
} from "lucide-react";
import { expertise } from "../content";

const icons = [ShieldCheck, ScanSearch, Workflow, Users, MonitorCog];

type ProcessArtProps = {
  onSelect: (index: number, trigger: HTMLButtonElement) => void;
  onPreview: (index: number | null) => void;
};

export default function ProcessArt({ onSelect, onPreview }: ProcessArtProps) {
  return (
    <div
      className="process-art expertise-radar"
      role="group"
      aria-label={`Explorer mes ${expertise.length} domaines d’expertise`}
    >
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      <div className="orbit orbit-three" aria-hidden="true" />
      <div className="radar-sweep" aria-hidden="true" />
      <div className="orbit-core">
        <span>Une approche</span>
        <strong>
          qui crée
          <br />
          de la valeur.
        </strong>
        <ArrowUpRight size={34} aria-hidden="true" />
      </div>
      {expertise.map((item, index) => {
        const Icon = icons[index];
        return (
          <button
            key={item.title}
            type="button"
            className={`radar-button radar-position-${index}`}
            aria-haspopup="dialog"
            aria-controls="expertise-dialog"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") onPreview(index);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") onPreview(null);
            }}
            onClick={(event) => onSelect(index, event.currentTarget)}
          >
            <Icon size={23} aria-hidden="true" />
            <span>{item.title}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        );
      })}
      <div className="art-caption">
        <span className="small-dot" />
        Sélectionnez un domaine pour découvrir mon accompagnement.
      </div>
    </div>
  );
}
