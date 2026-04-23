import depoimento1 from "@/assets/depoimento-1.webp";
import depoimentoNovo1 from "@/assets/depoimento-novo-1.webp";
import depoimentoNovo2 from "@/assets/depoimento-novo-2.webp";
import depoimentoNovo4 from "@/assets/depoimento-novo-4.webp";

const depoimentos = [
  { src: depoimento1, width: 600, height: 800 },
  { src: depoimentoNovo1, width: 1024, height: 774 },
  { src: depoimentoNovo2, width: 991, height: 413 },
  { src: depoimentoNovo4, width: 1032, height: 707 },
];

const DepoimentosSection = () => (
  <section id="depoimentos" className="bg-background py-20 md:py-28 px-6">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 leading-[1.25]">
        Mães reais. Filhos que começaram a falar. Veja o que está acontecendo.
      </h2>
      <p className="text-[1.05rem] text-primary/70 mb-14 leading-[1.7]">
        Cada depoimento aqui é de uma mãe que duvidou — e hoje não consegue mais imaginar sem o método da Dra. Thaynara.
      </p>

      <div className="flex flex-col gap-6 max-w-[500px] mx-auto">
        {depoimentos.map((item, i) => (
          <img
            key={i}
            src={item.src}
            alt={`Depoimento ${i + 1}`}
            className="rounded-2xl w-full shadow-md"
            loading="lazy"
            decoding="async"
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
    </div>
  </section>
);

export default DepoimentosSection;
