import { useEffect } from "react";
import HeroSection from "@/components/landing/HeroSection";
import VturbPlayer from "@/components/landing/VturbPlayer";
import ProvaRapida from "@/components/landing/ProvaRapida";
import DorSection from "@/components/landing/DorSection";
import ComoFunciona from "@/components/landing/ComoFunciona";
import OQueRecebe from "@/components/landing/OQueRecebe";
import BonusSection from "@/components/landing/BonusSection";
import DepoimentosSection from "@/components/landing/DepoimentosSection";
import ParaQuemSection from "@/components/landing/ParaQuemSection";
import SobreSection from "@/components/landing/SobreSection";
import RecapSection from "@/components/landing/RecapSection";
import PrecoSection from "@/components/landing/PrecoSection";
import GarantiaSection from "@/components/landing/GarantiaSection";
import FinalCTA from "@/components/landing/FinalCTA";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import { fbEvents } from "@/lib/fbConversions";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    fbEvents.pageView();
  }, []);

  return (
    <main>
      <HeroSection />
      <VturbPlayer />
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
            href="#preco"
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
    </main>
  );
};

export default Index;
