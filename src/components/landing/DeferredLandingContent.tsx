import OQueRecebe from "./OQueRecebe";
import BonusSection from "./BonusSection";
import DepoimentosSection from "./DepoimentosSection";
import ParaQuemSection from "./ParaQuemSection";
import RecapSection from "./RecapSection";
import PrecoSection from "./PrecoSection";
import FinalCTA from "./FinalCTA";
import SobreSection from "./SobreSection";
import GarantiaSection from "./GarantiaSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import SocialProofToast from "./SocialProofToast";
import UnmuteOverlay from "./UnmuteOverlay";

const DeferredLandingContent = () => (
  <>
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
    <SocialProofToast />
    <UnmuteOverlay />
  </>
);

export default DeferredLandingContent;