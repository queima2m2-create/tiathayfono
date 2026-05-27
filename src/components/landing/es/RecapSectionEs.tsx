import produtoMockup from "@/assets/es/produto-mockup-es.jpeg";

const guideItems = [
  { emoji: "⚠️", price: "$7", title: "Señales de Alerta" },
  { emoji: "🎥", price: "$17", title: "Aula Completa: Qué Hacer Para Que Tu Hijo Hable" },
  { emoji: "🎲", price: "$12", title: "10 Mejores Juegos que Desbloquean el Habla" },
  { emoji: "💬", price: "$9", title: "Las 50 Palabras Exactas que Destraban el Habla" },
  { emoji: "🎮", price: "$7", title: "Rutina del Niño Parlanchín" },
  { emoji: "📱", price: "$7", title: "Pantallas — Aliado o Enemigo del Habla" },
  { emoji: "🔥", price: "$27", title: "Soporte WhatsApp Directo con la Fono" },
];
const bonusItems = [
  { emoji: "🎵", price: "$5", title: "10 Canciones para Hablar en 7 días" },
  { emoji: "🔥", price: "$27", title: "Lives Exclusivas con la Dra. Thaynara" },
  { emoji: "🃏", price: "$5", title: "50 Tarjetas Interactivas de Estímulo" },
  { emoji: "👩‍👧", price: "$12", title: "Comunidad VIP de Mamás en WhatsApp" },
  { emoji: "📊", price: "$5", title: "Planner de Evolución (Imprimible)" },
];

const RecapSectionEs = () => (
  <section id="recapitulando" className="bg-bege-dark pt-12 pb-6 md:pt-16 md:pb-8 px-6 text-center">
    <div className="max-w-[750px] mx-auto">
      <span className="inline-block bg-border text-primary text-[0.78rem] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-5">
        ¿CUÁNTO VALE?
      </span>
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-8 leading-[1.25]">
        📋 Todo lo que vas a tener en tus manos:
      </h2>

      <img
        src={produtoMockup}
        alt="Guía completa"
        className="rounded-2xl w-full max-w-[520px] mx-auto mb-8 shadow-lg"
        loading="lazy"
        width={1024}
        height={1024}
      />

      <h3 className="text-[1.05rem] font-extrabold text-marrom-dark mb-3">
        📖 Contenido de la Guía
      </h3>
      <div className="max-w-[600px] mx-auto mb-5 space-y-2">
        {guideItems.map((item, i) => (
          <div key={i} className="bg-background rounded-lg px-4 py-3 shadow-sm border border-border flex items-center gap-2.5">
            <span className="text-[1.1rem] shrink-0">{item.emoji}</span>
            <p className="text-[0.9rem] font-bold text-marrom-dark leading-[1.3] flex-1 text-left">{item.title}</p>
            <span className="text-vermelho font-bold text-[0.85rem] line-through whitespace-nowrap shrink-0">{item.price}</span>
          </div>
        ))}
      </div>

      <h3 className="text-[1.05rem] font-extrabold text-marrom-dark mb-3 mt-6">
        + todos estos <span className="text-dourado">BONOS</span> 👇
      </h3>

      <div className="max-w-[600px] mx-auto mb-8 space-y-2">
        {bonusItems.map((item, i) => (
          <div key={i} className="bg-background rounded-lg px-4 py-3 shadow-sm border border-border flex items-center gap-2.5">
            <span className="text-[1.1rem] shrink-0">{item.emoji}</span>
            <p className="text-[0.9rem] font-bold text-marrom-dark leading-[1.3] flex-1 text-left">{item.title}</p>
            <span className="text-vermelho font-bold text-[0.85rem] line-through whitespace-nowrap shrink-0">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="text-[1.2rem] font-extrabold text-marrom-dark mb-1">
          VALOR REAL TOTAL
        </h3>
        <p className="text-[2rem] font-black text-vermelho line-through mb-3">$140</p>
        <p className="text-[1.05rem] text-marrom-dark mb-4">
          Todo esto podría costar fácilmente <strong>$97</strong>
        </p>
        <p className="text-[1.2rem] md:text-[1.35rem] text-marrom-dark font-extrabold leading-[1.4]">
          Pero hoy no pagas $97. Ni $50. Ni $30.
        </p>
        <p className="text-[1.2rem] md:text-[1.45rem] text-marrom-dark font-extrabold leading-[1.4] mt-2">
          Te llevas TODO por solo <span className="text-dourado">$14,99</span>
        </p>
        <span className="inline-block mt-4 bg-verde/10 text-verde font-extrabold text-[0.95rem] px-5 py-2 rounded-md border border-verde/30">
          AHORRAS más del 80%
        </span>
      </div>
    </div>
  </section>
);

export default RecapSectionEs;
