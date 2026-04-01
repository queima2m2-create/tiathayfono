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

const Index = () => {
  useEffect(() => {
    fbEvents.pageView();
  }, []);

  return (
    <main>
      <HeroSection />
      <ProvaRapida />
      <DorSection />
      <ComoFunciona />
      <OQueRecebe />
      <BonusSection />
      <DepoimentosSection />
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
