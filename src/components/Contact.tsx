import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessagesSquare,
} from "lucide-react";
import { profile, copy } from "../content";
import Heading from "./Heading";

export default function Contact() {
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
