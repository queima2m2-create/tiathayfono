import { useEffect, useRef } from "react";

const VturbPlayer = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    let timeoutId: number | undefined;
    let idleId: number | undefined;

    const load = () => {
      if (document.querySelector('script[data-vturb-player="landing-v1-v2"]')) return;

      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6898af1550270c783e275378/v4/player.js";
      s.async = true;
      s.dataset.vturbPlayer = "landing-v1-v2";
      document.head.appendChild(s);
    };

    const scheduleLoad = () => {
      const requestIdle = window.requestIdleCallback ?? ((cb: IdleRequestCallback) => window.setTimeout(cb, 1600));
      idleId = requestIdle(load, { timeout: 2500 });
    };

    const loadOnInteraction = () => load();
    window.addEventListener("pointerdown", loadOnInteraction, { once: true, passive: true });
    window.addEventListener("keydown", loadOnInteraction, { once: true });

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scheduleLoad);
    });

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      window.removeEventListener("pointerdown", loadOnInteraction);
      window.removeEventListener("keydown", loadOnInteraction);
    };
  }, []);

  return (
    <section className="bg-background py-8 md:py-12 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="rounded-2xl overflow-hidden bg-muted" style={{ aspectRatio: "16/9" }}>
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
