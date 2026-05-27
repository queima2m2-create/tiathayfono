import { useState, useEffect } from "react";
import kiwifyLogo from "@/assets/kiwify-logo.webp";

type ToastMessage = {
  name: string;
  text: string;
  time: string;
};

const MESSAGES: ToastMessage[] = [
  { name: "Fernanda", text: "acaba de comprar la Guía", time: "hace 3 minutos" },
  { name: "Camila", text: "acaba de comprar la Guía", time: "hace 7 minutos" },
  { name: "Patricia", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 11 minutos" },
  { name: "Juliana", text: "acaba de acceder al material", time: "hace 2 minutos" },
  { name: "Renata", text: "acaba de comprar la Guía", time: "hace 15 minutos" },
  { name: "Mariana", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 5 minutos" },
  { name: "Alina", text: "acaba de comprar la Guía", time: "hace 1 minuto" },
  { name: "Beatriz", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 9 minutos" },
  { name: "Cristina", text: "acaba de acceder al material", time: "hace 4 minutos" },
  { name: "Larissa", text: "acaba de comprar la Guía", time: "hace 8 minutos" },
  { name: "Gabriela", text: "acaba de comprar la Guía", time: "hace 6 minutos" },
  { name: "Helena", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 12 minutos" },
  { name: "Isabela", text: "acaba de acceder al material", time: "hace 3 minutos" },
  { name: "Priscila", text: "acaba de comprar la Guía", time: "hace 10 minutos" },
  { name: "Natalia", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 14 minutos" },
  { name: "Débora", text: "acaba de comprar la Guía", time: "hace 2 minutos" },
];

const MAX_APPEARANCES = 4;
const VISIBLE_MS = 4500;
const INTERVAL_MS = 35000;

const SocialProofToastEs = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [ctaInView, setCtaInView] = useState(false);

  useEffect(() => {
    const ctas = document.querySelectorAll('[data-cta]');
    if (!ctas.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting);
        setCtaInView((prev) => {
          if (anyVisible) return true;
          const stillVisible = Array.from(ctas).some((el) => {
            const r = (el as HTMLElement).getBoundingClientRect();
            return r.top < window.innerHeight && r.bottom > 0;
          });
          return stillVisible;
        });
      },
      { threshold: 0.01 }
    );
    ctas.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;
    let appearances = 0;

    const showNext = () => {
      if (appearances >= MAX_APPEARANCES) return;
      appearances += 1;
      setIndex(currentIndex);
      setVisible(true);
      currentIndex = (currentIndex + 1) % MESSAGES.length;

      timeout = setTimeout(() => {
        setVisible(false);
        if (appearances < MAX_APPEARANCES) {
          timeout = setTimeout(showNext, INTERVAL_MS - VISIBLE_MS);
        }
      }, VISIBLE_MS);
    };

    timeout = setTimeout(showNext, 12000);
    return () => clearTimeout(timeout);
  }, []);

  const msg = MESSAGES[index];
  const show = visible && !ctaInView;

  return (
    <div
      className={`fixed bottom-4 left-4 z-30 max-w-[340px] transition-all duration-500 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-3 flex items-start gap-3 border border-gray-200">
        <img src={kiwifyLogo} alt="Kiwify" className="flex-shrink-0 w-10 h-10 rounded-full object-contain" />

        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-green-700">{msg.name}</p>
          <p className="text-xs text-gray-700 leading-snug">{msg.text}</p>
          <p className="text-[0.65rem] text-gray-400 mt-1">{msg.time}</p>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-gray-600 text-xs flex-shrink-0"
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SocialProofToastEs;
