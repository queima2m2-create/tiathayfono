import etapa1 from "@/assets/etapa1-cerebro-fala.jpg";
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
      "Coloque em prática o protocolo exclusivo desenvolvido a partir de 1.800 atendimentos. Uma sequência específica de estímulos que respeita exatamente a fase do seu filho e destrava a fala de dentro pra fora — de forma natural, sem pressão, sem sair de casa.",
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
  <section className="bg-background pt-10 pb-10 md:pt-14 md:pb-14 px-4">
    <div className="max-w-[720px] mx-auto">
      <h2 className="text-[1.5rem] md:text-[2rem] font-extrabold text-marrom-dark mb-8 text-center leading-[1.25]">
        A maioria das mães estimula o filho do jeito errado sem saber. Quando você entende o método certo, tudo muda:
      </h2>

      <div className="space-y-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
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
            <div className="p-5">
              <span className="inline-block bg-rosa text-background text-[0.7rem] font-bold px-3 py-1 rounded mb-2 tracking-wider">
                {s.num}
              </span>
              <h3 className="text-[1.05rem] md:text-[1.2rem] font-extrabold text-marrom-dark leading-[1.35] mb-1.5">
                {s.title}
              </h3>
              <p className="text-[0.9rem] text-primary/80 leading-[1.6]">
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
