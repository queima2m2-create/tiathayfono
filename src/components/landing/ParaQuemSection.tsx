const problems = [
  "😭 Está vendo outras crianças falando e sentindo aquela dor no peito que só mãe conhece",
  "😟 Chora escondida porque não consegue entender o que o filho está tentando te dizer",
  "😓 Já pesquisou tudo na internet e cada coisa que lê aumenta mais o seu medo",
  "🥺 Quer fazer tudo certo pelo seu filho mas ninguém te ensinou o que fazer de verdade",
];

const desires = [
  "🥰 Ouvir seu filho te chamar de mamãe com vontade — e sentir que ele escolheu você",
  "😌 Deitar à noite sabendo que fez tudo que estava ao seu alcance pelo seu filho",
  "🤩 Ver seu filho se comunicar, fazer amigos e ocupar o espaço que sempre foi dele",
];

const ParaQuemSection = () => (
  <section className="bg-rosa py-20 md:py-28 px-6 text-center">
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
          Mas no fundo, o que você realmente quer é 👇
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
