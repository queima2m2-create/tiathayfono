import { Button } from "@/components/ui/button";
import { buildKiwifyCheckoutUrl, sendTrackingEnrichment } from "@/lib/kiwifyUrl";
import produtoMockup from "@/assets/es/produto-mockup-precos-es.jpeg";
import GuaranteeBadgeEs from "./GuaranteeBadgeEs";

const CTA_LINK = "https://pay.kiwify.com/6tBcvSl";

const PricingBlockEs = ({ className = "", showUrgency = true }: { className?: string; showUrgency?: boolean }) => {
  return (
    <div className={`text-center max-w-[520px] mx-auto ${className}`}>
      <div className="bg-background text-marrom-dark rounded-2xl p-8 md:p-10 shadow-xl">
        {showUrgency && (
          <span className="inline-block bg-coral text-white text-[0.8rem] md:text-[0.9rem] font-bold px-5 py-2.5 rounded-lg mb-5">
            🔥 Oferta de lanzamiento válida hasta 31/05/2026
          </span>
        )}

        <div className="w-full max-w-[320px] mx-auto mb-4 aspect-video rounded-2xl overflow-hidden drop-shadow-lg">
          <img
            src={produtoMockup}
            alt="Guía completa - Método Parlanchín"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>

        <p className="text-[1rem] mb-2 font-semibold">
          <span className="bg-vermelho text-background px-3 py-1 rounded-md text-[1.1rem] font-bold">
            De: <span className="line-through">$97 USD</span>
          </span>
        </p>

        <p className="inline-block bg-verde/10 text-verde font-extrabold text-[0.95rem] px-4 py-1.5 rounded-md mt-2">
          AHORRAS más del 80%
        </p>

        <p className="text-[1.1rem] mb-1 mt-3">
          Por solo <strong className="text-[2.8rem] md:text-[3.2rem] font-black text-marrom-dark leading-none">$14,99</strong>
        </p>

        <div className="inline-block bg-marrom-dark/80 text-background text-[1.3rem] font-black px-8 py-3 rounded-xl mt-4">
          PAGO ÚNICO
        </div>
        <p className="italic text-[0.85rem] text-[#888888] mt-1.5 mb-4 text-center">
          El cobro se convierte automáticamente a tu moneda local
        </p>

        <div className="mt-5">
          <Button
            variant="ctaCoral"
            size="lg"
            data-cta="primary"
            className="text-[0.9rem] md:text-[1rem] px-8 py-6 md:py-7 w-full leading-tight whitespace-normal h-auto font-extrabold"
            onClick={async () => {
              await sendTrackingEnrichment({ value: 14.99, contentName: 'Mi Hijo Va a Hablar' });
              if (typeof (window as any).fbq !== 'undefined') {
                (window as any).fbq('track', 'InitiateCheckout', {
                  value: 14.99,
                  currency: 'USD',
                  content_name: 'Mi Hijo Va a Hablar',
                  content_type: 'product',
                });
              }
              await new Promise(r => setTimeout(r, 200));
              window.location.href = buildKiwifyCheckoutUrl(CTA_LINK);
            }}
          >
            QUIERO DESTRABAR EL HABLA DE MI HIJO →
          </Button>
        </div>

        <div className="mt-4 flex justify-center">
          <GuaranteeBadgeEs />
        </div>

        <p className="text-[0.85rem] text-primary/60 mt-3 font-semibold">
          📲 RECIBE ACCESO INMEDIATO EN TU EMAIL
        </p>
      </div>
    </div>
  );
};

export default PricingBlockEs;
