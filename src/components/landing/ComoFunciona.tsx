import passo1 from "@/assets/passo1-raio-x.jpg";
import passo2 from "@/assets/passo2-brincadeira-balao.jpg";
import passo3 from "@/assets/passo3-falar-balao.jpg";

const steps = [
  {
    num: "PASSO 01",
    title: "Descubra em que fase da fala seu filho está e o que ele precisa agora.",
    subtitle: "Você vai entender exatamente qual habilidade estimular primeiro — mesmo sem ter nenhum conhecimento técnico.",
    img: passo1,
  },
  {
    num: "PASSO 02",
    title: "Escolha a brincadeira certa para a necessidade do seu filho e aplique com confiança.",
    subtitle: "Sem precisar adivinhar ou pesquisar por horas — é só seguir o passo a passo e brincar.",
    img: passo2,
  },
  {
    num: "PASSO 03",
    title: "Brinque 15 minutos por dia e veja ele formar as primeiras palavras em até 30 dias.",
    subtitle: "Mesmo com rotina corrida, dá para encaixar de forma leve, sem cobrança nem estresse.",
    img: passo3,
  },
];

const ComoFunciona = () => (
  <section className="bg-background pt-10 pb-10 md:pt-14 md:pb-14 px-4">
    <div className="max-w-[720px] mx-auto">
      <h2 className="text-[1.5rem] md:text-[2rem] font-extrabold text-marrom-dark mb-8 text-center leading-[1.25]">
        Siga 3 passos para destravar a fala do seu filho brincando
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
                alt={s.num}
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
