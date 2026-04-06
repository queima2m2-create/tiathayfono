import bonusMusicas from "@/assets/bonus-musicas.jpg";
import bonusAulaVivo from "@/assets/bonus-aula-vivo.jpg";
import bonusCards from "@/assets/bonus-cards.jpg";
import bonusCertificado from "@/assets/bonus-certificado.jpg";

const bonusItems = [
  {
    num: "08",
    title: "MÚSICAS PARA FALAR EM ATÉ 7 DIAS",
    desc: "Músicas em áudios criadas pela fono de forma estratégica pra estimular no dia a dia — na rua, no parque, no banho… que farão seu filho aprender sem querer.",
    checks: ["Áudios prontos para usar a qualquer momento", "Estímulo natural através da música"],
    img: bonusMusicas,
  },
  {
    num: "09",
    title: "CONSULTA GRATUITA COM A FONO",
    desc: "Ganhe um ingresso de acesso a um encontro com Thaynara Andrade, fonoaudióloga infantil, e tenha a oportunidade de tirar suas dúvidas e alavancar a fala do seu filho.",
    checks: ["Encontro ao vivo com a fonoaudióloga", "Tire todas as suas dúvidas em tempo real"],
    img: bonusAulaVivo,
  },
  {
    num: "10",
    title: "CARDS INTERATIVOS DE ESTÍMULO",
    desc: "Cards ilustrados e divertidos para usar nas brincadeiras do dia a dia, transformando cada momento em uma oportunidade de estimular a fala.",
    checks: ["Perfeitos para brincar e aprender ao mesmo tempo", "Desenvolvidos por fonoaudióloga infantil"],
    img: bonusCards,
  },
  {
    num: "11",
    title: "CERTIFICADO TAGARELA",
    desc: "Imprima e guarde na memória o quanto seu pequeno evoluiu com a sua ajuda!",
    checks: ["Um registro especial da evolução do seu filho", "Para celebrar cada conquista juntos"],
    img: bonusCertificado,
  },
];

const BonusSection = () => (
  <section className="bg-rosa pt-6 md:pt-8 pb-20 md:pb-28 px-6">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-center text-background mb-16 leading-[1.25]">
        E para garantir que seu filho comece a falar de verdade, como <span className="text-dourado">BÔNUS</span> você receberá também:
      </h2>

      <div className="space-y-10">
        {bonusItems.map((item, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-background/10 rounded-2xl p-7`}>
            <div className="md:w-2/5">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
            <div className="md:w-3/5 text-background">
              <span className="inline-block bg-background/15 rounded px-3 py-0.5 text-[0.8rem] tracking-widest mb-4 font-semibold">
                BÔNUS {item.num}
              </span>
              <h3 className="text-[1.15rem] md:text-[1.3rem] font-extrabold mb-3 leading-[1.3]">{item.title}</h3>
              <p className="text-[0.95rem] opacity-80 leading-[1.7] mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.checks.map((c, j) => (
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
