import { Button } from "@/components/ui/button";
import doisCaminhos from "@/assets/dois-caminhos.jpg";
import PricingBlock from "./PricingBlock";

const FinalCTA = () => (
  <>
    <section className="bg-background py-12 md:py-16 px-6 text-center">
      <div className="max-w-[750px] mx-auto">
        <h2 className="text-[1.4rem] md:text-[1.9rem] font-extrabold text-vermelho mb-2 leading-[1.3]">
          Seu filho está na janela mais importante do desenvolvimento. Ela não espera.
        </h2>
        <h2 className="text-[1.4rem] md:text-[1.9rem] font-extrabold text-rosa mb-6 leading-[1.3]">
          Você vai aproveitar essa janela ou vai deixar ela fechar?
        </h2>

        <div className="aspect-video w-full max-w-[600px] mx-auto mb-6 overflow-hidden rounded-2xl shadow-md">
          <img
            src={doisCaminhos}
            alt="Dois caminhos: com ou sem o guia"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1024}
            height={576}
          />
        </div>

        <div className="max-w-[600px] mx-auto space-y-3 text-left mb-6">
          <p className="text-[1.05rem] text-marrom-dark font-bold leading-[1.6]">
            ❌ Cada semana sem o método certo é uma semana do desenvolvimento do seu filho que não volta mais.
          </p>
          <p className="text-[1.05rem] text-rosa font-bold leading-[1.6]">
            ✅ Uma decisão de R$67 hoje pode mudar o quanto seu filho vai falar — pelo resto da vida.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-rosa py-14 md:py-20 px-6">
      <PricingBlock showUrgency={false} />
    </section>
  </>
);

export default FinalCTA;
