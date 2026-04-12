import etapa1 from "@/assets/etapa1-cerebro-fala.jpg";
import { getSocialProofCount } from "@/lib/socialProofCount";
import etapa2 from "@/assets/etapa2-protocolo.jpg";
import etapa3 from "@/assets/etapa3-tagarelas.jpg";

const steps = [
  {
    num: "ETAPA 1",
    title: "ENTENDA O CÉREBRO QUE FALA",
    subtitle:
      "Descubra como o cérebro da criança aprende a falar — e por que a maioria das mães estimula do jeito errado sem saber. Quando você entende esse mecanismo, cada coisa que você faz com seu filho passa a ter propósito real.",
    img: etapa1,
  },
  {
    num: "ETAPA 2",
    title: "APLIQUE A ESTRUTURA ÚNICA DA DRA. THAYNARA",
    subtitle:
      `Coloque em prática o protocolo exclusivo desenvolvido a partir de ${getSocialProofCount()} atendimentos. Uma sequência específica de estímulos que respeita exatamente a fase do seu filho e destrava a fala de dentro pra fora — de forma natural, sem pressão, sem sair de casa.`,
    img: etapa2,
  },
  {
    num: "ETAPA 3",
    title: "O SEGREDO DAS CRIANÇAS TAGARELAS",
    subtitle:
      "Descubra o que toda criança que fala pelos cotovelos tem em comum — e como transformar a rotina do seu filho para que ele chegue lá. Não é sorte. Não é genética. É método.",
    img: etapa3,
  },
];

const ComoFunciona = () => (
  <section className="bg-rosa-light pt-12 pb-12 md:pt-16 md:pb-16 px-4">
    <div className="max-w-[720px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 text-center leading-[1.2]">
        A maioria das mães estimula o filho do jeito errado sem saber. Quando você entende o método certo, tudo muda:
      </h2>
      <div className="w-16 h-1 bg-rosa mx-auto rounded-full mb-10" />

      <div className="space-y-8">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-card border-2 border-rosa/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-rosa text-background text-[0.75rem] font-bold px-4 py-1.5 rounded-full mb-3 tracking-wider">
                {s.num}
              </span>
              <h3 className="text-[1.15rem] md:text-[1.35rem] font-extrabold text-marrom-dark leading-[1.3] mb-2">
                {s.title}
              </h3>
              <p className="text-[0.95rem] text-primary/80 leading-[1.7]">
                {s.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComoFunciona;
