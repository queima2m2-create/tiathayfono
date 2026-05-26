import { useState, useEffect } from "react";
import kiwifyLogo from "@/assets/kiwify-logo.webp";

type ToastMessage = {
  name: string;
  text: string;
  time: string;
};

const MESSAGES: ToastMessage[] = [
  { name: "Fernanda", text: "acabou de comprar o Programa", time: "há 3 minutos" },
  { name: "Camila", text: "acabou de comprar o Programa", time: "há 7 minutos" },
  { name: "Patrícia", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 11 minutos" },
  { name: "Juliana", text: "acabou de acessar o material", time: "há 2 minutos" },
  { name: "Renata", text: "acabou de comprar o Programa", time: "há 15 minutos" },
  { name: "Mariana", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 5 minutos" },
  { name: "Aline", text: "acabou de comprar o Programa", time: "há 1 minuto" },
  { name: "Beatriz", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 9 minutos" },
  { name: "Cristina", text: "acabou de acessar o material", time: "há 4 minutos" },
  { name: "Larissa", text: "acabou de comprar o Programa", time: "há 8 minutos" },
  { name: "Gabriela", text: "acabou de comprar o Programa", time: "há 6 minutos" },
  { name: "Helena", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 12 minutos" },
  { name: "Isabela", text: "acabou de acessar o material", time: "há 3 minutos" },
  { name: "Priscila", text: "acabou de comprar o Programa", time: "há 10 minutos" },
  { name: "Natália", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 14 minutos" },
  { name: "Débora", text: "acabou de comprar o Programa", time: "há 2 minutos" },
];

const MAX_APPEARANCES = 4;
const VISIBLE_MS = 4500;
const INTERVAL_MS = 35000;

const SocialProofToast = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [ctaInView, setCtaInView] = useState(false);

  // Hide when any data-cta button is in viewport (avoids overlap)
  useEffect(() => {
    const ctas = document.querySelectorAll('[data-cta]');
    if (!ctas.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting);
        setCtaInView((prev) => {
          if (anyVisible) return true;
          // re-check all
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
          <p className="text-xs text-gray-700 leading-snug">
            {msg.text}
          </p>
          <p className="text-[0.65rem] text-gray-400 mt-1">{msg.time}</p>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-gray-600 text-xs flex-shrink-0"
          aria-label="Fechar"
        >
          ✕
        </button>
      </div>
    </div>
  );
};


export default SocialProofToast;
