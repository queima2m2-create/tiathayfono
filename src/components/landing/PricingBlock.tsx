import { Button } from "@/components/ui/button";
import { fbEvents } from "@/lib/fbConversions";
import { buildKiwifyCheckoutUrl, sendTrackingEnrichment } from "@/lib/kiwifyUrl";
import produtoMockup from "@/assets/produto-mockup.jpg";
import GuaranteeBadge from "./GuaranteeBadge";

const CTA_LINK = "https://pay.kiwify.com.br/uXb5s35";

const PricingBlock = ({ className = "", showUrgency = true }: { className?: string; showUrgency?: boolean }) => {
  return (
    <div className={`text-center max-w-[520px] mx-auto ${className}`}>
      <div className="bg-background text-marrom-dark rounded-2xl p-8 md:p-10 shadow-xl">
        {showUrgency && (
          <span className="inline-block bg-coral text-white text-[0.8rem] md:text-[0.9rem] font-bold px-5 py-2.5 rounded-lg mb-5">
            🔥 Oferta de lançamento válida até 31/05/2026
          </span>
        )}

        <div className="w-full max-w-[320px] mx-auto mb-4 aspect-video rounded-2xl overflow-hidden drop-shadow-lg">
          <img
            src={produtoMockup}
            alt="Guia completo - Método Tagarela"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>

        <p className="text-[1rem] mb-2 font-semibold">
          <span className="bg-vermelho text-background px-3 py-1 rounded-md text-[1.1rem] font-bold">
            De: <span className="line-through">R$ 497,00</span>
          </span>
        </p>

        <p className="inline-block bg-verde/10 text-verde font-extrabold text-[0.95rem] px-4 py-1.5 rounded-md mt-2">
          VOCÊ ECONOMIZA R$ 430 — paga apenas R$ 67
        </p>

        <p className="text-[1.1rem] mb-1 mt-3">
          12x de <strong className="text-[2.8rem] md:text-[3.2rem] font-black text-marrom-dark leading-none">R$ 6,93</strong>
        </p>

        <div className="inline-block bg-marrom-dark/80 text-background text-[1.3rem] font-black px-8 py-3 rounded-xl my-4">
          OU R$ 67 NO PIX
        </div>

        <div className="mt-5">
          <Button
            variant="ctaCoral"
            size="lg"
            data-cta="primary"
            className="text-[0.9rem] md:text-[1rem] px-8 py-6 md:py-7 w-full leading-tight whitespace-normal h-auto font-extrabold"
            onClick={async () => {
              await sendTrackingEnrichment({ value: 67, contentName: 'Guia Meu Filho Vai Falar' });
              fbEvents.initiateCheckout();
              await new Promise(r => setTimeout(r, 200));
              const url = buildKiwifyCheckoutUrl(CTA_LINK);
              window.location.href = url;
            }}
          >
            QUERO DESTRAVAR A FALA DO MEU FILHO →
          </Button>
        </div>

        <div className="mt-4 flex justify-center">
          <GuaranteeBadge />
        </div>

        <p className="text-[0.85rem] text-primary/60 mt-3 font-semibold">
          📲 RECEBA ACESSO IMEDIATO NO EMAIL
        </p>
      </div>
    </div>
  );
};

export default PricingBlock;
