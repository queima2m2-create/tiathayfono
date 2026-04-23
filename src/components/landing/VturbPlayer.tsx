import { useEffect, useRef } from "react";

const VturbPlayer = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const load = () => {
      if (document.querySelector('script[data-vturb-player="landing-v1-v2"]')) return;

      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6898af1550270c783e275378/v4/player.js";
      s.async = true;
      s.dataset.vturbPlayer = "landing-v1-v2";
      document.head.appendChild(s);
    };

    const timer = window.setTimeout(load, 900);
    window.addEventListener("pointerdown", load, { once: true, passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", load);
    };
  }, []);

  return (
    <section className="initial-video bg-background py-8 md:py-12 px-4">
      <div className="initial-video__inner max-w-[800px] mx-auto">
        <div className="initial-video__box rounded-2xl overflow-hidden bg-muted" style={{ aspectRatio: "16/9" }}>
          {/* @ts-ignore – custom Vturb web component */}
          <vturb-smartplayer
            id="vid-6898af1550270c783e275378"
            data-autoplay="true"
            style={{ display: "block", margin: "0 auto", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default VturbPlayer;
