import { useEffect, lazy, Suspense, useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import VturbPlayer from "@/components/landing/VturbPlayer";
import ProvaRapida from "@/components/landing/ProvaRapida";

const SocialProofToast = lazy(() => import("@/components/landing/SocialProofToast"));
const UnmuteOverlay = lazy(() => import("@/components/landing/UnmuteOverlay"));

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
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const fire = () => import("@/lib/fbConversions").then((m) => m.fbEvents.pageView());
    const schedule = () => setTimeout(fire, 1);
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => window.removeEventListener("load", schedule);
  }, []);

  useEffect(() => {
    const reveal = () => setShowRest(true);
    const timer = window.setTimeout(reveal, 150);
    window.addEventListener("scroll", reveal, { once: true, passive: true });
    window.addEventListener("pointerdown", reveal, { once: true, passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("pointerdown", reveal);
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <VturbPlayer />
      <ProvaRapida />
      {showRest && (
        <Suspense fallback={null}>
          <DorSection />
          <ComoFunciona />
          <OQueRecebe />
          <BonusSection />
          <DepoimentosSection />

          <section className="bg-background pb-10 px-4 text-center">
            <a
              href="#recapitulando"
              onClick={() => import("@/lib/fbConversions").then((m) => m.fbEvents.initiateCheckout())}
              className="inline-flex items-center justify-center rounded-full bg-verde px-8 py-5 md:py-6 text-[0.85rem] md:text-[1rem] font-bold uppercase tracking-wide text-background shadow-lg shadow-verde/30 animate-pulse-glow w-full md:w-auto max-w-[600px] leading-tight"
            >
              QUERO DESTRAVAR A FALA DO MEU FILHO EM 30 DIAS →
            </a>
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
      )}
      {showRest && (
        <Suspense fallback={null}>
          <SocialProofToast />
          <UnmuteOverlay />
        </Suspense>
      )}
    </main>
  );
};

export default V2;
