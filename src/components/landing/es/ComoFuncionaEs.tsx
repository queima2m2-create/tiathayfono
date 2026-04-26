import etapa1 from "@/assets/etapa1-cerebro-fala.jpg";
import { getSocialProofCountEs } from "@/lib/socialProofCountEs";
import etapa2 from "@/assets/etapa2-protocolo.jpg";
import etapa3 from "@/assets/etapa3-tagarelas.jpg";

const steps = [
  {
    num: "ETAPA 1",
    title: "ENTIENDE EL CEREBRO QUE HABLA",
    subtitle:
      "Descubre cómo el cerebro del niño aprende a hablar — y por qué la mayoría de las mamás estimula de forma equivocada sin saberlo. Cuando entiendes ese mecanismo, cada cosa que haces con tu hijo pasa a tener un propósito real.",
    img: etapa1,
  },
  {
    num: "ETAPA 2",
    title: "APLICA LA ESTRUCTURA ÚNICA DE LA DRA. THAYNARA",
    subtitle:
      `Pon en práctica el protocolo exclusivo desarrollado a partir de ${getSocialProofCountEs()} atenciones. Una secuencia específica de estímulos que respeta exactamente la fase de tu hijo y desbloquea el habla de adentro hacia afuera — de forma natural, sin presión, sin salir de casa.`,
    img: etapa2,
  },
  {
    num: "ETAPA 3",
    title: "EL SECRETO DE LOS NIÑOS PARLANCHINES",
    subtitle:
      "Descubre lo que todo niño que habla por los codos tiene en común — y cómo transformar la rutina de tu hijo para que él llegue ahí. No es suerte. No es genética. Es método.",
    img: etapa3,
  },
];

const ComoFuncionaEs = () => (
  <section className="bg-rosa-light pt-12 pb-12 md:pt-16 md:pb-16 px-4">
    <div className="max-w-[720px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 text-center leading-[1.2]">
        La mayoría de las mamás estimula a su hijo de forma equivocada sin saberlo. Cuando entiendes el método correcto, todo cambia:
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

export default ComoFuncionaEs;
