import { useEffect, useState } from "react";

const ROXO = "#6B2D8B";
const DOURADO = "#b58a45";
const VERDE = "#2E7D32";
const CINZA_CLARO = "#F8F8F8";

const pilares = [
  {
    icon: "🎯",
    titulo: "PERSONALIZADO",
    texto:
      "Questionário inicial classifica seu filho em 1 dos 8 perfis. Material específico pra cada estágio.",
  },
  {
    icon: "📅",
    titulo: "EVOLUTIVO",
    texto:
      "A cada mês, novo material. A cada 3 meses, reavaliação pra ajustar.",
  },
  {
    icon: "🛡️",
    titulo: "ESTRUTURADO",
    texto:
      "12 meses pensados por fonoaudióloga. Material novo toda semana. Você nunca fica sem o que fazer.",
  },
];

const inclui = [
  "12 meses de material personalizado pelo perfil do seu filho",
  "Questionário inicial + reavaliação a cada 3 meses",
  "Material novo TODO mês na área de membros",
  "Atividades práticas, áudios e PDFs imprimíveis",
  "Comunidade VIP incluída (suporte de outras mães)",
  "Acesso vitalício ao material já liberado",
  "Garantia de 7 dias",
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
    a: "Sim. Questionário inicial classifica em 1 dos 8 perfis. Material específico libera baseado no perfil. Reavaliação a cada 3 meses.",
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

const PriceBox = ({
  suffix,
  ctaLabel,
  compact = false,
}: {
  suffix: string;
  ctaLabel: string;
  compact?: boolean;
}) => (
  <div
    className={`rounded-3xl text-center shadow-xl border-2 ${
      compact ? "p-5 md:p-7" : "p-6 md:p-9"
    }`}
    style={{ borderColor: ROXO, background: "#F3E8F8" }}
  >
    <p className="text-neutral-700 text-sm md:text-base font-semibold mb-2">
      Programa Despertar — 12 meses completos
    </p>
    <p
      className="font-extrabold leading-none mb-1"
      style={{
        color: VERDE,
        fontSize: compact
          ? "clamp(2.2rem, 9vw, 3.2rem)"
          : "clamp(2.5rem, 11vw, 4rem)",
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

    {!compact && (
      <>
        <div className="border-t border-neutral-300/60 my-5" />
        <div className="mb-5 text-left max-w-[360px] mx-auto">
          <p className="font-bold text-base mb-3 text-center" style={{ color: ROXO }}>
            🧮 Vamos quebrar?
          </p>
          <ul className="space-y-1.5 text-neutral-700 text-[0.95rem]">
            <li>• R$ 49,80 por mês</li>
            <li>• R$ 1,66 por dia</li>
            <li>• Menos que um café diário ☕</li>
          </ul>
        </div>
        <div
          className="rounded-xl p-3 mb-5 text-left text-[0.85rem] md:text-[0.9rem] font-semibold leading-relaxed"
          style={{
            background: "#FFF8DC",
            border: "2px solid #F4C430",
            color: "#7A5A00",
          }}
        >
          ⚠️ <strong>Atenção:</strong> este preço é EXCLUSIVO pra quem JÁ comprou o Plano 30 Dias. Não estará disponível depois.
        </div>
      </>
    )}

    <CtaButton suffix={suffix} label={ctaLabel} />

    {!compact && (
      <div className="mt-5 pt-4 border-t border-neutral-300/60 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs md:text-sm text-neutral-700">
        <span>🛡️ Garantia 7 dias</span>
        <span>🔒 Pagamento seguro</span>
        <span>✅ Acesso vitalício</span>
      </div>
    )}
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

      {/* HERO */}
      <section className="px-5 py-8 md:py-12 text-center" style={{ background: CINZA_CLARO }}>
        <div className="max-w-[760px] mx-auto">
          <h1
            className="text-2xl md:text-4xl font-extrabold leading-tight mb-4"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            🎉 Espera, mãe! Tenho mais uma surpresa pra você...
          </h1>
          <p className="text-base md:text-lg font-semibold text-neutral-700 mb-4 leading-snug">
            Você acabou de garantir seus 30 dias com a Tia Thay.
            <br />
            Mas e depois desses 30 dias?
          </p>
          <p className="text-[0.95rem] md:text-base text-neutral-600 leading-relaxed mb-3">
            A maior parte das mães desiste exatamente quando o filho começa a evoluir. Não pelo desinteresse — pela falta de continuidade. Pelo material que acaba.
          </p>
          <p
            className="text-[0.95rem] md:text-base font-semibold leading-relaxed"
            style={{ color: ROXO }}
          >
            Seu filho merece os próximos 11 meses TÃO BEM ESTRUTURADOS quanto os primeiros 30 dias.
          </p>
        </div>
      </section>

      {/* APRESENTAÇÃO + 3 PILARES */}
      <section className="px-5 py-10 md:py-14 bg-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-2"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Programa Despertar — 12 meses de continuidade
          </h2>
          <p className="text-base text-neutral-600 mb-8 max-w-[680px] mx-auto leading-relaxed">
            Material PERSONALIZADO mês a mês baseado no desenvolvimento do seu filho
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {pilares.map((p, i) => (
              <div
                key={i}
                className="bg-neutral-50 rounded-2xl p-5 shadow-sm border border-neutral-100"
              >
                <div className="text-4xl mb-2">{p.icon}</div>
                <h3 className="font-extrabold text-base mb-2 tracking-wide" style={{ color: ROXO }}>
                  {p.titulo}
                </h3>
                <p className="text-neutral-600 text-[0.92rem] leading-relaxed">
                  {p.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUI */}
      <section className="px-5 py-10 md:py-12" style={{ background: CINZA_CLARO }}>
        <div className="max-w-[640px] mx-auto">
          <h2
            className="text-xl md:text-2xl font-extrabold text-center mb-6"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Tudo o que está incluso:
          </h2>
          <ul className="space-y-2.5">
            {inclui.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-neutral-700 text-[0.95rem] md:text-base leading-snug"
              >
                <span className="shrink-0 mt-0.5" style={{ color: VERDE }}>✅</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="px-5 py-10 md:py-12 bg-white">
        <div className="max-w-[640px] mx-auto">
          <h2
            className="text-xl md:text-2xl font-extrabold text-center mb-6"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Por que vale cada centavo?
          </h2>
          <div className="space-y-2">
            {comparacoes.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-2.5"
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
                R$ 497 ✅
              </span>
            </div>
          </div>
          <p className="text-center mt-5 text-[0.95rem] md:text-base text-neutral-700 leading-relaxed">
            Por <strong style={{ color: ROXO }}>R$ 1,36 por dia</strong>, seu filho tem acompanhamento estruturado o ano inteiro.
      {/* CAIXA PREÇO + BOTÃO ÚNICO */}
      <section className="px-4 py-10 md:py-14" style={{ background: CINZA_CLARO }}>
        <div className="max-w-[600px] mx-auto">
          <PriceBox
            suffix=""
            ctaLabel="QUERO GARANTIR OS PRÓXIMOS 12 MESES POR R$ 497"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-10 md:py-12 bg-white">
        <div className="max-w-[640px] mx-auto">
          <h2
            className="text-xl md:text-2xl font-extrabold text-center mb-6"
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

      {/* CAIXA PREÇO + BOTÃO #2 (final) */}
      <section className="px-4 py-10 md:py-14" style={{ background: CINZA_CLARO }}>
        <div className="max-w-[560px] mx-auto">
          <PriceBox suffix="-2" ctaLabel="QUERO GARANTIR POR R$ 497" compact />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-8 bg-neutral-900 text-neutral-400 text-xs md:text-sm">
        <div className="max-w-[760px] mx-auto space-y-3 leading-relaxed">
          <p>
            <strong className="text-neutral-200">Disclaimer:</strong> Programa Despertar é uma ferramenta de estimulação educacional baseada em técnicas fonoaudiológicas. Não substitui acompanhamento profissional individual. Em casos de atraso significativo, recomendamos avaliação presencial.
          </p>
          <p className="text-center pt-3 border-t border-neutral-800">
            © 2025 Tia Thay — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default V7;
