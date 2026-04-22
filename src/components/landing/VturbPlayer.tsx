import { useEffect, useRef } from "react";

const VturbPlayer = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const load = () => {
      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6898af1550270c783e275378/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    };

    // Defer heavy video script so the landing page paints and ad traffic connects first
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(load, { timeout: 7000 });
    } else {
      setTimeout(load, 5500);
    }
  }, []);

  return (
    <section className="bg-background py-8 md:py-12 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="rounded-2xl overflow-hidden bg-foreground" style={{ aspectRatio: "16/9" }}>
          {/* @ts-ignore – custom Vturb web component */}
          <vturb-smartplayer
            id="vid-6898af1550270c783e275378"
            data-autoplay="true"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default VturbPlayer;
