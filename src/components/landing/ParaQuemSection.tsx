const problems = [
  "😭 Não quer mais sentir que o filho está ficando para trás",
  "😟 Vive tentando adivinhar o que o filho quer",
  "😓 Não tem tempo para pesquisar e fica mais confusa que antes",
  "🥺 Quer ajudar mas não sabe como e não tem habilidade para brincadeiras específicas",
];

const desires = [
  '🥰 Ouvir um "mamãe" com intenção — e não só por acidente',
  "😌 Sentir alívio quando o filho falar o que sente",
  "🤩 Ver seu filho falando e sendo compreendido pelas pessoas",
];

const ParaQuemSection = () => (
  <section className="bg-marrom-dark py-20 md:py-28 px-6 text-center">
    <div className="max-w-[750px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-background mb-14 leading-[1.25]">
        O Guia Meu Filho Vai Falar é para quem…
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {problems.map((p, i) => (
          <div key={i} className="bg-background/[0.08] rounded-2xl px-6 py-5 text-left text-background text-[1rem] leading-[1.6]">
            {p}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p className="text-[0.85rem] font-bold text-background/60 uppercase tracking-[2px] mb-6">
          E para você que quer 👇
        </p>
        <div className="space-y-4">
          {desires.map((d, i) => (
            <div key={i} className="bg-background/[0.12] rounded-2xl px-6 py-5 text-left text-background text-[1rem] leading-[1.6]">
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ParaQuemSection;
