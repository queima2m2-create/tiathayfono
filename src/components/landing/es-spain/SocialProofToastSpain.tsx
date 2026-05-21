import { useState, useEffect } from "react";
import kiwifyLogo from "@/assets/kiwify-logo.webp";

type ToastMessage = {
  name: string;
  text: string;
  time: string;
};

const MESSAGES: ToastMessage[] = [
  { name: "Fernanda", text: "compró la Guía Mi Hijo Va a Hablar", time: "hace 3 minutos" },
  { name: "Camila", text: "compró la Guía Mi Hijo Va a Hablar", time: "hace 7 minutos" },
  { name: "Patricia", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 11 minutos" },
  { name: "Juliana", text: "acaba de acceder al material", time: "hace 2 minutos" },
  { name: "Renata", text: "compró la Guía Mi Hijo Va a Hablar", time: "hace 15 minutos" },
  { name: "Mariana", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 5 minutos" },
  { name: "Alina", text: "compró la Guía Mi Hijo Va a Hablar", time: "hace 1 minuto" },
  { name: "Beatriz", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 9 minutos" },
  { name: "Cristina", text: "acaba de acceder al material", time: "hace 4 minutos" },
  { name: "Larissa", text: "compró la Guía Mi Hijo Va a Hablar", time: "hace 8 minutos" },
  { name: "Gabriela", text: "compró la Guía Mi Hijo Va a Hablar", time: "hace 6 minutos" },
  { name: "Helena", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 12 minutos" },
  { name: "Isabela", text: "acaba de acceder al material", time: "hace 3 minutos" },
  { name: "Priscila", text: "compró la Guía Mi Hijo Va a Hablar", time: "hace 10 minutos" },
  { name: "Natalia", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 14 minutos" },
  { name: "Débora", text: "compró la Guía Mi Hijo Va a Hablar", time: "hace 2 minutos" },
  { name: "Tatiana", text: "acaba de acceder al material", time: "hace 7 minutos" },
  { name: "Viviana", text: "compró la Guía Mi Hijo Va a Hablar", time: "hace 5 minutos" },
  { name: "Bianca", text: "dejó 5 estrellas ⭐⭐⭐⭐⭐", time: "hace 8 minutos" },
  { name: "Daniela", text: "compró la Guía Mi Hijo Va a Hablar", time: "hace 1 minuto" },
];

const SocialProofToastEs = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const showNext = () => {
      setIndex(currentIndex);
      setVisible(true);
      currentIndex = (currentIndex + 1) % MESSAGES.length;

      timeout = setTimeout(() => {
        setVisible(false);
        timeout = setTimeout(showNext, 7000);
      }, 4000);
    };

    timeout = setTimeout(showNext, 10000);

    return () => clearTimeout(timeout);
  }, []);

  const msg = MESSAGES[index];

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-[340px] transition-all duration-500 ${
        visible
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
          {msg.text.includes("compró") && (
            <p className="text-xs mt-0.5">
              <span className="bg-green-100 text-green-700 text-[0.65rem] font-bold px-1.5 py-0.5 rounded">con 85% de descuento</span>
            </p>
          )}
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
