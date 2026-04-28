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

const CHECKOUT_LINK = "https://pay.kiwify.com.br/2YqnsXX";
const SAIDA_LINK = "/v3";

const ITENS_PRINCIPAIS = [
  { icon: "🟣", titulo: "Plano 30 Dias com a Tia Thay", valor: "R$297" },
  { icon: "📒", titulo: "Caderno de Acompanhamento", valor: "R$47" },
  { icon: "🃏", titulo: "50 Cards para Imprimir", valor: "R$47" },
];

const V6 = () => {
  useEffect(() => {
    fbEvents.pageView();

    const SRC = "https://snippets.kiwify.com/upsell/upsell.min.js";
    if (!document.querySelector(`script[src="${SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      document.body.appendChild(s);
    }
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
        className="sticky top-0 z-50 w-full text-white text-center text-[12px] py-1 px-3 font-medium"
        style={{ background: ROXO }}
      >
        🔥 ÚLTIMA CHANCE — Oferta exclusiva desta tela
      </div>

      {/* 2) HERO COMPACTO */}
      <section className="px-5 pt-3 pb-2 text-center max-w-[480px] mx-auto">
        <h1
          className="text-[1.15rem] font-extrabold leading-snug mb-1.5"
          style={{ color: ROXO }}
        >
          VOCÊ AINDA PODE LEVAR O PLANO 30 DIAS COM 50% OFF
        </h1>
        <p className="text-[0.88rem] leading-snug" style={{ color: CINZA_TEXTO }}>
          Última oportunidade de levar o método completo da Tia Thay para destravar a fala do seu filho — com <strong style={{ color: VERMELHO }}>metade do preço</strong>.
        </p>
      </section>

      {/* 3) CARD "O QUE INCLUI" */}
      <section className="px-4 pb-2">
        <div
          className="max-w-[460px] mx-auto rounded-xl px-4 py-3"
          style={{ background: LILAS }}
        >
          <h2 className="text-[0.95rem] font-extrabold mb-2 text-center" style={{ color: ROXO }}>
            ✅ Você leva o método completo:
          </h2>

          <ul className="space-y-1.5 mb-2.5">
            {ITENS_PRINCIPAIS.map((item) => (
              <li key={item.titulo} className="text-[0.88rem] font-bold leading-snug" style={{ color: CINZA_TEXTO }}>
                {item.icon} {item.titulo}{" "}
                <span className="line-through font-semibold ml-1" style={{ color: CINZA_MEDIO }}>
                  De {item.valor}
                </span>
              </li>
            ))}
          </ul>

          <div
            className="rounded-md text-center px-2 py-1.5"
            style={{ background: DOURADO }}
          >
            <p className="text-white font-extrabold text-[0.85rem] leading-tight">
              Valor real R$391 → Hoje por apenas R$97
            </p>
          </div>
        </div>
      </section>

      {/* 4) BOX DE PREÇO PRINCIPAL */}
      <section className="px-4 pb-2">
        <div
          className="max-w-[420px] mx-auto rounded-xl text-center px-3 py-2.5 bg-white"
          style={{ border: `2px solid ${DOURADO}` }}
        >
          <p className="text-[0.85rem] line-through font-semibold leading-tight" style={{ color: VERMELHO }}>
            De R$ 197
          </p>
          <p className="text-[0.72rem] leading-tight" style={{ color: CINZA_TEXTO }}>
            Por apenas
          </p>
          <p
            className="font-black leading-none mt-0.5"
            style={{ color: "#43A047", fontSize: "clamp(2rem, 8.5vw, 2.8rem)" }}
          >
            12x de R$ 10,03
          </p>
          <p className="text-[0.95rem] font-bold mt-1 leading-tight" style={{ color: ROXO }}>
            ou R$ 97,00 à vista
          </p>
          <p className="text-[0.85rem] font-extrabold mt-0.5 leading-tight" style={{ color: "#43A047" }}>
            💚 ECONOMIA DE R$100 — só nesta tela 💚
          </p>
        </div>
      </section>

      {/* 5) URGÊNCIA */}
      <section className="px-4 pb-2">
        <div
          className="max-w-[420px] mx-auto rounded-md text-center px-3 py-1.5"
          style={{ background: ROXO_ESCURO }}
        >
          <p className="text-white font-bold text-[0.82rem] leading-tight">
            ⚠️ Se você sair desta página, esta oferta NÃO estará disponível depois
          </p>
        </div>
      </section>

      {/* 6) CTA + 8) LINK SAÍDA — Kiwify One-Click */}
      <div
        id="kiwify-upsell-2YqnsXX"
        data-upsell-url=""
        data-downsell-url="https://www.tiathayfono.com.br/v3"
      >
        <section className="px-4 pb-1.5">
          <button
            id="kiwify-upsell-trigger-2YqnsXX"
            onClick={handleCta}
            className="downsell-cta block w-[92%] max-w-[420px] mx-auto rounded-full uppercase font-extrabold text-white text-center py-3.5 px-4 text-[0.92rem] tracking-wide transition-all border-0 cursor-pointer"
            style={{
              background: "#43A047",
              boxShadow: `0 8px 22px -8px #43A047cc`,
            }}
          >
            QUERO O PLANO COM 50% OFF ➔
          </button>
        </section>

        {/* 7) MICROCOPY */}
        <section className="px-4 pb-1.5 pt-1 text-center">
          <p className="text-[0.72rem] leading-snug" style={{ color: CINZA_MEDIO }}>
            ✅ Acesso vitalício • ✅ Garantia incondicional de 7 dias
          </p>
        </section>

        {/* 7b) DISCLAIMER */}
        <section className="px-4 pb-2 text-center">
          <p className="text-[0.65rem] leading-snug" style={{ color: "#999999" }}>
            *Esta oferta especial não inclui os bônus do plano premium (Guia de Situações Difíceis, Checklist de Marcos e App Tagarelar).
          </p>
        </section>

        {/* 8) LINK SAÍDA */}
        <section className="px-4 pb-4 text-center">
          <div
            id="kiwify-upsell-cancel-trigger-2YqnsXX"
            className="inline-block text-[0.78rem] underline underline-offset-2 cursor-pointer"
            style={{ color: "#999999" }}
          >
            Não, prefiro continuar sem
          </div>
        </section>
      </div>

      <style>{`
        @keyframes downsellPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 8px 22px -8px #43A047cc; }
          50% { transform: scale(1.03); box-shadow: 0 12px 28px -6px #43A047e6; }
        }
        .downsell-cta { animation: downsellPulse 2.2s ease-in-out infinite; }
        .downsell-cta:hover { background: #2E7D32 !important; animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default V6;
