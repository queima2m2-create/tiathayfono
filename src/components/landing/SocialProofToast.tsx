import { useState, useEffect } from "react";
import kiwifyLogo from "@/assets/kiwify-logo.webp";

type ToastMessage = {
  name: string;
  text: string;
  time: string;
};

const MESSAGES: ToastMessage[] = [
  { name: "Fernanda", text: "comprou o Guia Meu Filho Vai Falar", time: "há 3 minutos" },
  { name: "Camila", text: "comprou o Guia Meu Filho Vai Falar", time: "há 7 minutos" },
  { name: "Patrícia", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 11 minutos" },
  { name: "Juliana", text: "acabou de acessar o material", time: "há 2 minutos" },
  { name: "Renata", text: "comprou o Guia Meu Filho Vai Falar", time: "há 15 minutos" },
  { name: "Mariana", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 5 minutos" },
  { name: "Aline", text: "comprou o Guia Meu Filho Vai Falar", time: "há 1 minuto" },
  { name: "Beatriz", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 9 minutos" },
  { name: "Cristina", text: "acabou de acessar o material", time: "há 4 minutos" },
  { name: "Larissa", text: "comprou o Guia Meu Filho Vai Falar", time: "há 8 minutos" },
  { name: "Gabriela", text: "comprou o Guia Meu Filho Vai Falar", time: "há 6 minutos" },
  { name: "Helena", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 12 minutos" },
  { name: "Isabela", text: "acabou de acessar o material", time: "há 3 minutos" },
  { name: "Priscila", text: "comprou o Guia Meu Filho Vai Falar", time: "há 10 minutos" },
  { name: "Natália", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 14 minutos" },
  { name: "Débora", text: "comprou o Guia Meu Filho Vai Falar", time: "há 2 minutos" },
  { name: "Tatiane", text: "acabou de acessar o material", time: "há 7 minutos" },
  { name: "Viviane", text: "comprou o Guia Meu Filho Vai Falar", time: "há 5 minutos" },
  { name: "Bianca", text: "deixou 5 estrelas ⭐⭐⭐⭐⭐", time: "há 8 minutos" },
  { name: "Daniela", text: "comprou o Guia Meu Filho Vai Falar", time: "há 1 minuto" },
];

const SocialProofToast = () => {
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
        // Wait 5s after hiding, then show next
        timeout = setTimeout(showNext, 5000);
      }, 4000);
    };

    // First toast after 10s
    timeout = setTimeout(showNext, 10000);

    return () => clearTimeout(timeout);
  }, []);

  const msg = MESSAGES[index === 0 ? MESSAGES.length - 1 : index - 1];

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
          {msg.text.includes("comprou") && (
            <p className="text-xs mt-0.5">
              <span className="bg-green-100 text-green-700 text-[0.65rem] font-bold px-1.5 py-0.5 rounded">com 85% de desconto</span>
            </p>
          )}
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
