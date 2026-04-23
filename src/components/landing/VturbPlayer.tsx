import { useEffect, useRef } from "react";

const VturbPlayer = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    let idleId: number | null = null;
    let frameId: number | null = null;
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const injectPlayer = () => {
      if (document.querySelector('script[data-vturb-player="landing-v1-v2"]')) return;

      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6898af1550270c783e275378/v4/player.js";
      s.async = true;
      s.dataset.vturbPlayer = "landing-v1-v2";
      document.body.appendChild(s);
    };

    const schedulePlayer = () => {
      frameId = window.requestAnimationFrame(() => {
        if (idleWindow.requestIdleCallback) {
          idleId = idleWindow.requestIdleCallback(injectPlayer, { timeout: 1200 });
        } else {
          window.setTimeout(injectPlayer, 700);
        }
      });
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", schedulePlayer, { once: true });
    } else {
      schedulePlayer();
    }

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      if (idleId !== null && idleWindow.cancelIdleCallback) idleWindow.cancelIdleCallback(idleId);
      document.removeEventListener("DOMContentLoaded", schedulePlayer);
    };
  }, []);

  return (
    <section className="initial-video bg-background py-8 md:py-12 px-4">
      <div className="initial-video__inner max-w-[800px] mx-auto">
        <div className="initial-video__box rounded-2xl overflow-hidden bg-primary" style={{ aspectRatio: "16/9" }}>
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
