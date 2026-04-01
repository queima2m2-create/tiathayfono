const guideItems = [
  { emoji: "🧠", title: "Entenda como a fala funciona" },
  { emoji: "📊", title: "Conheça os principais marcos do desenvolvimento comunicativo" },
  { emoji: "⚠️", title: "Aprenda a identificar sinais de alerta de forma leve" },
  { emoji: "💬", title: "Descubra palavras funcionais para estimular a fala" },
  { emoji: "🎮", title: "Tenha acesso a atividades pra usar na rotina diária" },
  { emoji: "📱", title: "Entenda sobre uso de telas e fala" },
  { emoji: "📋", title: "Ganhe um roteiro de estímulo prático para aplicar no dia a dia" },
];

const OQueRecebe = () => (
  <section className="bg-rosa py-20 md:py-28 px-6">
    <div className="max-w-[750px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-center text-background mb-14 leading-[1.25]">
        O que você vai encontrar no guia?
      </h2>

      <div className="space-y-4">
        {guideItems.map((item, i) => (
          <div
            key={i}
            className="bg-background/15 backdrop-blur-sm rounded-2xl px-6 py-5 flex items-center gap-4"
          >
            <span className="text-[1.6rem] shrink-0">{item.emoji}</span>
            <h3 className="text-[1rem] md:text-[1.1rem] font-bold text-background leading-[1.4]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OQueRecebe;
