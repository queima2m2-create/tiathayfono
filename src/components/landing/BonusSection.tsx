import bonusMusicas from "@/assets/bonus-musicas.jpg";
import bonusAulaVivo from "@/assets/bonus-aula-vivo.jpg";
import bonusCards from "@/assets/bonus-cards.jpg";
import suporteWhatsapp from "@/assets/suporte-whatsapp.jpg";
import bonusCertificado from "@/assets/bonus-certificado.jpg";

type Bonus = {
  num: string;
  title: string;
  desc: string;
  checks: string[];
  img: string;
  highlight?: boolean;
};

const bonusItems: Bonus[] = [
  {
    num: "08",
    title: "MÚSICAS PARA FALAR EM ATÉ 7 DIAS",
    desc: "Músicas em áudios criadas pela fono de forma estratégica pra estimular no dia a dia — na rua, no parque, no banho… que farão seu filho aprender sem querer.",
    checks: ["Áudios prontos para usar a qualquer momento", "Estímulo natural através da música"],
    img: bonusMusicas,
  },
  {
    num: "09",
    title: "LIVES EXCLUSIVAS COM A DRA. THAYNARA",
    desc: "Periodicamente realizo encontros ao vivo via Zoom com as alunas do programa. Você tem acesso a TODAS as lives que acontecerem — gravadas pra sempre na plataforma pra você assistir quando quiser.",
    checks: [
      "Acesso vitalício a todas as lives realizadas",
      "Mostre seu filho e tire dúvidas com a Thaynara ao vivo",
      "Gravações ficam salvas pra você revisar",
      "Comunicação prévia pelo grupo VIP do WhatsApp",
    ],
    img: bonusAulaVivo,
    highlight: true,
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
    title: "COMUNIDADE VIP DE MÃES NO WHATSAPP",
    desc: "Entre num grupo exclusivo no WhatsApp com outras mães que estão na mesma jornada. Compartilhe conquistas, troque experiências, comemore cada palavrinha nova. Você NUNCA mais vai se sentir sozinha nessa jornada.",
    checks: [
      "Grupo ativo com 2.000+ mães na mesma situação",
      "Comemore cada conquista junto",
      "Suporte emocional 24/7",
      "Tire dúvidas com outras mães experientes",
    ],
    img: suporteWhatsapp,
  },
  {
    num: "12",
    title: "PLANNER DE EVOLUÇÃO DA FALA (IMPRIMÍVEL)",
    desc: "Folhas imprimíveis pra você acompanhar visualmente a evolução do seu filho mês a mês. Marca palavras novas, conquistas, momentos especiais. Vai virar uma lembrança preciosa e ao mesmo tempo te dá controle real sobre o progresso.",
    checks: [
      "PDFs imprimíveis prontos pra usar",
      "Registre cada palavrinha nova",
      "Visualize o progresso real semana a semana",
    ],
    img: bonusCertificado,
  },
];

const BonusSection = () => (
  <section className="bg-rosa pt-6 md:pt-8 pb-20 md:pb-28 px-6">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-center text-background mb-16 leading-[1.25]">
        E para acelerar ainda mais os resultados, preparamos esses <span className="text-dourado">BÔNUS</span> exclusivos para você:
      </h2>

      <div className="space-y-10">
        {bonusItems.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center rounded-2xl border ${
              item.highlight
                ? 'bg-dourado/25 border-dourado p-8 md:p-10 shadow-2xl ring-2 ring-dourado'
                : 'bg-background/10 border-background/30 p-7'
            }`}
          >
            <div className="md:w-2/5 w-full">
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
              {item.highlight && (
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-block bg-coral text-white rounded px-3 py-1 text-[0.75rem] tracking-wide font-extrabold">
                    🔥 BÔNUS GIGANTE
                  </span>
                </div>
              )}
              <span className="inline-block bg-background/15 rounded px-3 py-0.5 text-[0.8rem] tracking-widest mb-4 font-semibold">
                BÔNUS {item.num}
              </span>
              <h3 className={`font-extrabold mb-3 leading-[1.3] ${item.highlight ? 'text-[1.35rem] md:text-[1.6rem]' : 'text-[1.15rem] md:text-[1.3rem]'}`}>
                {item.title}
              </h3>
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
