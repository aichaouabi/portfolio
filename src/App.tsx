import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Sun,
  Moon,
  Menu,
  X,
  ShieldCheck,
  ScanSearch,
  Workflow,
  Users,
  Check,
  Mail,
  Phone,
  MapPin,
  MessagesSquare,
  Plus,
  Minus,
} from "lucide-react";
import {
  profile,
  nav,
  expertise,
  phases,
  values,
  offers,
  copy,
} from "./content";
const icons = [ShieldCheck, ScanSearch, Workflow, Users];
function Heading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <i />
        {label}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
function ProcessArt() {
  return (
    <div
      className="process-art"
      aria-label="Qualité, humain et performance : les trois dimensions de mon approche"
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orbit-core">
        <span>Une approche</span>
        <strong>
          qui crée
          <br />
          de la valeur.
        </strong>
        <ArrowUpRight size={34} />
      </div>
      <span className="orbit-label quality">
        <ShieldCheck size={18} />
        Qualité
      </span>
      <span className="orbit-label human">
        <Users size={18} />
        Humain
      </span>
      <span className="orbit-label performance">
        <Workflow size={18} />
        Performance
      </span>
      <i className="orbit-dot" />
      <div className="art-caption">
        <span className="small-dot" />
        La performance est un mouvement continu.
      </div>
    </div>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    document.documentElement.dataset.theme === "dark",
  );
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("aicha-theme", next ? "dark" : "light");
    } catch {}
  };
  return (
    <header>
      <div className="nav-wrap">
        <a
          href="#accueil"
          className="brand"
          aria-label="Aicha Ouabi Idar, accueil"
        >
          <span className="monogram">
            ao<span>.</span>
          </span>
          <span>
            Aicha Ouabi Idar<small>QSE & PERFORMANCE</small>
          </span>
        </a>
        <nav
          aria-label="Navigation principale"
          className={open ? "open" : ""}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.getElementById("menu-toggle")?.focus();
            }
          }}
        >
          {nav.map(([name, id]) => (
            <a key={id} href={"#" + id} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Échangeons <ArrowUpRight size={16} />
          </a>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={toggle}
            aria-label={
              dark ? "Activer le mode clair" : "Activer le mode sombre"
            }
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            id="menu-toggle"
            className="icon-button mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
function Hero() {
  const [image, setImage] = useState(true);
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
            La qualité au service de votre{" "}
            <span>
              performance<span className="coral">.</span>
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
          {image ? (
            <>
              <img
                className="profile-image"
                src={profile.image}
                alt="Aicha Ouabi Idar"
                onError={() => setImage(false)}
              />
              <div className="portrait-caption">
                {profile.name}
                <span>QSE · Lean · ISOLEAN</span>
              </div>
            </>
          ) : (
            <ProcessArt />
          )}
          <span className="visual-note">RIGUEUR × AGILITÉ × ENGAGEMENT</span>
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
function About() {
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
function Expertise() {
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
        <div className="expertise-grid">
          {expertise.map((item, i) => {
            const Icon = icons[i];
            return (
              <article className="expertise-card" key={item.title}>
                <div className="card-top">
                  <span className="icon-tile">
                    <Icon size={25} />
                  </span>
                  <ArrowUpRight size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <details>
                  <summary>
                    {copy.details}
                    <Plus className="plus" size={16} />
                    <Minus className="minus" size={16} />
                  </summary>
                  <ul>
                    {item.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </details>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function Isolean() {
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
          <ArrowUpRight size={18} />
        </div>
        <div className="diagram-caption">
          Des systèmes proactifs. Des équipes autonomes.
        </div>
      </div>
    </section>
  );
}
function Method() {
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
function Values() {
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
function Offers() {
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
function Vision() {
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
function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const handler = (event: Event) => {
      const field = form.current?.elements.namedItem(
        "subject",
      ) as HTMLInputElement;
      if (field) field.value = (event as CustomEvent).detail;
    };
    window.addEventListener("project-subject", handler);
    return () => window.removeEventListener("project-subject", handler);
  }, []);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    ["name", "email", "subject", "message"].forEach((key) => {
      if (!String(data.get(key) || "").trim())
        next[key] = "Veuillez compléter ce champ.";
    });
    if (
      data.get("email") &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email")))
    )
      next.email = "Saisissez une adresse email valide.";
    setErrors(next);
    if (Object.keys(next).length) {
      (
        e.currentTarget.elements.namedItem(
          Object.keys(next)[0],
        ) as HTMLInputElement
      ).focus();
      return;
    }
    const body = `Nom : ${data.get("name")}\nEntreprise : ${data.get("company")}\nEmail : ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Votre brouillon est prêt dans votre application de messagerie. Si elle ne s’ouvre pas, contactez-moi directement par email.",
    );
  };
  return (
    <section id="contact" className="section-shell contact reveal">
      <div>
        <Heading label="Parlons de votre projet" title={copy.contactTitle} />
        <p>{copy.contactText}</p>
        <div className="contact-links">
          <a href={"mailto:" + profile.email}>
            <Mail size={19} />
            {profile.email}
            <ArrowUpRight size={16} />
          </a>
          <a href={"tel:" + profile.phone.replaceAll(" ", "")}>
            <Phone size={19} />
            {profile.phone}
          </a>
          <span>
            <MapPin size={19} />
            {profile.location}
          </span>
        </div>
        <div className="social-links">
          <a
            className="button outline"
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <MessagesSquare size={17} />
            WhatsApp
            <ArrowUpRight size={16} />
          </a>
          {profile.linkedin && (
            <a
              className="button outline"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
      <form ref={form} noValidate onSubmit={submit} className="contact-form">
        <div className="form-grid">
          {copy.fields.map(([key, label, placeholder]) => (
            <div
              key={key}
              className={
                key === "message" || key === "subject" ? "full-field" : ""
              }
            >
              <label htmlFor={key}>
                {label}
                {key === "company" ? (
                  <span> (facultatif)</span>
                ) : (
                  <span aria-hidden="true"> *</span>
                )}
              </label>
              {key === "message" ? (
                <textarea
                  id={key}
                  name={key}
                  rows={5}
                  placeholder={placeholder}
                  required
                  aria-invalid={!!errors[key]}
                  aria-describedby={errors[key] ? key + "-error" : undefined}
                />
              ) : (
                <input
                  id={key}
                  name={key}
                  type={key === "email" ? "email" : "text"}
                  autoComplete={
                    key === "name"
                      ? "name"
                      : key === "company"
                        ? "organization"
                        : key === "email"
                          ? "email"
                          : "off"
                  }
                  placeholder={placeholder}
                  required={key !== "company"}
                  aria-invalid={!!errors[key]}
                  aria-describedby={errors[key] ? key + "-error" : undefined}
                />
              )}{" "}
              {errors[key] && (
                <p className="field-error" id={key + "-error"}>
                  {errors[key]}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="form-help">{copy.mailHelp}</p>
        <button className="button primary" type="submit">
          {copy.send}
          <ArrowUpRight size={18} />
        </button>
        <p className="form-status" role="status">
          {status}
        </p>
      </form>
    </section>
  );
}
function Footer() {
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
export default function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <div
        className="reading-progress"
        style={{ transform: `scaleX(${progress})` }}
      />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Isolean />
        <Method />
        <Values />
        <Offers />
        <Vision />
        <Contact />
      </main>
      <Footer />
      {progress > 0.15 && (
        <a className="back-top" href="#accueil" aria-label="Retour en haut">
          <ArrowUp size={19} />
        </a>
      )}
    </>
  );
}
