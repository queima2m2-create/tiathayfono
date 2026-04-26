import produtoMockup from "@/assets/produto-mockup.jpg";

const guideItems = [
  { emoji: "⚠️", price: "$13", title: "Señales de Alerta" },
  { emoji: "🎥", price: "$18", title: "Clase Completa: Qué Hacer Para Que Tu Hijo Hable" },
  { emoji: "🎲", price: "$13", title: "Los 10 Mejores Juegos Que Desbloquean el Habla" },
  { emoji: "💬", price: "$13", title: "Palabras de Poder Que Desbloquean la Comunicación" },
  { emoji: "🎮", price: "$13", title: "Rutina del Niño Parlanchín" },
  { emoji: "📱", price: "$13", title: "Pantallas — ¿Aliado o Enemigo del Habla?" },
  { emoji: "📲", price: "$13", title: "Soporte con la Fonoaudióloga por WhatsApp" },
];
const bonusItems = [
  { emoji: "🎵", price: "$18", title: "Canciones Para Hablar en Hasta 7 Días" },
  { emoji: "🎥", price: "$13", title: "Clase en Vivo Gratuita con la Fonoaudióloga" },
  { emoji: "🃏", price: "$13", title: "Tarjetas Interactivas de Estímulo" },
  { emoji: "🏅", price: "$10", title: "Certificado Parlanchín" },
];

const RecapSectionEs = () => (
  <section id="recapitulando" className="bg-bege-dark pt-12 pb-6 md:pt-16 md:pb-8 px-6 text-center">
    <div className="max-w-[750px] mx-auto">
      <span className="inline-block bg-border text-primary text-[0.78rem] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-5">
        RESUMIENDO
      </span>
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-8 leading-[1.25]">
        Todo lo que vas a tener en tus manos para ver a tu hijo hablar en hasta 30 días
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
          Todo esto fácilmente podría costar
        </h3>
        <p className="text-[2rem] font-black text-vermelho line-through mb-1">$137</p>
        <p className="text-[1.1rem] text-marrom-dark font-extrabold">
          Pero no pagarás NI LA MITAD DE ESO...
        </p>
      </div>
    </div>
  </section>
);

export default RecapSectionEs;
