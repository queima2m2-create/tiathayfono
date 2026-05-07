import { useEffect, useState } from "react";

const ROXO = "#6B2D8B";
const DOURADO = "#b58a45";
const VERDE = "#2E7D32";
const CINZA_CLARO = "#F8F8F8";

const bullets = [
  "Material novo TODO MÊS pelos próximos 12 meses",
  "Personalizado pelo perfil do seu filho (questionário inicial)",
  "Reavaliação a cada 3 meses pra ajustar conforme avança",
  "Atividades práticas, áudios e PDFs imprimíveis",
  "Comunidade VIP incluída (suporte de outras mães)",
];

const comparacoes = [
  { t: "Fono semanal por 1 ano", v: "R$ 14.400" },
  { t: "Material avulso por 1 ano", v: "R$ 960" },
  { t: "Curso similar", v: "R$ 1.497" },
];

const faqs = [
  {
    q: "Quando começa o material?",
    a: "Logo após seu Plano 30 Dias terminar (dia 31). O primeiro mês é liberado automaticamente.",
  },
  {
    q: "Posso cancelar?",
    a: "Sim, garantia de 7 dias com reembolso 100%.",
  },
  {
    q: "É realmente personalizado?",
    a: "Sim. Você responde um questionário inicial. O sistema classifica em 1 dos 8 perfis e libera material específico pra ele.",
  },
];

const CtaButton = ({ suffix, label }: { suffix: string; label: string }) => (
  <div
    style={{ textAlign: "center" }}
    id={`kiwify-upsell-PROGRAMA_ANUAL_PLACEHOLDER${suffix}`}
    data-upsell-url=""
    data-downsell-url=""
  >
    <button
      id={`kiwify-upsell-trigger-PROGRAMA_ANUAL_PLACEHOLDER${suffix}`}
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-5 md:px-8 rounded-xl text-base md:text-lg shadow-lg cursor-pointer transition-all w-full"
    >
      {label} ➔
    </button>
    <div
      id={`kiwify-upsell-cancel-trigger-PROGRAMA_ANUAL_PLACEHOLDER${suffix}`}
      className="mt-3 text-gray-600 text-sm cursor-pointer hover:underline"
    >
      Não, prefiro continuar sem o acompanhamento anual
    </div>
  </div>
);

const V7 = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const SRC = "https://snippets.kiwify.com/upsell/upsell.min.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-neutral-800"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* HEADER */}
      <header
        className="w-full text-white text-center py-3 px-4"
        style={{ background: ROXO }}
      >
        <h2
          className="text-xl md:text-2xl font-extrabold tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tia Thay
        </h2>
      </header>

      {/* HERO COMPACTO */}
      <section className="px-5 pt-6 pb-3 text-center">
        <h1
          className="text-xl md:text-3xl font-extrabold leading-tight mb-2"
          style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
        >
          🎉 Espera, mãe! Só mais uma coisa...
        </h1>
        <p className="text-sm md:text-base text-neutral-700 max-w-[600px] mx-auto">
          Você acabou de garantir 30 dias com a Tia Thay. Continue por mais 11 meses.
        </p>
      </section>

      {/* BOX PREÇO + CTA #1 */}
      <section className="px-4 pt-3 pb-8">
        <div className="max-w-[600px] mx-auto">
          <div
            className="rounded-3xl p-5 md:p-8 text-center shadow-xl border-2"
            style={{ borderColor: ROXO, background: "#F3E8F8" }}
          >
            <p className="text-neutral-700 text-sm md:text-base font-semibold mb-2">
              Programa Despertar — 12 Meses Completos
            </p>
            <p
              className="font-extrabold leading-none mb-1"
              style={{
                color: VERDE,
                fontSize: "clamp(2.5rem, 11vw, 4rem)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              12x R$ 49,80
            </p>
            <p
              className="font-bold mb-1"
              style={{ color: VERDE, fontSize: "clamp(1rem, 3.5vw, 1.25rem)" }}
            >
              sem juros
            </p>
            <p className="text-neutral-500 text-sm mb-5">ou R$ 497 à vista</p>

            <CtaButton
              suffix=""
              label="QUERO GARANTIR OS PRÓXIMOS 12 MESES POR R$ 497"
            />

            <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs md:text-sm text-neutral-700">
              <span>🛡️ Garantia 7 dias</span>
              <span>🔒 Pagamento seguro</span>
              <span>✅ Acesso vitalício</span>
            </div>
          </div>
        </div>
      </section>

      {/* BULLETS */}
      <section
        className="px-5 py-8"
        style={{ background: CINZA_CLARO }}
      >
        <div className="max-w-[640px] mx-auto">
          <h2
            className="text-xl md:text-2xl font-extrabold text-center mb-5"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            O que você ganha:
          </h2>
          <ul className="space-y-2">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-neutral-700 text-[0.95rem] md:text-base leading-snug"
              >
                <span className="shrink-0" style={{ color: VERDE }}>✅</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="px-5 py-8 bg-white">
        <div className="max-w-[640px] mx-auto">
          <h2
            className="text-xl md:text-2xl font-extrabold text-center mb-5"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Vamos comparar?
          </h2>
          <div className="space-y-2">
            {comparacoes.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5"
              >
                <span className="text-neutral-700 text-sm md:text-base">{c.t}</span>
                <span
                  className="font-bold text-sm md:text-base line-through"
                  style={{ color: "#D32F2F" }}
                >
                  {c.v}
                </span>
              </div>
            ))}
            <div
              className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 border-2"
              style={{ borderColor: VERDE, background: "#E8F5E9" }}
            >
              <span className="font-bold text-neutral-800 text-sm md:text-base">
                Programa Despertar
              </span>
              <span className="font-extrabold text-base md:text-lg" style={{ color: VERDE }}>
                R$ 497 ← VOCÊ
              </span>
            </div>
          </div>
          <p className="text-center mt-5 text-base md:text-lg font-semibold" style={{ color: ROXO }}>
            R$ 1,36 por dia. Menos que um café. ☕
          </p>
        </div>
      </section>

      {/* CTA #2 */}
      <section className="px-4 py-6" style={{ background: CINZA_CLARO }}>
        <div className="max-w-[600px] mx-auto">
          <CtaButton suffix="-2" label="QUERO GARANTIR POR R$ 497" />
        </div>
      </section>

      {/* FAQ CURTO */}
      <section className="px-5 py-8 bg-white">
        <div className="max-w-[640px] mx-auto">
          <h2
            className="text-xl md:text-2xl font-extrabold text-center mb-5"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Dúvidas rápidas
          </h2>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 font-semibold text-neutral-800 text-[0.95rem]"
                >
                  <span>{f.q}</span>
                  <span className="shrink-0 font-bold" style={{ color: DOURADO }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-neutral-600 text-[0.92rem] leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA #3 + GARANTIA */}
      <section className="px-4 py-8" style={{ background: CINZA_CLARO }}>
        <div className="max-w-[600px] mx-auto text-center">
          <CtaButton suffix="-3" label="QUERO GARANTIR POR R$ 497" />
          <p className="mt-5 text-sm md:text-base text-neutral-700 font-semibold">
            🛡️ Garantia incondicional de 7 dias
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-8 bg-neutral-900 text-neutral-400 text-xs md:text-sm">
        <div className="max-w-[760px] mx-auto space-y-3 leading-relaxed">
          <p>
            <strong className="text-neutral-200">Aviso importante:</strong> O Programa
            Despertar é um material educacional de estimulação da fala e linguagem,
            criado pela fonoaudióloga Dra. Thaynara para uso por pais e responsáveis em
            casa. Não substitui avaliação ou tratamento fonoaudiológico individual.
            Resultados variam de criança pra criança.
          </p>
          <p className="text-center pt-3 border-t border-neutral-800">
            © Tia Thay — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default V7;
