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

const ITENS_PRINCIPAIS = [
  {
    icon: "🟣",
    titulo: "Plano 30 Dias com a Tia Thay",
    valor: "R$297",
    desc: "Roteiro diário passo a passo para destravar a fala.",
  },
  {
    icon: "📒",
    titulo: "Caderno de Acompanhamento",
    valor: "R$47",
    desc: "Registre cada palavra nova durante os 30 dias.",
  },
  {
    icon: "🃏",
    titulo: "50 Cards para Imprimir",
    valor: "R$47",
    desc: "Estímulos visuais prontos pra usar todos os dias.",
  },
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

      {/* 2) HERO COMPACTO */}
      <section className="px-5 pt-5 pb-4 text-center max-w-[480px] mx-auto">
        <h1
          className="text-[1.25rem] md:text-[1.6rem] font-extrabold leading-snug mb-2"
          style={{ color: ROXO }}
        >
          Vi que você não quis o Plano completo...
        </h1>
        <p className="text-[0.95rem] leading-snug mb-3" style={{ color: CINZA_TEXTO }}>
          Eu entendo. Talvez R$197 não seja o momento — e tudo bem.
        </p>
        <p className="text-[0.95rem] leading-snug font-medium" style={{ color: CINZA_TEXTO }}>
          Mas eu separei um <strong style={{ color: ROXO }}>KIT INICIAL</strong> especialmente pra você que quer começar a destravar a fala do seu filho <strong>HOJE</strong> — com <strong style={{ color: VERMELHO }}>50% de desconto</strong>, só nesta tela.
        </p>
      </section>

      {/* 3) CARD "O QUE VOCÊ LEVA" */}
      <section className="px-4 pb-4">
        <div
          className="max-w-[460px] mx-auto rounded-2xl px-5 py-5"
          style={{ background: LILAS }}
        >
          <h2 className="text-[1.05rem] font-extrabold mb-3 text-center" style={{ color: ROXO }}>
            ✅ O kit inicial inclui:
          </h2>

          <ul className="space-y-3 mb-3">
            {ITENS_PRINCIPAIS.map((item) => (
              <li key={item.titulo}>
                <p className="text-[0.95rem] font-bold leading-snug" style={{ color: CINZA_TEXTO }}>
                  {item.icon} {item.titulo}{" "}
                  <span className="line-through font-semibold" style={{ color: CINZA_MEDIO }}>
                    ({item.valor})
                  </span>
                </p>
                <p className="text-[0.82rem] leading-snug pl-6" style={{ color: CINZA_MEDIO }}>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>

          <div className="h-px my-3" style={{ background: "#D9C5E0" }} />

          <ul className="space-y-1.5 mb-4">
            <li className="text-[0.9rem] font-semibold" style={{ color: CINZA_TEXTO }}>
              ✅ Acesso vitalício à plataforma
            </li>
            <li className="text-[0.9rem] font-semibold" style={{ color: CINZA_TEXTO }}>
              ✅ Garantia de 7 dias
            </li>
          </ul>

          <div
            className="rounded-lg text-center px-3 py-2.5"
            style={{ background: DOURADO }}
          >
            <p className="text-white font-extrabold text-[0.92rem] leading-tight">
              Valor real: R$391 | Você leva por R$97
            </p>
          </div>
        </div>
      </section>

      {/* 4) MENÇÃO DO QUE FALTA */}
      <section className="px-5 pb-4 text-center max-w-[460px] mx-auto">
        <p className="text-[0.78rem] leading-snug" style={{ color: CINZA_MEDIO }}>
          ❌ Esta versão não inclui: Guia de Situações Difíceis, Checklist de Marcos e App Tagarelar (disponíveis apenas no plano completo).
        </p>
      </section>

      {/* 5) BOX DE PREÇO PRINCIPAL */}
      <section className="px-4 pb-3">
        <div
          className="max-w-[420px] mx-auto rounded-2xl text-center px-4 py-4 bg-white"
          style={{ border: `2px solid ${DOURADO}` }}
        >
          <p className="text-[0.85rem] line-through" style={{ color: CINZA_MEDIO }}>
            De R$ 197
          </p>
          <p className="text-[0.78rem] mt-0.5" style={{ color: CINZA_MEDIO }}>
            Por apenas
          </p>
          <p
            className="font-black leading-none my-1"
            style={{ color: VERMELHO, fontSize: "clamp(2.6rem, 11vw, 3.6rem)" }}
          >
            R$ 97,00
          </p>
          <p className="text-[0.95rem] font-bold" style={{ color: ROXO }}>
            ou 12x de R$ 9,99
          </p>
          <p className="text-[0.85rem] font-extrabold mt-1.5" style={{ color: DOURADO_HOVER }}>
            50% OFF — só nesta tela
          </p>
        </div>
      </section>

      {/* 6) URGÊNCIA */}
      <section className="px-4 pb-3">
        <div
          className="max-w-[420px] mx-auto rounded-lg text-center px-3 py-2.5"
          style={{ background: ROXO_ESCURO }}
        >
          <p className="text-white font-bold text-[0.88rem] leading-tight">
            ⏰ Esta oferta desaparece se você sair desta página
          </p>
          <p className="text-white text-[0.75rem] leading-tight mt-1 opacity-90">
            Não estará disponível por este preço depois
          </p>
        </div>
      </section>

      {/* 7) CTA */}
      <section className="px-4 pb-2 pt-1">
        <a
          href={CHECKOUT_LINK}
          onClick={handleCta}
          className="downsell-cta block w-[90%] max-w-[420px] mx-auto rounded-full uppercase font-extrabold text-white text-center py-4 px-4 text-[0.95rem] tracking-wide transition-all"
          style={{
            background: DOURADO,
            boxShadow: `0 8px 22px -8px ${DOURADO}cc`,
          }}
        >
          SIM, QUERO COMEÇAR POR R$ 97 ➔
        </a>
      </section>

      {/* 8) LINK SAÍDA */}
      <section className="px-4 pb-5 pt-2 text-center">
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
          0%, 100% { transform: scale(1); box-shadow: 0 8px 22px -8px ${DOURADO}cc; }
          50% { transform: scale(1.03); box-shadow: 0 12px 28px -6px ${DOURADO}e6; }
        }
        .downsell-cta { animation: downsellPulse 2.2s ease-in-out infinite; }
        .downsell-cta:hover { background: ${DOURADO_HOVER} !important; animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default V6;
