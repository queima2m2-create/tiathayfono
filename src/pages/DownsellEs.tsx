import { useEffect } from "react";
import { fbEvents } from "@/lib/fbConversions";

// Paleta V4
const ROXO = "#6B2D8B";
const ROXO_ESCURO = "#5A1F75";
const LILAS = "#F3E8F8";
const CINZA_MEDIO = "#7A6A6E";
const CINZA_TEXTO = "#3a2f33";
const DOURADO = "#D4A047";
const VERMELHO = "#C62828";

const SAIDA_LINK = "/v5";

const ITENS_PRINCIPAIS = [
  { icon: "🟣", titulo: "Plan 30 Días con la Tía Thay", valor: "$74 USD" },
  { icon: "📒", titulo: "Cuaderno de Acompañamiento", valor: "$12 USD" },
  { icon: "🃏", titulo: "50 Cards para Imprimir", valor: "$12 USD" },
];

const DownsellEs = () => {
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
    if (typeof (window as any).fbq !== "undefined") {
      (window as any).fbq("track", "InitiateCheckout", {
        value: 24.9,
        currency: "USD",
        content_name: "Plan 30 Días - Oferta Especial LATAM",
        content_type: "product",
      });
    }
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
        🔥 ÚLTIMA OPORTUNIDAD — Oferta exclusiva de esta pantalla
      </div>

      {/* 2) HERO COMPACTO */}
      <section className="px-5 pt-3 pb-2 text-center max-w-[480px] mx-auto">
        <h1
          className="text-[1.15rem] font-extrabold leading-snug mb-1.5"
          style={{ color: ROXO }}
        >
          AÚN PUEDES LLEVARTE EL PLAN 30 DÍAS CON 40% OFF
        </h1>
        <p className="text-[0.88rem] leading-snug" style={{ color: CINZA_TEXTO }}>
          Última oportunidad de llevarte el método completo de la Tía Thay para estimular el habla de tu hijo — con <strong style={{ color: VERMELHO }}>40% de descuento</strong>.
        </p>
      </section>

      {/* 3) CARD "O QUE INCLUI" */}
      <section className="px-4 pb-2">
        <div
          className="max-w-[460px] mx-auto rounded-xl px-4 py-3"
          style={{ background: LILAS }}
        >
          <h2 className="text-[0.95rem] font-extrabold mb-2 text-center" style={{ color: ROXO }}>
            ✅ Te llevas el método completo:
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
              Valor real $98 USD → Hoy por solo $24,90 USD
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
          <p className="text-[0.9rem] line-through font-semibold leading-tight" style={{ color: VERMELHO }}>
            De $97 USD
          </p>
          <p className="text-[0.78rem] leading-tight mt-1" style={{ color: CINZA_TEXTO }}>
            Por solo
          </p>
          <p
            className="font-black leading-none mt-0.5"
            style={{ color: "#43A047", fontSize: "clamp(2rem, 8.5vw, 2.8rem)" }}
          >
            $24,90 USD
          </p>
          <p className="text-[0.85rem] font-extrabold mt-1.5 leading-tight" style={{ color: "#43A047" }}>
            💚 AHORRO DE $72 USD — solo en esta pantalla 💚
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
            ⚠️ Si sales de esta página, esta oferta NO estará disponible después
          </p>
        </div>
      </section>

      {/* 6) CTA + 8) LINK SAÍDA — Kiwify One-Click */}
      <div
        id="kiwify-upsell-L7BYGXv"
        data-upsell-url=""
        data-downsell-url=""
      >
        <section className="px-4 pb-1.5">
          <button
            id="kiwify-upsell-trigger-L7BYGXv"
            onClick={handleCta}
            className="downsell-cta block w-[92%] max-w-[420px] mx-auto rounded-full uppercase font-extrabold text-white text-center py-3.5 px-4 text-[0.92rem] tracking-wide transition-all border-0 cursor-pointer"
            style={{
              background: "#43A047",
              boxShadow: `0 8px 22px -8px #43A047cc`,
            }}
          >
            QUIERO EL PLAN CON 40% OFF ➔
          </button>
        </section>

        {/* 7) MICROCOPY */}
        <section className="px-4 pb-1.5 pt-1 text-center">
          <p className="text-[0.72rem] leading-snug" style={{ color: CINZA_MEDIO }}>
            ✅ Acceso de por vida • ✅ Garantía incondicional de 7 días
          </p>
        </section>

        {/* 7b) DISCLAIMER */}
        <section className="px-4 pb-2 text-center">
          <p className="text-[0.65rem] leading-snug" style={{ color: "#999999" }}>
            *Esta oferta especial no incluye los bonos del plan premium (Guía de Situaciones Difíciles, Checklist de Hitos y App Parlanchín).
          </p>
        </section>

        {/* 8) LINK SAÍDA */}
        <section className="px-4 pb-4 text-center">
          <div
            id="kiwify-upsell-cancel-trigger-L7BYGXv"
            className="inline-block text-[0.78rem] underline underline-offset-2 cursor-pointer"
            style={{ color: "#999999" }}
          >
            No, gracias, prefiero seguir sin
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

export default DownsellEs;
