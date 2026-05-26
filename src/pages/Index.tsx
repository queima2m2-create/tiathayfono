import { useEffect, lazy, Suspense } from "react";
import HeroSection from "@/components/landing/HeroSection";
import VturbPlayer from "@/components/landing/VturbPlayer";
import { Button } from "@/components/ui/button";
import GuaranteeBadge from "@/components/landing/GuaranteeBadge";

const SocialProofToast = lazy(() => import("@/components/landing/SocialProofToast"));
const UnmuteOverlay = lazy(() => import("@/components/landing/UnmuteOverlay"));

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

const Index = () => {
  useEffect(() => {
    const fire = () => import("@/lib/fbConversions").then((m) => m.fbEvents.pageView());
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(fire, { timeout: 3000 });
    } else {
      setTimeout(fire, 1000);
    }
  }, []);

  return (
    <main className="pb-20 md:pb-0">
      <HeroSection />
      <VturbPlayer />

      {/* CTA imediatamente abaixo do VSL (sem preço) */}
      <section className="bg-background px-4 pt-2 pb-8 md:pb-10 text-center">
        <div className="max-w-[600px] mx-auto flex flex-col items-center gap-3">
          <Button
            variant="ctaCoral"
            size="lg"
            data-cta="primary"
            className="text-[0.95rem] md:text-[1.1rem] px-8 py-5 md:py-6 w-full leading-tight whitespace-normal h-auto font-extrabold"
            asChild
          >
            <a href="#oferta">QUERO DESTRAVAR A FALA DO MEU FILHO →</a>
          </Button>
          <p className="text-[0.78rem] md:text-[0.85rem] text-primary/60 font-medium">
            🛡️ Acesso imediato · Garantia 30 dias · Risco zero
          </p>
          <GuaranteeBadge />
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
          <div className="max-w-[600px] mx-auto flex flex-col items-center gap-3">
            <Button
              variant="ctaCoral"
              size="lg"
              data-cta="primary"
              className="text-[0.85rem] md:text-[1rem] px-8 py-5 md:py-6 w-full leading-tight whitespace-normal h-auto font-extrabold"
              asChild
            >
              <a href="#oferta">
                QUERO DESTRAVAR A FALA DO MEU FILHO EM 30 DIAS →
              </a>
            </Button>
            <GuaranteeBadge />
          </div>
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
      <Suspense fallback={null}>
        <SocialProofToast />
        <UnmuteOverlay />
      </Suspense>
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
