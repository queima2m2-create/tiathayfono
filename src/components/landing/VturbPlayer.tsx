import { useEffect, useRef } from "react";

const VturbPlayer = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // The script is already being downloaded via <link rel="preload"> in index.html.
    // We only control WHEN it runs. Running immediately blocks the main thread and
    // hurts TBT; idle-callback with a short deadline keeps TBT low while still
    // starting the video quickly.
    const load = () => {
      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6898af1550270c783e275378/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(load, { timeout: 400 });
    } else {
      setTimeout(load, 200);
    }
  }, []);

  return (
    <section className="bg-background py-8 md:py-12 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", background: "#000" }}>
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
