import { Button } from "@/components/ui/button";
import doisCaminhos from "@/assets/dois-caminhos.jpg";
import PricingBlock from "./PricingBlock";

const FinalCTA = () => (
  <>
    <section className="bg-background py-12 md:py-16 px-6 text-center">
      <div className="max-w-[750px] mx-auto">
        <h2 className="text-[1.4rem] md:text-[1.9rem] font-extrabold text-vermelho mb-2 leading-[1.3]">
          Vai continuar vendo seu filho atrasado, sem saber o que fazer?
        </h2>
        <h2 className="text-[1.4rem] md:text-[1.9rem] font-extrabold text-rosa mb-6 leading-[1.3]">
          Ou vai ver ele formar as primeiras frases em 30 dias?
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
            ❌ Se você não tomar uma decisão agora, vai continuar vivendo no escuro, cheia de culpa, sem ver progresso nenhum.
          </p>
          <p className="text-[1.05rem] text-rosa font-bold leading-[1.6]">
            ✅ Se você agir agora, vai finalmente ver seu filho falando, mesmo com apenas 15 minutos por dia.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-marrom-dark py-14 md:py-20 px-6">
      <PricingBlock showUrgency={false} />
    </section>
  </>
);

export default FinalCTA;
