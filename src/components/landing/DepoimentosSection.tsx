import depoimento1 from "@/assets/depoimento-1.jpeg";
import depoimento2 from "@/assets/depoimento-2.jpeg";
import depoimento3 from "@/assets/depoimento-3.jpeg";

const depoimentos = [depoimento1, depoimento2, depoimento3];

const DepoimentosSection = () => (
  <section className="bg-background py-20 md:py-28 px-6">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 leading-[1.25]">
        Veja o resultado de quem usou o Guia Meu Filho Vai Falar.
      </h2>
      <p className="text-[1.05rem] text-primary/70 mb-14 leading-[1.7]">
        E você terá os mesmos resultados com brincadeiras simples e validadas.
      </p>

      <div className="flex flex-col gap-6 max-w-[500px] mx-auto">
        {depoimentos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Depoimento ${i + 1}`}
            className="rounded-2xl w-full shadow-md"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </section>
);

export default DepoimentosSection;
