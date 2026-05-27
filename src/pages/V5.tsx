import { useEffect, lazy, Suspense } from "react";
import HeroSectionEs from "@/components/landing/es/HeroSectionEs";
import VturbPlayer from "@/components/landing/VturbPlayerV5";
import { Button } from "@/components/ui/button";
import GuaranteeBadgeEs from "@/components/landing/es/GuaranteeBadgeEs";

const SocialProofToastEs = lazy(() => import("@/components/landing/es/SocialProofToastEs"));
const UnmuteOverlay = lazy(() => import("@/components/landing/UnmuteOverlay"));

const ProvaRapidaEs = lazy(() => import("@/components/landing/es/ProvaRapidaEs"));
const DorSectionEs = lazy(() => import("@/components/landing/es/DorSectionEs"));
const ConhecaThaynaraEs = lazy(() => import("@/components/landing/es/ConhecaThaynaraEs"));
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

      {/* CTA inmediatamente debajo del VSL (sin precio) */}
      <section className="bg-background px-4 pt-2 pb-8 md:pb-10 text-center">
        <div className="max-w-[600px] mx-auto flex flex-col items-center gap-3">
          <Button
            variant="ctaCoral"
            size="lg"
            data-cta="primary"
            className="text-[0.95rem] md:text-[1.1rem] px-8 py-5 md:py-6 w-full leading-tight whitespace-normal h-auto font-extrabold"
            asChild
          >
            <a href="#entregas">QUIERO DESTRABAR EL HABLA DE MI HIJO →</a>
          </Button>
          <p className="text-[0.78rem] md:text-[0.85rem] text-primary/60 font-medium">
            🛡️ Acceso inmediato · Garantía 30 días · Riesgo cero
          </p>
          <GuaranteeBadgeEs />
        </div>
      </section>

      <Suspense fallback={null}>
        <ProvaRapidaEs />
        <DorSectionEs />
        <ConhecaThaynaraEs />
        <ComoFuncionaEs />
        <OQueRecebeEs />
        <BonusSectionEs />
        <DepoimentosSectionEs />

        <section className="bg-background pb-10 px-4 text-center">
          <div className="max-w-[600px] mx-auto flex flex-col items-center gap-3">
            <Button
              variant="ctaCoral"
              size="lg"
              data-cta="primary"
              className="text-[0.85rem] md:text-[1rem] px-8 py-5 md:py-6 w-full leading-tight whitespace-normal h-auto font-extrabold"
              asChild
            >
              <a
                href="#recapitulando"
                onClick={() => import("@/lib/fbConversions").then((m) => m.fbEvents.initiateCheckout())}
              >
                QUIERO DESTRABAR EL HABLA DE MI HIJO →
              </a>
            </Button>
            <GuaranteeBadgeEs />
          </div>
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
