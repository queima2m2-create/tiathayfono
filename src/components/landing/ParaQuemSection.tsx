const targets = [
  { emoji: "👶", text: "Tem um bebê ou criança de até 3 anos" },
  { emoji: "🤔", text: "Está com dúvidas se seu filho está no tempo certo da fala" },
  { emoji: "💛", text: "Quer ajudar mas não sabe como e não tem tempo" },
  { emoji: "👩‍⚕️", text: "Busca orientação profissional, sem complicação" },
];

const ParaQuemSection = () => (
  <section className="bg-rosa py-20 md:py-28 px-6 text-center">
    <div className="max-w-[750px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-background mb-14 leading-[1.25]">
        Esse guia é pra você que:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {targets.map((t, i) => (
          <div
            key={i}
            className="bg-background/15 backdrop-blur-sm rounded-2xl px-6 py-5 text-left text-background text-[1rem] leading-[1.6] flex items-center gap-3"
          >
            <span className="text-[1.4rem] shrink-0">{t.emoji}</span>
            {t.text}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="#preco"
          className="inline-block bg-dourado hover:bg-dourado-hover text-background text-[0.9rem] font-bold px-10 py-4 rounded-full uppercase tracking-wide transition-colors"
        >
          ESTE GUIA É PRA MIM!
        </a>
      </div>
    </div>
  </section>
);

export default ParaQuemSection;
