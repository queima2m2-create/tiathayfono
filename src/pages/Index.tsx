import { useEffect, lazy, Suspense, useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import VturbPlayer from "@/components/landing/VturbPlayer";
import ProvaRapida from "@/components/landing/ProvaRapida";
import DorSection from "@/components/landing/DorSection";
import ComoFunciona from "@/components/landing/ComoFunciona";

const DeferredLandingContent = lazy(() => import("@/components/landing/DeferredLandingContent"));

const Index = () => {
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const fire = () => import("@/lib/fbConversions").then((m) => m.fbEvents.pageView());
    const schedule = () => setTimeout(fire, 1);
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => window.removeEventListener("load", schedule);
  }, []);

  useEffect(() => {
    let timeoutId: number | null = null;
    let idleId: number | null = null;

    const revealRest = () => setShowRest(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(revealRest, { timeout: 1800 });
    } else {
      timeoutId = window.setTimeout(revealRest, 1200);
    }

    window.addEventListener("scroll", revealRest, { once: true, passive: true });
    window.addEventListener("pointerdown", revealRest, { once: true, passive: true });

    return () => {
      if (timeoutId !== null) window.clearTimeout(timeoutId);
      if (idleId !== null && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      window.removeEventListener("scroll", revealRest);
      window.removeEventListener("pointerdown", revealRest);
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <VturbPlayer />
      <ProvaRapida />
      <DorSection />
      <ComoFunciona />
      {showRest && (
        <Suspense fallback={null}>
          <DeferredLandingContent />
        </Suspense>
      )}
    </main>
  );
};

export default Index;
