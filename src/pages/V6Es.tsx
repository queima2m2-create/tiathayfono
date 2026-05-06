import { useEffect } from "react";

// Paleta /v4
const ROXO = "#6B2D8B";
const ROXO_ESCURO = "#5A1F75";
const LILAS = "#F3E8F8";
const CINZA_MEDIO = "#7A6A6E";
const CINZA_TEXTO = "#3a2f33";
const DOURADO = "#b58a45";
const VERMELHO = "#C62828";
const VERDE = "#2E7D32";

const SAIDA_LINK = "/v5-downsell";

const ITENS_PRINCIPAIS = [
  { icon: "✅", titulo: "Plan 30 Días con actividades diarias" },
  { icon: "✅", titulo: "Cuaderno de Acompañamiento" },
  { icon: "✅", titulo: "50 Tarjetas para Imprimir" },
  { icon: "✅", titulo: "Guía de Respuestas para Situaciones Difíciles" },
  { icon: "✅", titulo: "Checklist de Hitos por Edad" },
  { icon: "✅", titulo: "App Tagarelar (acceso premium)" },
];

const DEPOIMENTOS = [
  {
    nome: "María, mamá de Lucas (3 años)",
    texto:
      "En 3 semanas mi hijo empezó a juntar palabras. Las actividades son simples y se hacen jugando.",
  },
  {
    nome: "Camila, mamá de Sofía (2 años y medio)",
    texto:
      "Pensé que iba a ser difícil, pero la Tía Thay explica todo paso a paso. ¡Hoy Sofía ya pide las cosas hablando!",
  },
  {
    nome: "Ana, mamá de Mateo (4 años)",
    texto:
      "Las tarjetas para imprimir cambiaron nuestra rutina. Mateo se volvió mucho más comunicativo.",
  },
];

const FAQS = [
  {
    q: "¿Cuánto tiempo tarda en llegar?",
    a: "El acceso es inmediato. Apenas confirmes la compra recibes todo en tu correo.",
  },
  {
    q: "¿Funciona si mi hijo todavía no habla nada?",
    a: "Sí. El método fue diseñado justamente para niños que aún no comenzaron a hablar o que hablan muy poco.",
  },
  {
    q: "¿Hasta qué edad funciona?",
    a: "El plan funciona para niños de 1 a 6 años. Las actividades se adaptan según la etapa.",
  },
  {
    q: "¿Y si no me gusta?",
    a: "Tienes 7 días de garantía incondicional. Si no te encanta, te devolvemos el 100% sin preguntas.",
  },
];

const V6Es = () => {
  useEffect(() => {
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
        value: 39.9,
        currency: "USD",
        content_name: "Plan 30 Días - Upsell LATAM",
        content_type: "product",
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif", color: CINZA_TEXTO }}
    >
      {/* BARRA SUPERIOR */}
      <div
        className="sticky top-0 z-50 w-full text-white text-center text-[12px] py-1.5 px-3 font-medium"
        style={{ background: ROXO }}
      >
        Tía Thay
      </div>

      {/* HERO */}
      <section className="px-5 pt-6 pb-3 text-center max-w-[520px] mx-auto">
        <h1
          className="text-[1.4rem] md:text-[1.7rem] font-extrabold leading-tight mb-2"
          style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
        >
          ¡Espera, mamá! Antes de irte...
        </h1>
        <p className="text-[0.95rem] leading-snug" style={{ color: CINZA_TEXTO }}>
          Acabas de garantizar el ebook <strong>"Mi Hijo Va a Hablar"</strong>. Pero tengo una sorpresa especial para ti...
        </p>
      </section>

      {/* OFERTA PRINCIPAL */}
      <section className="px-4 pb-3">
        <div
          className="max-w-[480px] mx-auto rounded-2xl px-5 py-5"
          style={{ background: LILAS }}
        >
          <h2
            className="text-[1.05rem] font-extrabold mb-3 text-center"
            style={{ color: ROXO }}
          >
            Plan 30 Días con la Tía Thay
          </h2>

          <ul className="space-y-2 mb-3">
            {ITENS_PRINCIPAIS.map((item) => (
              <li
                key={item.titulo}
                className="text-[0.92rem] font-semibold leading-snug"
                style={{ color: CINZA_TEXTO }}
              >
                {item.icon} {item.titulo}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BOX DE PREÇO */}
      <section className="px-4 pb-3">
        <div
          className="max-w-[440px] mx-auto rounded-xl text-center px-4 py-4 bg-white"
          style={{ border: `2px solid ${DOURADO}` }}
        >
          <p
            className="text-[0.9rem] line-through font-semibold leading-tight"
            style={{ color: VERMELHO }}
          >
            De $59 USD
          </p>
          <p className="text-[0.75rem] leading-tight mt-1" style={{ color: CINZA_MEDIO }}>
            Por solo
          </p>
          <p
            className="font-black leading-none mt-1"
            style={{ color: VERDE, fontSize: "clamp(2.2rem, 9vw, 3rem)" }}
          >
            $39,90 USD
          </p>
          <p className="text-[0.75rem] leading-tight mt-1" style={{ color: CINZA_MEDIO }}>
            al contado
          </p>
          <p
            className="text-[0.95rem] font-bold mt-2 leading-tight"
            style={{ color: ROXO }}
          >
            o 12x de $3,60 sin intereses
          </p>
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="px-4 pb-3">
        <div
          className="max-w-[440px] mx-auto rounded-md text-center px-3 py-2"
          style={{ background: ROXO_ESCURO }}
        >
          <p className="text-white font-bold text-[0.85rem] leading-tight">
            ⚠️ Si sales de esta página, esta oferta NO estará disponible después
          </p>
        </div>
      </section>

      {/* CTA — Kiwify Upsell Snippet (PLACEHOLDER) */}
      <section className="px-4 pb-2 text-center my-4">
        {/* PLACEHOLDER — substituir pelo Kiwify Upsell Snippet quando o produto upsell for criado na Kiwify */}
        <div
          style={{ textAlign: "center" }}
          id="kiwify-upsell-PLACEHOLDER"
          data-upsell-url=""
          data-downsell-url={SAIDA_LINK}
        >
          <button
            id="kiwify-upsell-trigger-PLACEHOLDER"
            onClick={handleCta}
            className="upsell-cta block w-[92%] max-w-[440px] mx-auto rounded-full uppercase font-extrabold text-white text-center py-4 px-5 text-[0.95rem] tracking-wide transition-all border-0 cursor-pointer"
            style={{
              background: VERDE,
              boxShadow: `0 8px 22px -8px ${VERDE}cc`,
            }}
          >
            QUIERO EL PLAN COMPLETO POR $39,90 ➔
          </button>

          {/* Microcopy + garantia */}
          <p
            className="text-[0.78rem] leading-snug mt-3"
            style={{ color: CINZA_MEDIO }}
          >
            ✅ Acceso de por vida • ✅ Garantía de 7 días
          </p>

          {/* Saída */}
          <div
            id="kiwify-upsell-cancel-trigger-PLACEHOLDER"
            className="inline-block mt-4 text-[0.82rem] underline underline-offset-2 cursor-pointer"
            style={{ color: "#999999" }}
          >
            No, prefiero seguir sin
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="px-4 py-6" style={{ background: "#FAFAFA" }}>
        <div className="max-w-[520px] mx-auto">
          <h3
            className="text-center text-[1.1rem] font-extrabold mb-4"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Mamás que ya transformaron la rutina de sus hijos
          </h3>
          <div className="space-y-3">
            {DEPOIMENTOS.map((d) => (
              <div
                key={d.nome}
                className="rounded-xl p-4 bg-white"
                style={{ border: `1px solid ${LILAS}` }}
              >
                <p className="text-[0.9rem] italic leading-snug" style={{ color: CINZA_TEXTO }}>
                  "{d.texto}"
                </p>
                <p className="text-[0.78rem] font-bold mt-2" style={{ color: ROXO }}>
                  — {d.nome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-6">
        <div className="max-w-[520px] mx-auto">
          <h3
            className="text-center text-[1.1rem] font-extrabold mb-4"
            style={{ color: ROXO, fontFamily: "'Playfair Display', serif" }}
          >
            Preguntas frecuentes
          </h3>
          <div className="space-y-2">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="rounded-lg px-4 py-3 cursor-pointer"
                style={{ background: LILAS }}
              >
                <summary
                  className="text-[0.92rem] font-bold list-none flex justify-between items-center"
                  style={{ color: ROXO }}
                >
                  {f.q}
                  <span className="ml-2">+</span>
                </summary>
                <p
                  className="text-[0.88rem] mt-2 leading-snug"
                  style={{ color: CINZA_TEXTO }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-5 py-6 text-center mt-auto"
        style={{ background: ROXO, color: "#fff" }}
      >
        <p className="text-[0.82rem]">© 2025 Tía Thay - Todos los derechos reservados</p>
        <p className="text-[0.7rem] mt-3 opacity-80 max-w-[480px] mx-auto leading-snug">
          Las actividades son herramientas de estimulación y no sustituyen el seguimiento profesional de un fonoaudiólogo.
        </p>
      </footer>

      <style>{`
        @keyframes upsellPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 8px 22px -8px ${VERDE}cc; }
          50% { transform: scale(1.03); box-shadow: 0 12px 28px -6px ${VERDE}e6; }
        }
        .upsell-cta { animation: upsellPulse 2.2s ease-in-out infinite; }
        .upsell-cta:hover { background: #1B5E20 !important; animation-play-state: paused; }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>
    </div>
  );
};

export default V6Es;
