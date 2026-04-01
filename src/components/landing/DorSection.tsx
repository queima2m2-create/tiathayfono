import maeFilho from "@/assets/mae-filho-preocupada.jpg";

const painPoints = [
  { emoji: "😟", text: "Seu filho está demorando para falar ou falando menos que outras crianças da idade" },
  { emoji: "😭", text: "Ele aponta, grita ou chora, mas não consegue se expressar com palavras?" },
  { emoji: "😓", text: "Você não tem tempo ou habilidade para brincadeiras específicas de fala" },
  { emoji: "🤯", text: "Já procurou dicas na internet, mas ficou ainda mais confusa?" },
];

const DorSection = () => (
  <section className="bg-rosa pt-12 pb-12 md:pt-16 md:pb-16 px-6 text-center">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.5rem] md:text-[1.9rem] font-extrabold text-background mb-3 leading-[1.3]">
        Você já sentiu que:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[700px] mx-auto mb-10">
        {painPoints.map((p, i) => (
          <div key={i} className="bg-background/15 backdrop-blur-sm rounded-2xl px-5 py-5 text-left text-background flex items-start gap-3">
            <span className="text-[1.4rem] shrink-0">{p.emoji}</span>
            <p className="text-[0.95rem] font-semibold leading-[1.5]">{p.text}</p>
          </div>
        ))}
      </div>

      <p className="text-[1.1rem] font-bold text-background max-w-[640px] mx-auto leading-[1.5]">
        Você não está sozinha. E a boa notícia é: dá pra começar a estimular a fala agora mesmo — com leveza e segurança.
      </p>
    </div>
  </section>
);

export default DorSection;
