import produtoMockup from "@/assets/produto-mockup-wide.png";
import PricingBlock from "./PricingBlock";

const PrecoSection = () => (
  <section id="preco" className="bg-marrom-dark pt-4 pb-8 md:pt-6 md:pb-10 px-4">
    <div className="max-w-[600px] mx-auto text-center mb-3">
      <img
        src={produtoMockup}
        alt="Guia Meu Filho Vai Falar"
        className="w-full mx-auto drop-shadow-2xl"
        loading="lazy"
        width={1024}
        height={576}
      />
    </div>
    <PricingBlock />
  </section>
);

export default PrecoSection;
