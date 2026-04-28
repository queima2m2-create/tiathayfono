import { useEffect } from "react";
import { fbEvents } from "@/lib/fbConversions";

// Paleta V4
const ROXO = "#6B2D8B";
const ROXO_ESCURO = "#5A1F75";
const LILAS = "#F3E8F8";
const CINZA_MEDIO = "#7A6A6E";
const CINZA_TEXTO = "#3a2f33";
const DOURADO = "#D4A047";
const DOURADO_HOVER = "#B8862F";
const VERMELHO = "#C62828";

const CHECKOUT_LINK = "https://pay.kiwify.com/6tBcvSl";
const SAIDA_LINK = "/v3";

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill={ROXO} />
    <path d="M5.5 10.5l3 3 6-6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ITENS = [
  "Plano 30 Dias com a Tia Thay",
  "Caderno de Acompanhamento",
  "50 Cards para Imprimir",
  "Acesso vitalício",
  "Garantia de 7 dias",
];

const V6 = () => {
  useEffect(() => {
    fbEvents.pageView();
  }, []);

  const handleCta = () => {
    fbEvents.initiateCheckout();
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif", color: CINZA_TEXTO }}
    >
      {/* 1) BARRA SUPERIOR */}
      <div
        className="sticky top-0 z-50 w-full text-white text-center text-[12px] py-1.5 px-3 font-medium"
        style={{ background: ROXO }}
      >
        ⏳ Espera, mãe! Antes de você ir...
      </div>

      {/* 2) HERO compacto */}
      <section className="px-5 pt-4 pb-3 text-center">
        <h1
          className="text-[1.15rem] md:text-[1.5rem] font-extrabold leading-snug mb-1.5"
          style={{ color: ROXO }}
        >
          Sem os bônus extras — mas com tudo o que importa
        </h1>
        <p className="text-[0.9rem] md:text-[1rem] leading-snug" style={{ color: CINZA_TEXTO }}>
          Eu separei um kit inicial pra você começar HOJE com 50% OFF.
        </p>
      </section>

      {/* 3) CARD ÚNICO */}
      <section className="px-4 pb-3">
        <div
          className="max-w-[420px] mx-auto rounded-2xl px-5 py-4"
          style={{ background: LILAS }}
        >
          <ul className="space-y-2">
            {ITENS.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.92rem] font-semibold" style={{ color: CINZA_TEXTO }}>
                <Check /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4) BOX DE PREÇO */}
      <section className="px-4 pb-3">
        <div
          className="max-w-[420px] mx-auto rounded-2xl text-center px-4 py-4 bg-white"
          style={{ border: `1.5px solid ${DOURADO}` }}
        >
          <p className="text-[0.8rem] line-through" style={{ color: CINZA_MEDIO }}>
            De R$ 197
          </p>
          <p
            className="font-black leading-none my-1"
            style={{ color: VERMELHO, fontSize: "clamp(2.4rem, 10vw, 3.4rem)" }}
          >
            R$ 97
          </p>
          <p className="text-[0.85rem] font-bold" style={{ color: ROXO }}>
            ou 12x de R$ 9,99
          </p>
        </div>
      </section>

      {/* 5) URGÊNCIA */}
      <section className="px-4 pb-3">
        <div
          className="max-w-[420px] mx-auto rounded-lg text-center px-3 py-2"
          style={{ background: ROXO_ESCURO }}
        >
          <p className="text-white font-bold text-[0.85rem] leading-tight">
            ⏰ Esta oferta desaparece se você sair desta página
          </p>
        </div>
      </section>

      {/* 6) CTA */}
      <section className="px-4 pb-2">
        <a
          href={CHECKOUT_LINK}
          onClick={handleCta}
          className="downsell-cta block w-[90%] max-w-[420px] mx-auto rounded-full uppercase font-extrabold text-white text-center py-4 px-4 text-[0.95rem] tracking-wide transition-all"
          style={{
            background: DOURADO,
            boxShadow: `0 8px 20px -8px ${DOURADO}b3`,
          }}
        >
          SIM, QUERO POR R$ 97 ➔
        </a>
      </section>

      {/* 7) LINK SAÍDA */}
      <section className="px-4 pb-4 text-center">
        <a
          href={SAIDA_LINK}
          className="inline-block text-[0.8rem] underline underline-offset-2"
          style={{ color: "#999999" }}
        >
          Não, prefiro continuar sem
        </a>
      </section>

      <style>{`
        @keyframes downsellPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 8px 20px -8px ${DOURADO}b3; }
          50% { transform: scale(1.03); box-shadow: 0 12px 26px -6px ${DOURADO}cc; }
        }
        .downsell-cta { animation: downsellPulse 2.2s ease-in-out infinite; }
        .downsell-cta:hover { background: ${DOURADO_HOVER} !important; animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default V6;
