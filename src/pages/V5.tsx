import { useEffect, lazy, Suspense } from "react";
import HeroSectionEs from "@/components/landing/es/HeroSectionEs";
import VturbPlayer from "@/components/landing/VturbPlayer";
import { Button } from "@/components/ui/button";

const SocialProofToastEs = lazy(() => import("@/components/landing/es/SocialProofToastEs"));
const UnmuteOverlay = lazy(() => import("@/components/landing/UnmuteOverlay"));

const ProvaRapidaEs = lazy(() => import("@/components/landing/es/ProvaRapidaEs"));
const DorSectionEs = lazy(() => import("@/components/landing/es/DorSectionEs"));
const ComoFuncionaEs = lazy(() => import("@/components/landing/es/ComoFuncionaEs"));
const OQueRecebeEs = lazy(() => import("@/components/landing/es/OQueRecebeEs"));
const BonusSectionEs = lazy(() => import("@/components/landing/es/BonusSectionEs"));
const DepoimentosSectionEs = lazy(() => import("@/components/landing/es/DepoimentosSectionEs"));
const ParaQuemSectionEs = lazy(() => import("@/components/landing/es/ParaQuemSectionEs"));
const SobreSectionEs = lazy(() => import("@/components/landing/es/SobreSectionEs"));
const RecapSectionEs = lazy(() => import("@/components/landing/es/RecapSectionEs"));
const PrecoSectionEs = lazy(() => import("@/components/landing/es/PrecoSectionEs"));
const GarantiaSectionEs = lazy(() => import("@/components/landing/es/GarantiaSectionEs"));
const FinalCTAEs = lazy(() => import("@/components/landing/es/FinalCTAEs"));
const FAQSectionEs = lazy(() => import("@/components/landing/es/FAQSectionEs"));
const FooterEs = lazy(() => import("@/components/landing/es/FooterEs"));

const V5 = () => {
  useEffect(() => {
    const fire = () => import("@/lib/fbConversions").then((m) => m.fbEvents.pageView());
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(fire, { timeout: 3000 });
    } else {
      setTimeout(fire, 1000);
    }
  }, []);

  return (
    <main>
      <HeroSectionEs />
      <VturbPlayer />
      <Suspense fallback={null}>
        <ProvaRapidaEs />
        <DorSectionEs />
        <ComoFuncionaEs />
        <OQueRecebeEs />
        <BonusSectionEs />
        <DepoimentosSectionEs />

        <section className="bg-background pb-10 px-4 text-center">
          <Button
            variant="cta"
            size="lg"
            className="text-[0.85rem] md:text-[1rem] px-8 py-5 md:py-6 w-full md:w-auto max-w-[600px] leading-tight whitespace-normal h-auto"
            asChild
          >
            <a
              href="#recapitulando"
              onClick={() => import("@/lib/fbConversions").then((m) => m.fbEvents.initiateCheckout())}
            >
              QUIERO DESBLOQUEAR EL HABLA DE MI HIJO EN 30 DÍAS →
            </a>
          </Button>
        </section>

        <ParaQuemSectionEs />
        <RecapSectionEs />
        <PrecoSectionEs />
        <FinalCTAEs />
        <SobreSectionEs />
        <GarantiaSectionEs />
        <FAQSectionEs />
        <FooterEs />
      </Suspense>
      <Suspense fallback={null}>
        <SocialProofToastEs />
        <UnmuteOverlay />
      </Suspense>
    </main>
  );
};

export default V5;
