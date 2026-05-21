import { useEffect, lazy, Suspense } from "react";

import HeroSectionSpain from "@/components/landing/es-spain/HeroSectionSpain";
import VturbPlayer from "@/components/landing/VturbPlayerV5";
import { Button } from "@/components/ui/button";

const SocialProofToastSpain = lazy(() => import("@/components/landing/es-spain/SocialProofToastSpain"));
const UnmuteOverlay = lazy(() => import("@/components/landing/UnmuteOverlay"));

const ProvaRapidaSpain = lazy(() => import("@/components/landing/es-spain/ProvaRapidaSpain"));
const DorSectionSpain = lazy(() => import("@/components/landing/es-spain/DorSectionSpain"));
const ComoFuncionaSpain = lazy(() => import("@/components/landing/es-spain/ComoFuncionaSpain"));
const OQueRecebeSpain = lazy(() => import("@/components/landing/es-spain/OQueRecebeSpain"));
const BonusSectionSpain = lazy(() => import("@/components/landing/es-spain/BonusSectionSpain"));
const DepoimentosSectionSpain = lazy(() => import("@/components/landing/es-spain/DepoimentosSectionSpain"));
const ParaQuemSectionSpain = lazy(() => import("@/components/landing/es-spain/ParaQuemSectionSpain"));
const SobreSectionSpain = lazy(() => import("@/components/landing/es-spain/SobreSectionSpain"));
const RecapSectionSpain = lazy(() => import("@/components/landing/es-spain/RecapSectionSpain"));
const PrecoSectionSpain = lazy(() => import("@/components/landing/es-spain/PrecoSectionSpain"));
const GarantiaSectionSpain = lazy(() => import("@/components/landing/es-spain/GarantiaSectionSpain"));
const FinalCTASpain = lazy(() => import("@/components/landing/es-spain/FinalCTASpain"));
const FAQSectionSpain = lazy(() => import("@/components/landing/es-spain/FAQSectionSpain"));
const FooterSpain = lazy(() => import("@/components/landing/es-spain/FooterSpain"));

const V5Espana = () => {
  useEffect(() => {
    document.documentElement.lang = "es-ES";
    const fire = () => import("@/lib/fbConversions").then((m) => m.fbEvents.pageView());
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(fire, { timeout: 3000 });
    } else {
      setTimeout(fire, 1000);
    }
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="es-ES" />
        <title>Mi Hijo Va a Hablar - Guía para Mamás de España</title>
        <meta
          name="description"
          content="Mientras esperas tu cita de logopeda en la Seguridad Social, esta guía te ayuda a estimular el habla de tu hijo desde casa. Método creado por logopeda infantil. Por solo 19,99 € (IVA incluido)."
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content="Mi Hijo Va a Hablar - Guía para Mamás de España" />
        <meta
          property="og:description"
          content="Haz estos ajustes en la rutina de tu hijo durante 15 minutos al día y velo formar sus primeras frases en hasta 30 días."
        />
      </Helmet>
      <main>
        <HeroSectionSpain />
        <VturbPlayer />
        <Suspense fallback={null}>
          <ProvaRapidaSpain />
          <DorSectionSpain />
          <ComoFuncionaSpain />
          <OQueRecebeSpain />
          <BonusSectionSpain />
          <DepoimentosSectionSpain />

          <section className="bg-background pb-10 px-4 text-center">
            <Button
              variant="cta"
              size="lg"
              className="text-[0.85rem] md:text-[1rem] px-8 py-5 md:py-6 w-full md:w-auto max-w-[600px] leading-tight whitespace-normal h-auto"
              asChild
            >
              <a
                href="#preco"
                onClick={() => import("@/lib/fbConversions").then((m) => m.fbEvents.initiateCheckout())}
              >
                QUIERO DESBLOQUEAR EL HABLA DE MI HIJO POR 19,99 € →
              </a>
            </Button>
          </section>

          <ParaQuemSectionSpain />
          <RecapSectionSpain />
          <PrecoSectionSpain />
          <FinalCTASpain />
          <SobreSectionSpain />
          <GarantiaSectionSpain />
          <FAQSectionSpain />
          <FooterSpain />
        </Suspense>
        <Suspense fallback={null}>
          <SocialProofToastSpain />
          <UnmuteOverlay />
        </Suspense>
      </main>
    </HelmetProvider>
  );
};

export default V5Espana;
