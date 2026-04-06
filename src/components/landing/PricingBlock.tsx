import { Button } from "@/components/ui/button";
import { fbEvents } from "@/lib/fbConversions";
import produtoMockup from "@/assets/produto-mockup.jpg";

const CTA_LINK = "https://pay.kiwify.com.br/uXb5s35";

const getToday = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}`;
};

const PricingBlock = ({ className = "", showUrgency = true }: { className?: string; showUrgency?: boolean }) => (
  <div className={`text-center max-w-[520px] mx-auto ${className}`}>
    <div className="bg-background text-marrom-dark rounded-2xl p-8 md:p-10 shadow-xl">
      {showUrgency && (
        <span className="inline-block bg-vermelho text-background text-[0.85rem] font-bold px-6 py-2.5 rounded-lg mb-5">
          ⏰ Condição válida somente até {getToday()}
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

      <p className="text-[1.1rem] mb-1 mt-3">
        12x de <strong className="text-[2.8rem] md:text-[3.2rem] font-black text-marrom-dark leading-none">R$ 6,93</strong>
      </p>

      <div className="inline-block bg-marrom-dark/80 text-background text-[1.3rem] font-black px-8 py-3 rounded-xl my-4">
        OU R$ 67 NO PIX
      </div>

      <div className="mt-5">
        <Button variant="cta" size="lg" className="text-[0.9rem] md:text-[1rem] px-8 py-6 md:py-7 w-full leading-tight whitespace-normal h-auto text-background font-extrabold" asChild>
          <a href={CTA_LINK} onClick={() => fbEvents.initiateCheckout()}>QUERO DESTRAVAR A FALA DO MEU FILHO EM 30 DIAS</a>
        </Button>
      </div>

      <p className="text-[0.85rem] text-primary/60 mt-4 font-semibold">
        📲 RECEBA ACESSO IMEDIATO NO EMAIL
      </p>
    </div>
  </div>
);

export default PricingBlock;
