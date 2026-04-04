const bonuses = [
  {
    emoji: "✅",
    title: "Checklist de palavras iniciais",
    desc: "Pra acompanhar os primeiros avanços!",
    oldPrice: "R$29,90",
  },
  {
    emoji: "🃏",
    title: "Cards interativos de estímulo",
    desc: "Pra usar nas brincadeiras!",
    oldPrice: "R$97,00",
  },
  {
    emoji: "🎥",
    title: "Aula bônus com explicações diretas da fono",
    desc: "Pra se sentir segura e confiante!",
    oldPrice: "R$147,00",
  },
];

const BonusSection = () => (
  <section className="bg-rosa-light py-20 md:py-28 px-6">
    <div className="max-w-[750px] mx-auto text-center">
      <h2 className="text-[1.5rem] md:text-[2rem] font-extrabold text-marrom-dark mb-14 leading-[1.25]">
        Ao adquirir o guia, você ainda leva:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {bonuses.map((b, i) => (
          <div
            key={i}
            className="bg-background rounded-2xl p-6 shadow-md flex flex-col items-center text-center"
          >
            <span className="text-[2.4rem] mb-4">{b.emoji}</span>
            <h3 className="text-[1.05rem] font-extrabold text-marrom-dark mb-2 leading-[1.3]">
              {b.title}
            </h3>
            <p className="text-[0.9rem] text-primary/70 mb-3 leading-[1.5]">{b.desc}</p>
            <span className="text-vermelho font-bold text-[1rem] line-through">{b.oldPrice}</span>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default BonusSection;
