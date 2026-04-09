import { useEffect, lazy, Suspense } from "react";
import HeroSection from "@/components/landing/HeroSection";
import VturbPlayer from "@/components/landing/VturbPlayer";
import SocialProofToast from "@/components/landing/SocialProofToast";
import { fbEvents } from "@/lib/fbConversions";
import { Button } from "@/components/ui/button";

const ProvaRapida = lazy(() => import("@/components/landing/ProvaRapida"));
const DorSection = lazy(() => import("@/components/landing/DorSection"));
const ComoFunciona = lazy(() => import("@/components/landing/ComoFunciona"));
const OQueRecebe = lazy(() => import("@/components/landing/OQueRecebe"));
const BonusSection = lazy(() => import("@/components/landing/BonusSection"));
const DepoimentosSection = lazy(() => import("@/components/landing/DepoimentosSection"));
const ParaQuemSection = lazy(() => import("@/components/landing/ParaQuemSection"));
const SobreSection = lazy(() => import("@/components/landing/SobreSection"));
const RecapSection = lazy(() => import("@/components/landing/RecapSection"));
const PrecoSection = lazy(() => import("@/components/landing/PrecoSection"));
const GarantiaSection = lazy(() => import("@/components/landing/GarantiaSection"));
const FinalCTA = lazy(() => import("@/components/landing/FinalCTA"));
const FAQSection = lazy(() => import("@/components/landing/FAQSection"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const V2 = () => {
  useEffect(() => {
    fbEvents.pageView();

    // Vturb delay script: 5min50s = 350 seconds
    const player = document.querySelector("vturb-smartplayer");
    if (player) {
      (player as any).addEventListener("player:ready", function () {
        (player as any).displayHiddenElements(350, [".v2-hidden"], { persist: true });
        setTimeout(() => {
          const hint = document.querySelector(".v2-play-hint");
          if (hint) (hint as HTMLElement).style.display = "none";
        }, 350 * 1000);
      });
    }
  }, []);

  return (
    <main>
      <HeroSection />
      <VturbPlayer />

      <div className="v2-play-hint bg-background px-4 -mt-4 pb-6 text-center">
        <p className="text-purple-400 text-base md:text-lg font-medium animate-pulse">
          👆 Aperte o play e assista agora — é importante!
        </p>
      </div>

      {/* CTA button + rest of page hidden until 5:50 of playback */}
      <div className="v2-hidden" style={{ display: "none" }}>
        <section className="bg-background pb-10 px-4 text-center">
          <div className="max-w-[520px] mx-auto">
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

            <div className="mt-4">
              <Button
                variant="cta"
                size="lg"
                className="text-[0.85rem] md:text-[1rem] px-8 py-5 md:py-6 w-full leading-tight whitespace-normal h-auto text-background font-extrabold"
                asChild
              >
                <a
                  href="https://pay.kiwify.com.br/uXb5s35"
                  onClick={() => fbEvents.initiateCheckout()}
                >
                  QUERO DESTRAVAR A FALA DO MEU FILHO EM 30 DIAS →
                </a>
              </Button>
            </div>

            <p className="text-[0.85rem] text-primary/60 mt-4 font-semibold">
              📲 RECEBA ACESSO IMEDIATO NO EMAIL
            </p>
          </div>
        </section>

        <Suspense fallback={null}>
          <ProvaRapida />
          <DorSection />
          <ComoFunciona />
          <OQueRecebe />
          <BonusSection />
          <DepoimentosSection />

          <section className="bg-background pb-10 px-4 text-center">
            <Button
              variant="cta"
              size="lg"
              className="text-[0.85rem] md:text-[1rem] px-8 py-5 md:py-6 w-full md:w-auto max-w-[600px] leading-tight whitespace-normal h-auto"
              asChild
            >
              <a
                href="#recapitulando"
                onClick={() => fbEvents.initiateCheckout()}
              >
                QUERO DESTRAVAR A FALA DO MEU FILHO EM 30 DIAS →
              </a>
            </Button>
          </section>

          <ParaQuemSection />
          <RecapSection />
          <PrecoSection />
          <FinalCTA />
          <SobreSection />
          <GarantiaSection />
          <FAQSection />
          <Footer />
        </Suspense>
      </div>
      <SocialProofToast />
    </main>
  );
};

export default V2;
