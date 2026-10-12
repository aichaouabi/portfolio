import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Isolean from "./components/Isolean";
import Method from "./components/Method";
import Values from "./components/Values";
import Offers from "./components/Offers";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
