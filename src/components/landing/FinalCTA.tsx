import { Button } from "@/components/ui/button";
import doisCaminhos from "@/assets/dois-caminhos.jpg";
import PricingBlock from "./PricingBlock";

const FinalCTA = () => (
  <>
    <section className="bg-background py-12 md:py-16 px-6 text-center">
      <div className="max-w-[750px] mx-auto">
        <h2 className="text-[1.4rem] md:text-[1.9rem] font-extrabold text-vermelho mb-2 leading-[1.3]">
          Vai continuar sem saber como ajudar seu filho a falar mais?
        </h2>
        <h2 className="text-[1.4rem] md:text-[1.9rem] font-extrabold text-rosa mb-6 leading-[1.3]">
          Ou vai ver ele desbloquear a fala nos próximos 30 dias?
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
            ❌ Se você não agir, vai continuar tentando adivinhar o que fazer — enquanto o tempo passa.
          </p>
          <p className="text-[1.05rem] text-rosa font-bold leading-[1.6]">
            ✅ Se você agir agora, vai ter finalmente um caminho claro para ajudar seu filho a falar mais — em poucos minutos por dia.
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
