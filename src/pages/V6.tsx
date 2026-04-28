import { useEffect } from "react";
import { fbEvents } from "@/lib/fbConversions";

// Paleta V4
const ROXO = "#6B2D8B";
const ROXO_ESCURO = "#5A1F75";
const LILAS = "#F3E8F8";
const CINZA_CLARO = "#F8F8F8";
const CINZA_MEDIO = "#7A6A6E";
const CINZA_TEXTO = "#3a2f33";
const DOURADO = "#D4A047";
const DOURADO_HOVER = "#B8862F";
const VERMELHO = "#C62828";

const CHECKOUT_LINK = "https://pay.kiwify.com/6tBcvSl";
const SAIDA_LINK = "/v3";

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="10" cy="10" r="10" fill={ROXO} />
    <path d="M5.5 10.5l3 3 6-6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const V6 = () => {
  useEffect(() => {
    fbEvents.pageView();
  }, []);

  const handleCta = () => {
    fbEvents.initiateCheckout();
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif", color: CINZA_TEXTO }}
    >
      {/* 1) BARRA SUPERIOR */}
      <div
        className="sticky top-0 z-50 w-full text-white text-center text-[12px] md:text-sm py-2.5 px-4 tracking-wide font-medium"
        style={{ background: ROXO }}
      >
        ⏳ Espera, mãe! Antes de você ir...
      </div>

      {/* 2) HERO */}
      <section className="px-5 py-10 md:py-14">
        <div className="max-w-[760px] mx-auto text-center">
          <h1
            className="text-[1.6rem] md:text-[2.4rem] font-extrabold leading-[1.2] mb-5"
            style={{ color: ROXO }}
          >
            Vi que você não quis levar o Plano 30 Dias com a Tia Thay completo
          </h1>
          <p className="text-[1rem] md:text-[1.15rem] leading-relaxed mb-4" style={{ color: CINZA_TEXTO }}>
            Eu entendo. Talvez R$197 não seja o momento — e tudo bem.
          </p>
          <p
            className="text-[1.05rem] md:text-[1.2rem] leading-relaxed font-semibold max-w-[640px] mx-auto"
            style={{ color: CINZA_TEXTO }}
          >
            Mas eu separei um <span style={{ color: ROXO }}>KIT INICIAL</span> especialmente pra você que quer começar a destravar a fala do seu filho HOJE, com as ferramentas mais importantes em mãos.
          </p>
        </div>
      </section>

      {/* 3) O QUE VOCÊ VAI LEVAR */}
      <section className="px-5 pb-10">
        <div
          className="max-w-[720px] mx-auto rounded-3xl p-6 md:p-10 shadow-md"
          style={{ background: LILAS }}
        >
          <h2
            className="text-[1.4rem] md:text-[1.9rem] font-extrabold mb-6 text-center"
            style={{ color: ROXO }}
          >
            ✅ O que você vai levar:
          </h2>

          {/* Itens incluídos */}
          <div className="space-y-5">
            {/* Item 1 */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm flex gap-4 items-start">
              <div
                className="flex items-center justify-center rounded-xl text-2xl md:text-3xl flex-shrink-0"
                style={{ background: LILAS, width: 56, height: 56 }}
                aria-hidden="true"
              >
                🟣
              </div>
              <div className="flex-1">
                <h3 className="font-extrabold text-[1.05rem] md:text-[1.2rem] mb-1" style={{ color: ROXO }}>
                  Plano 30 Dias com a Tia Thay <span style={{ color: DOURADO }}>(R$297)</span>
                </h3>
                <p className="text-[0.95rem] md:text-[1rem] leading-relaxed" style={{ color: CINZA_TEXTO }}>
                  Roteiro diário passo a passo para destravar a fala do seu filho — completo, igualzinho ao da versão premium.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm flex gap-4 items-start">
              <div
                className="flex items-center justify-center rounded-xl text-2xl md:text-3xl flex-shrink-0"
                style={{ background: LILAS, width: 56, height: 56 }}
                aria-hidden="true"
              >
                📒
              </div>
              <div className="flex-1">
                <h3 className="font-extrabold text-[1.05rem] md:text-[1.2rem] mb-1" style={{ color: ROXO }}>
                  Caderno de Acompanhamento <span style={{ color: DOURADO }}>(R$47)</span>
                </h3>
                <p className="text-[0.95rem] md:text-[1rem] leading-relaxed" style={{ color: CINZA_TEXTO }}>
                  Registre cada palavra nova e veja a evolução em tempo real durante os 30 dias.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm flex gap-4 items-start">
              <div
                className="flex items-center justify-center rounded-xl text-2xl md:text-3xl flex-shrink-0"
                style={{ background: LILAS, width: 56, height: 56 }}
                aria-hidden="true"
              >
                🃏
              </div>
              <div className="flex-1">
                <h3 className="font-extrabold text-[1.05rem] md:text-[1.2rem] mb-1" style={{ color: ROXO }}>
                  50 Cards para Imprimir <span style={{ color: DOURADO }}>(R$47)</span>
                </h3>
                <p className="text-[0.95rem] md:text-[1rem] leading-relaxed" style={{ color: CINZA_TEXTO }}>
                  Estímulos visuais prontos para usar todos os dias junto com o Plano.
                </p>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="my-7 h-px" style={{ background: "rgba(107,45,139,0.2)" }} />

          {/* Lista com checks */}
          <ul className="space-y-3">
            <li className="flex gap-3 items-start text-[1rem] font-semibold" style={{ color: CINZA_TEXTO }}>
              <Check /> Acesso vitalício à plataforma
            </li>
            <li className="flex gap-3 items-start text-[1rem] font-semibold" style={{ color: CINZA_TEXTO }}>
              <Check /> Garantia incondicional de 7 dias
            </li>
          </ul>

          {/* Box destaque dourado */}
          <div
            className="mt-7 rounded-2xl bg-white text-center px-5 py-6"
            style={{ border: `2px solid ${DOURADO}` }}
          >
            <p className="text-[1rem] md:text-[1.1rem] mb-1" style={{ color: CINZA_MEDIO }}>
              Valor real do kit: <span className="line-through">R$391</span>
            </p>
            <p className="text-[1.4rem] md:text-[1.7rem] font-extrabold leading-tight" style={{ color: DOURADO }}>
              Você leva por apenas R$97
            </p>
          </div>
        </div>
      </section>

      {/* 4) O QUE NÃO ESTÁ INCLUÍDO */}
      <section className="px-5 pb-10">
        <div
          className="max-w-[680px] mx-auto rounded-2xl p-6 md:p-8"
          style={{ background: CINZA_CLARO }}
        >
          <h2 className="text-[1.1rem] md:text-[1.3rem] font-bold mb-4" style={{ color: CINZA_MEDIO }}>
            ❌ O que NÃO está incluído nesta versão:
          </h2>
          <ul className="space-y-2 text-[0.97rem] md:text-[1.05rem]" style={{ color: CINZA_MEDIO }}>
            <li>❌ Guia de Respostas para Situações Difíceis (R$57)</li>
            <li>❌ Checklist de Marcos por Faixa Etária (R$52)</li>
            <li>❌ App Tagarelar (R$97)</li>
          </ul>
          <p className="text-[0.85rem] mt-4 italic" style={{ color: "#A99FA3" }}>
            (você pode adquirir esses bônus separadamente depois, se quiser)
          </p>
        </div>
      </section>

      {/* 5) BOX DE PREÇO PRINCIPAL */}
      <section className="px-5 pb-8">
        <div
          className="max-w-[560px] mx-auto rounded-3xl text-center px-6 py-10 md:px-10"
          style={{
            background: `linear-gradient(180deg, ${LILAS} 0%, #ffffff 100%)`,
            border: `2px solid ${DOURADO}`,
            boxShadow: "0 10px 30px -12px rgba(107,45,139,0.18)",
          }}
        >
          <p className="text-[1.05rem] md:text-[1.15rem] line-through mb-3" style={{ color: CINZA_MEDIO }}>
            De R$ 197,00
          </p>
          <p className="text-[0.95rem] mb-1" style={{ color: CINZA_TEXTO }}>
            Por apenas
          </p>
          <p
            className="font-black leading-none mb-2"
            style={{ color: VERMELHO, fontSize: "clamp(3.2rem, 12vw, 5rem)" }}
          >
            R$ 97,00
          </p>
          <p className="text-[1rem] md:text-[1.15rem] font-bold mb-4" style={{ color: ROXO }}>
            ou 12x de R$ 9,99
          </p>
          <p className="text-[0.95rem] md:text-[1rem] font-bold" style={{ color: DOURADO }}>
            Desconto exclusivo desta tela
          </p>
        </div>
      </section>

      {/* 6) AVISO DE URGÊNCIA */}
      <section className="px-5 pb-8">
        <div
          className="max-w-[560px] mx-auto rounded-xl text-center px-5 py-5"
          style={{ background: ROXO_ESCURO }}
        >
          <p className="text-white font-bold text-[1rem] md:text-[1.1rem] leading-snug">
            ⏰ Esta oferta desaparece se você sair desta página
          </p>
          <p className="text-white/85 text-[0.85rem] md:text-[0.95rem] mt-2">
            Não estará disponível depois por este preço.
          </p>
        </div>
      </section>

      {/* 7) CTA */}
      <section className="px-5 pb-6">
        <div className="max-w-[560px] mx-auto text-center">
          <a
            href={CHECKOUT_LINK}
            onClick={handleCta}
            className="downsell-cta block w-[90%] md:w-full mx-auto rounded-full uppercase font-extrabold text-white text-center py-5 md:py-6 px-6 text-[1rem] md:text-[1.15rem] leading-tight tracking-wide transition-all"
            style={{
              background: DOURADO,
              boxShadow: `0 10px 25px -8px ${DOURADO}80`,
            }}
          >
            SIM, QUERO COMEÇAR POR R$ 97 ➔
          </a>
        </div>
      </section>

      {/* 8) LINK DE SAÍDA */}
      <section className="px-5 pb-12">
        <div className="text-center">
          <a
            href={SAIDA_LINK}
            className="inline-block text-[0.9rem] underline underline-offset-2"
            style={{ color: "#999999" }}
          >
            Não, prefiro continuar sem o plano
          </a>
        </div>
      </section>

      {/* 9) FOOTER */}
      <footer className="px-5 py-8 text-center text-[0.8rem]" style={{ background: "#fafafa", color: CINZA_MEDIO }}>
        <p className="font-bold mb-2" style={{ color: ROXO }}>Tia Thay · Fonoaudióloga</p>
        <p>© 2025 Thaynara Andrade · Todos os direitos reservados</p>
        <p className="mt-2 opacity-80">Termos de Uso · Política de Privacidade</p>
      </footer>

      {/* Animação pulse + hover */}
      <style>{`
        @keyframes downsellPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 25px -8px ${DOURADO}80; }
          50% { transform: scale(1.025); box-shadow: 0 14px 32px -6px ${DOURADO}b3; }
        }
        .downsell-cta { animation: downsellPulse 2.2s ease-in-out infinite; }
        .downsell-cta:hover { background: ${DOURADO_HOVER} !important; animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default V6;
