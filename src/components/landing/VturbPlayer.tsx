import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { fbEvents } from "@/lib/fbConversions";

const VturbPlayer = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src =
      "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6898af1550270c783e275378/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);

  return (
    <section className="bg-background py-8 md:py-12 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="rounded-2xl overflow-hidden">
          {/* @ts-ignore – custom Vturb web component */}
          <vturb-smartplayer
            id="vid-6898af1550270c783e275378"
            data-autoplay="true"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          />
        </div>

        <div className="mt-6 text-center">
          <Button
            variant="cta"
            size="lg"
            className="text-[0.85rem] md:text-[1rem] px-8 py-5 md:py-6 w-full md:w-auto leading-tight whitespace-normal h-auto"
            asChild
          >
            <a
              href="#preco"
              onClick={() => fbEvents.initiateCheckout()}
            >
              QUERO DESTRAVAR A FALA DO MEU FILHO EM 30 DIAS →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VturbPlayer;
