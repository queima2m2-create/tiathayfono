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

const Index = () => {
  useEffect(() => {
    fbEvents.pageView();
  }, []);

  return (
    <main>
      <HeroSection />
      <VturbPlayer />
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
      <SocialProofToast />
    </main>
  );
};

export default Index;
