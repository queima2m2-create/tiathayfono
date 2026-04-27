import depoimentoNovo1 from "@/assets/es/depoimento-novo-1-es.jpeg";
import depoimentoNovo2 from "@/assets/es/depoimento-novo-2-es.jpeg";
import depoimentoNovo3 from "@/assets/es/depoimento-novo-3-es.jpeg";
import depoimentoNovo4 from "@/assets/es/depoimento-novo-4-es.jpeg";
import depoimentoNovo5 from "@/assets/es/depoimento-novo-5-es.jpeg";

const depoimentos = [
  depoimentoNovo1,
  depoimentoNovo2,
  depoimentoNovo3,
  depoimentoNovo4,
  depoimentoNovo5,
];

const DepoimentosSectionEs = () => (
  <section id="depoimentos" className="bg-background py-20 md:py-28 px-6">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 leading-[1.25]">
        Mamás reales. Hijos que empezaron a hablar. Mira lo que está pasando.
      </h2>
      <p className="text-[1.05rem] text-primary/70 mb-14 leading-[1.7]">
        Cada testimonio aquí es de una mamá que dudó — y hoy no puede imaginar su vida sin el método de la Dra. Thaynara.
      </p>

      <div className="flex flex-col gap-6 max-w-[500px] mx-auto">
        {depoimentos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Testimonio ${i + 1}`}
            className="rounded-2xl w-full shadow-md"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </section>
);

export default DepoimentosSectionEs;
