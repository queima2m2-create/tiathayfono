import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { fbEvents } from "@/lib/fbConversions";
import produtoMockup from "@/assets/produto-mockup.jpg";

const CTA_LINK = "https://pay.kiwify.com.br/uXb5s35";

const TIMER_KEY = "pricing_timer_start_es";
const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

const getTimeLeft = () => {
  let start = localStorage.getItem(TIMER_KEY);
  if (!start) {
    start = String(Date.now());
    localStorage.setItem(TIMER_KEY, start);
  }
  const elapsed = Date.now() - Number(start);
  const remaining = Math.max(0, TWENTY_FOUR_HOURS - elapsed);
  return remaining;
};

const formatTime = (ms: number) => {
  const totalSec = Math.floor(ms / 1000);
  const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
  const s = String(totalSec % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

const PricingBlockEs = ({ className = "", showUrgency = true }: { className?: string; showUrgency?: boolean }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    if (!showUrgency) return;
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, [showUrgency]);

  return (
    <div className={`text-center max-w-[520px] mx-auto ${className}`}>
      <div className="bg-background text-marrom-dark rounded-2xl p-8 md:p-10 shadow-xl">
        {showUrgency && (
          <span className="inline-block bg-vermelho text-background text-[0.85rem] font-bold px-6 py-2.5 rounded-lg mb-5">
            ⏰ La oferta expira en: {formatTime(timeLeft)}
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
            De: <span className="line-through">$137 USD</span>
          </span>
        </p>

        <p className="text-[1.1rem] mb-1 mt-3">
          Por solo <strong className="text-[2.8rem] md:text-[3.2rem] font-black text-marrom-dark leading-none">$19,99</strong>
        </p>

        <div className="inline-block bg-marrom-dark/80 text-background text-[1.3rem] font-black px-8 py-3 rounded-xl my-4">
          PAGO ÚNICO EN USD
        </div>

        <div className="mt-5">
          <Button variant="cta" size="lg" className="text-[0.9rem] md:text-[1rem] px-8 py-6 md:py-7 w-full leading-tight whitespace-normal h-auto text-background font-extrabold" asChild>
            <a href={CTA_LINK} onClick={() => fbEvents.initiateCheckout()}>QUIERO DESBLOQUEAR EL HABLA DE MI HIJO EN 30 DÍAS</a>
          </Button>
        </div>

        <p className="text-[0.85rem] text-primary/60 mt-4 font-semibold">
          📲 RECIBE ACCESO INMEDIATO EN TU EMAIL
        </p>
      </div>
    </div>
  );
};

export default PricingBlockEs;
