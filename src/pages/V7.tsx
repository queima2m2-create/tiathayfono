import { useEffect, useState } from "react";

const ROXO = "#6B2D8B";
const DOURADO = "#b58a45";
const VERDE = "#2E7D32";
const CINZA_CLARO = "#F8F8F8";

const problemas = [
  {
    icon: "🚫",
    titulo: "Mãe sem direção",
    texto:
      "Ela faz os 30 dias, vê resultado, mas depois não sabe como continuar. Resultado: regressão em 60-90 dias.",
  },
  {
    icon: "🚫",
    titulo: "Material genérico",
    texto:
      "Procura outros métodos online sem saber o que se aplica AO PERFIL do filho dela.",
  },
  {
    icon: "🚫",
    titulo: "Procura fono",
    texto:
      "Paga R$300-500 por mês pra continuar o trabalho que pode fazer em casa.",
  },
];

const pilares = [
  {
    icon: "🎯",
    titulo: "PERSONALIZADO",
    texto:
      "No início, você responde um questionário sobre o desenvolvimento do seu filho. O sistema classifica em 1 dos 8 perfis e libera material específico pra cada estágio.",
  },
  {
    icon: "📅",
    titulo: "EVOLUTIVO",
    texto:
      "A cada mês, novo material liberado. A cada 3 meses, reavaliação pra ajustar o plano conforme seu filho avança.",
  },
  {
    icon: "🛡️",
    titulo: "ESTRUTURADO",
    texto:
      "Sequência de 12 meses pensada por fonoaudióloga. Material novo toda semana. Você nunca fica sem o que fazer.",
  },
];

const inclui = [
  "12 meses de material personalizado pelo perfil do seu filho",
  "Questionário inicial pra identificar o estágio exato",
  "Reavaliação a cada 3 meses pra ajustar o plano",
  "Material novo TODO mês na área de membros",
  "Atividades práticas adaptadas à idade",
  "PDFs imprimíveis exclusivos",
  "Áudios guia da Tia Thay",
  "Acesso vitalício ao material já liberado",
  "Comunidade VIP incluída (suporte de outras mães)",
  "Disclaimer profissional",
];

const depoimentos = [
  {
    texto:
      "Estava perdida quando os 30 dias acabaram. O Despertar me deu direção clara pra continuar.",
    autor: "Mariana S., mãe do Pedro",
  },
  {
    texto:
      "Adorei ter material novo toda semana. Não fico sem saber o que fazer.",
    autor: "Camila R., mãe da Sofia",
  },
  {
    texto:
      "É como ter a Tia Thay me acompanhando o ano inteiro. Vale cada centavo.",
    autor: "Ana P., mãe do Lucas",
  },
];

const faqs = [
  {
    q: "Quando o material começa a ser liberado?",
    a: "Imediatamente após o Plano 30 Dias terminar (no dia 31 da sua jornada). O primeiro mês do Programa Despertar é liberado automaticamente.",
  },
  {
    q: "É realmente personalizado?",
    a: "Sim. Você preenche um questionário inicial de 5 minutos. O sistema classifica seu filho em um dos 8 perfis (idade × nível de fala). Você recebe material específico pra esse perfil. A cada 3 meses, há reavaliação pra ajustar.",
  },
  {
    q: "Posso cancelar?",
    a: "Sim, dentro de 7 dias após a compra com reembolso 100%.",
  },
  {
    q: "O Plano 30 Dias é suficiente OU preciso desse?",
    a: "O Plano 30 Dias dá os FUNDAMENTOS. O Programa Despertar é a continuidade pra que seu filho mantenha a evolução pelos 12 meses seguintes. Sem ele, muitas mães param e o filho regride.",
  },
  {
    q: "Tem fonoaudióloga me acompanhando 1:1?",
    a: "Não. O Programa é educacional/estimulação, não substitui fonoaudiologia individual. É material guia pra você aplicar em casa, baseado no perfil do seu filho.",
  },
  {
    q: "Como recebo o material?",
    a: "Via área de membros da Kiwify. Login com email da compra.",
  },
];

const V7 = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Carrega script Kiwify Upsell
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
        className="w-full text-white text-center py-4 px-4"
        style={{ background: ROXO }}
      >
        <h2
          className="text-2xl md:text-3xl font-extrabold tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tia Thay
        </h2>
      </header>

      {/* HERO */}
      <section
        className="px-5 py-10 md:py-16"
        style={{ background: CINZA_CLARO }}
      >
        <div className="max-w-[820px] mx-auto text-center">
          <h1
            className="text-2xl md:text-4xl font-extrabold leading-tight mb-5"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            🎉 Espera, mãe! Tenho mais uma surpresa pra você...
          </h1>
          <p className="text-lg md:text-xl font-semibold text-neutral-700 mb-6 leading-snug">
            Você acabou de garantir seus 30 dias com a Tia Thay.
            <br />
            Mas e depois desses 30 dias?
          </p>
          <p className="text-base md:text-lg text-neutral-600 mb-4 leading-relaxed">
            A maior parte das mães desiste exatamente quando o filho começa a
            evoluir. Não pelo desinteresse — pela falta de continuidade. Pelo
            material que acaba. Pelo método que para.
          </p>
          <p
            className="text-base md:text-lg font-semibold leading-relaxed"
            style={{ color: ROXO }}
          >
            Seu filho merece os próximos 11 meses TÃO BEM ESTRUTURADOS quanto
            os primeiros 30 dias.
          </p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-5 py-12 md:py-16 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-center mb-10"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            O que acontece após o Plano de 30 Dias?
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {problemas.map((p, i) => (
              <div
                key={i}
                className="bg-neutral-50 rounded-2xl p-6 shadow-sm border border-neutral-100"
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-neutral-800">
                  {p.titulo}
                </h3>
                <p className="text-neutral-600 text-[0.95rem] leading-relaxed">
                  {p.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section
        className="px-5 py-12 md:py-16"
        style={{ background: CINZA_CLARO }}
      >
        <div className="max-w-[1000px] mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Conheça o Programa Despertar — 12 Meses de Continuidade
          </h2>
          <p className="text-base md:text-lg text-neutral-600 mb-10 max-w-[720px] mx-auto leading-relaxed">
            Material PERSONALIZADO mês a mês baseado no desenvolvimento do seu
            filho
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {pilares.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-md border border-neutral-100"
              >
                <div className="text-5xl mb-4">{p.icon}</div>
                <h3
                  className="font-extrabold text-lg mb-3 tracking-wide"
                  style={{ color: ROXO }}
                >
                  {p.titulo}
                </h3>
                <p className="text-neutral-600 text-[0.95rem] leading-relaxed">
                  {p.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUI */}
      <section className="px-5 py-12 md:py-16 bg-white">
        <div className="max-w-[760px] mx-auto">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-center mb-10"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Tudo o que está incluso
          </h2>
          <ul className="space-y-3">
            {inclui.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-neutral-50 rounded-xl px-5 py-3 border border-neutral-100"
              >
                <span
                  className="text-xl shrink-0 font-bold"
                  style={{ color: VERDE }}
                >
                  ✅
                </span>
                <span className="text-neutral-700 text-[0.98rem] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* POR QUE É ATRATIVO */}
      <section
        className="px-5 py-12 md:py-16"
        style={{ background: CINZA_CLARO }}
      >
        <div className="max-w-[860px] mx-auto">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-center mb-10"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Por que vale cada centavo
          </h2>

          <div className="space-y-5">
            {[
              {
                t: "É como ter a Tia Thay te orientando o ano inteiro",
                d: "Material atualizado mensalmente. Você nunca repete atividade.",
              },
              {
                t: "Funciona em 12 meses ou seu dinheiro de volta",
                d: "Garantia de 7 dias pra cancelar.",
              },
              {
                t: "Por menos do que UMA consulta com fono",
                d: "R$497 anual = R$41/mês = preço de uma consulta inicial.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border-l-4"
                style={{ borderColor: DOURADO }}
              >
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: ROXO }}
                >
                  {i + 1}. {item.t}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAMOS FAZER UMA CONTA */}
      <section className="px-5 py-12 md:py-16 bg-white">
        <div className="max-w-[860px] mx-auto">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-center mb-3"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Vamos fazer uma conta?
          </h2>
          <p className="text-center text-neutral-600 mb-10 text-base md:text-lg">
            O que você economiza ao escolher o Programa Despertar
          </p>

          <div className="space-y-4">
            {[
              {
                t: "Se você fizesse fonoaudiologia 1x por semana",
                d: "R$ 300 × 4 sessões/mês × 12 meses",
                total: "R$ 14.400",
              },
              {
                t: "Se você comprasse cada material separado",
                d: "Material mensal (R$ 80) × 12 meses",
                total: "R$ 960",
              },
              {
                t: "Se você fizesse 1 consulta inicial + reavaliações",
                d: "R$ 300 inicial + R$ 200 × 4 reavaliações",
                total: "R$ 1.100",
              },
              {
                t: "Se você comprasse curso online concorrente",
                d: "Programas similares custam em média",
                total: "R$ 1.497",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-neutral-50 rounded-2xl p-5 md:p-6 border border-neutral-200 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-800 mb-1">{item.t}</h3>
                  <p className="text-neutral-500 text-sm">{item.d}</p>
                </div>
                <div
                  className="text-right md:text-center md:ml-4 px-4 py-2 rounded-xl font-extrabold text-xl line-through"
                  style={{ color: "#D32F2F", background: "#FFEBEE" }}
                >
                  {item.total}
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center mt-8 text-lg md:text-xl font-bold"
            style={{ color: ROXO }}
          >
            Programa Despertar: <span style={{ color: VERDE }}>R$ 497</span> pelos 12 meses inteiros
          </p>
        </div>
      </section>

      {/* CAIXA DE PREÇO + BOTÃO */}
      <section className="px-5 py-12 md:py-16 bg-white">
        <div className="max-w-[640px] mx-auto">
          <div
            className="rounded-3xl p-8 md:p-10 text-center shadow-xl border-2"
            style={{ borderColor: ROXO, background: "#F3E8F8" }}
          >
            <p className="text-neutral-600 text-sm md:text-base mb-2">
              O Programa Despertar — 12 meses completo
            </p>
            <p
              className="font-extrabold leading-none mb-1"
              style={{
                color: VERDE,
                fontSize: "clamp(3rem, 11vw, 5.5rem)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              R$ 497
            </p>
            <p className="text-neutral-500 text-sm md:text-base mb-1">
              à vista
            </p>
            <p className="text-neutral-700 font-semibold text-base md:text-lg mb-6">
              ou 12x de R$ 49,80 sem juros
            </p>

            <div className="border-t border-neutral-300/60 my-6" />

            {/* MATEMÁTICA DIÁRIA */}
            <div className="mb-6">
              <p className="font-bold text-lg mb-3" style={{ color: ROXO }}>
                🧮 Vamos quebrar isso?
              </p>
              <div className="space-y-1 text-neutral-700 text-base md:text-lg font-semibold mb-5">
                <p>R$ 497 ÷ 12 meses = <span style={{ color: VERDE }}>R$ 41/mês</span></p>
                <p>R$ 497 ÷ 365 dias = <span style={{ color: VERDE }}>R$ 1,36/dia</span></p>
              </div>
              <div className="space-y-2 text-left max-w-[420px] mx-auto">
                <p className="bg-white rounded-xl px-4 py-3 text-neutral-700 text-[0.95rem] shadow-sm">
                  ☕ Menos que um café por dia
                </p>
                <p className="bg-white rounded-xl px-4 py-3 text-neutral-700 text-[0.95rem] shadow-sm">
                  🍕 Menos que 1 pizza por mês
                </p>
                <p className="bg-white rounded-xl px-4 py-3 text-neutral-700 text-[0.95rem] shadow-sm font-semibold">
                  👶 Pelo desenvolvimento INTEGRAL da fala do seu filho
                </p>
              </div>
            </div>

            {/* URGÊNCIA */}
            <div
              className="rounded-xl p-4 mb-5 text-left text-[0.9rem] md:text-[0.95rem] font-semibold leading-relaxed"
              style={{ background: "#FFF8DC", border: "2px solid #F4C430", color: "#7A5A00" }}
            >
              ⚠️ <strong>ATENÇÃO:</strong> este preço é exclusivo pra quem JÁ comprou o Plano 30 Dias. Após sair desta página, não estará disponível.
            </div>

            {/* BOTÃO KIWIFY */}
            <div
              style={{ textAlign: "center" }}
              id="kiwify-upsell-PROGRAMA_ANUAL_PLACEHOLDER"
              data-upsell-url=""
              data-downsell-url=""
            >
              <button
                id="kiwify-upsell-trigger-PROGRAMA_ANUAL_PLACEHOLDER"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 md:px-8 rounded-xl text-base md:text-xl shadow-lg cursor-pointer transition-all w-full"
              >
                QUERO GARANTIR OS PRÓXIMOS 12 MESES POR R$ 497 ➔
              </button>
              <div
                id="kiwify-upsell-cancel-trigger-PROGRAMA_ANUAL_PLACEHOLDER"
                className="mt-4 text-gray-600 text-sm cursor-pointer hover:underline"
              >
                Não, prefiro continuar sem o acompanhamento anual
              </div>
            </div>

            {/* GARANTIAS */}
            <div className="mt-7 pt-6 border-t border-neutral-300/60 space-y-2 text-[0.92rem] text-neutral-700">
              <p>🛡️ Garantia de 7 dias - Reembolso 100%</p>
              <p>🔒 Pagamento seguro</p>
              <p>✅ Acesso vitalício ao material liberado</p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE TÃO BARATO */}
      <section
        className="px-5 py-12 md:py-16"
        style={{ background: CINZA_CLARO }}
      >
        <div className="max-w-[960px] mx-auto">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-center mb-4"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Por que R$ 497 e não R$ 3.000?
          </h2>
          <p className="text-center text-neutral-600 mb-10 max-w-[720px] mx-auto leading-relaxed">
            A Tia Thay criou o Programa Despertar com uma missão clara: levar técnicas profissionais pra TODA mãe que precisa, sem custar uma fortuna.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                t: "É educacional, não clínico",
                d: "Não é fonoaudiologia 1:1, é estimulação direcionada que mãe faz em casa. Custo de produção é menor.",
              },
              {
                t: "Material digital escala",
                d: "Uma vez produzido, atende milhares de mães. Você se beneficia do baixo custo de distribuição.",
              },
              {
                t: "A missão é DEMOCRATIZAR",
                d: "A Tia Thay quer que TODA mãe tenha acesso. Não só quem pode pagar R$3.000+ em programas premium.",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md border border-neutral-100"
              >
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-extrabold mb-2" style={{ color: ROXO }}>
                  RAZÃO {i + 1} — {r.t}
                </h3>
                <p className="text-neutral-600 text-[0.95rem] leading-relaxed">
                  {r.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-5 py-12 md:py-16"
        style={{ background: CINZA_CLARO }}
      >
        <div className="max-w-[860px] mx-auto">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-center mb-10"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Mães que já estão no Despertar
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md border border-neutral-100"
              >
                <div className="text-yellow-500 mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-neutral-700 italic mb-4 leading-relaxed">
                  “{d.texto}”
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: ROXO }}
                >
                  — {d.autor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-12 md:py-16 bg-white">
        <div className="max-w-[760px] mx-auto">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-center mb-10"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Dúvidas frequentes
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-neutral-800"
                >
                  <span>{f.q}</span>
                  <span
                    className="text-2xl shrink-0 font-bold"
                    style={{ color: DOURADO }}
                  >
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-neutral-600 leading-relaxed text-[0.95rem]">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-5 py-8 text-center text-white text-sm"
        style={{ background: ROXO }}
      >
        <p className="mb-3 font-semibold">
          © 2025 Tia Thay - Todos os direitos reservados
        </p>
        <p className="max-w-[720px] mx-auto text-[0.8rem] text-white/80 leading-relaxed">
          Programa Despertar é uma ferramenta de estimulação educacional
          baseada em técnicas fonoaudiológicas. Não substitui acompanhamento
          profissional individual de fonoaudióloga. Em casos de atraso
          significativo, recomendamos avaliação presencial.
        </p>
      </footer>
    </div>
  );
};

export default V7;
