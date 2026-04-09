import { useState, useEffect } from "react";
import kiwifyLogo from "@/assets/kiwify-logo.webp";

const NAMES = [
  "Jéssica", "Amanda", "Camila", "Fernanda", "Juliana", "Patrícia",
  "Mariana", "Aline", "Bruna", "Carolina", "Débora", "Elaine",
  "Gabriela", "Helena", "Isabela", "Larissa", "Natália", "Priscila",
  "Rafaela", "Tatiane", "Vanessa", "Bianca", "Daniela", "Letícia",
  "Renata", "Simone", "Viviane", "Cristina", "Fabiana", "Luciana",
];

const TIMES = [
  "há 2 minutos", "há 5 minutos", "há 8 minutos", "há 12 minutos",
  "há 15 minutos", "há 20 minutos", "há 28 minutos", "há 35 minutos",
  "há 1 hora", "há 2 horas",
];

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const SocialProofToast = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const show = () => {
      setName(pick(NAMES));
      setTime(pick(TIMES));
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    // First appearance after 10s
    const initial = setTimeout(show, 10000);
    // Then every 8s after the first
    const interval = setInterval(show, 8000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

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
          <p className="font-bold text-sm text-green-700">{name}</p>
          <p className="text-xs text-gray-700 leading-snug">
            Realizou a compra do <strong>Guia Meu Filho Vai Falar</strong> — Acesso por 1 ano
          </p>
          <p className="text-xs mt-0.5">
            <span className="bg-green-100 text-green-700 text-[0.65rem] font-bold px-1.5 py-0.5 rounded">com 85% de desconto</span>
          </p>
          <p className="text-[0.65rem] text-gray-400 mt-1">{time}</p>
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
