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

const TITLE = "Mi Hijo Va a Hablar - Guía para Mamás de España";
const DESCRIPTION =
  "Mientras esperas tu cita de logopeda en la Seguridad Social, esta guía te ayuda a estimular el habla de tu hijo desde casa. Método creado por logopeda infantil. Por solo 19,99 € (IVA incluido).";

const setOrCreateMeta = (selector: string, attr: string, value: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const V5Espana = () => {
  useEffect(() => {
    const prevLang = document.documentElement.lang;
    const prevTitle = document.title;
    document.documentElement.lang = "es-ES";
    document.title = TITLE;
    setOrCreateMeta('meta[name="description"]', "name", "description", DESCRIPTION);
    setOrCreateMeta('meta[property="og:locale"]', "property", "og:locale", "es_ES");
    setOrCreateMeta('meta[property="og:title"]', "property", "og:title", TITLE);
    setOrCreateMeta('meta[property="og:description"]', "property", "og:description", DESCRIPTION);

    const fire = () => import("@/lib/fbConversions").then((m) => m.fbEvents.pageView());
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(fire, { timeout: 3000 });
    } else {
      setTimeout(fire, 1000);
    }

    return () => {
      document.documentElement.lang = prevLang;
      document.title = prevTitle;
    };
  }, []);

  return (
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
              QUIERO DESBLOQUEAR EL HABLA DE MI HIJO →
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
  );
};

export default V5Espana;
