import historinhas from "@/assets/historinhas-dormir.jpg";
import choros from "@/assets/choros-frases.jpg";
import checklist from "@/assets/checklist-palavras.jpg";
import cards from "@/assets/cards-interativos.jpg";
import rotina from "@/assets/rotina-falar.jpg";

const bonuses = [
  {
    num: "06", title: "Historinhas de Dormir que Destravam a Fala",
    desc: "O jeito certo de contar histórias que fazem seu filho destravar a fala enquanto ele se acalma e dorme.",
    checks: ["Histórias pensadas para acalmar e estimular", "Estimule a fala enquanto ele relaxa"],
    img: historinhas,
  },
  {
    num: "07", title: "Transformando Choros em Frases",
    desc: "Como lidar com as crises de choro da criança e como fazer ela parar e começar a falar/pedir ao invés de chorar.",
    checks: ["Transforme choro em pedido", "Reduza birras com comunicação", "Ensina a pedir, não a chorar"],
    img: choros,
  },
  {
    num: "08", title: "Checklist de Palavras Iniciais",
    desc: "Acompanhe os primeiros avanços do seu filho com clareza e sem ansiedade.",
    checks: ["Veja a evolução em tempo real", "Ideal para mães que querem acompanhar"],
    img: checklist,
  },
  {
    num: "09", title: "Cards Interativos de Estímulo",
    desc: "Use estes cards nas brincadeiras do dia a dia para gerar estímulos reais de comunicação.",
    checks: ["Estímulo sem parecer tarefa", "Usa sozinho ou com você"],
    img: cards,
  },
  {
    num: "10", title: "A Rotina que Induz seu Filho a Falar",
    desc: "Crie um ambiente onde seu filho precisa se comunicar para conseguir o que quer — e veja a fala acontecer.",
    checks: ["Cria necessidades de comunicação naturais", "Fácil de aplicar no dia a dia"],
    img: rotina,
  },
];

const BonusSection = () => (
  <section className="bg-rosa pb-20 md:pb-28 px-6">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.4rem] md:text-[1.8rem] font-extrabold text-center text-background mb-14 pt-6 leading-[1.3]">
        E para garantir que seu filho comece a falar de verdade, como{" "}
        <span className="text-dourado">BÔNUS</span> você receberá também:
      </h2>

      <div className="space-y-10">
        {bonuses.map((b, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-background/10 rounded-2xl p-7`}>
            <div className="md:w-2/5">
              <img
                src={b.img}
                alt={b.title}
                className="rounded-xl w-full"
                loading="lazy"
                width={1024}
                height={680}
              />
            </div>
            <div className="md:w-3/5 text-background">
              <span className="inline-block bg-background/15 rounded px-3 py-0.5 text-[0.8rem] tracking-widest mb-4 font-semibold">
                {b.num}
              </span>
              <h3 className="text-[1.15rem] md:text-[1.3rem] font-extrabold mb-3 leading-[1.3]">{b.title}</h3>
              <p className="text-[0.95rem] opacity-80 leading-[1.7] mb-4">{b.desc}</p>
              <ul className="space-y-2">
                {b.checks.map((c, j) => (
                  <li key={j} className="text-[0.9rem] opacity-90 flex items-start gap-2">
                    <span className="shrink-0">✅</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
