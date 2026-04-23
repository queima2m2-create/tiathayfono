import { useEffect, useRef } from "react";

const VturbPlayer = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    // The script is already being downloaded via <link rel="preload"> in index.html.
    // We only decide WHEN to execute it. Following the WP Rocket pattern used by
    // high-performing VSL landing pages: load on first user interaction OR after a
    // short timeout — whichever comes first. This keeps the main thread free for
    // the initial paint, so the page feels instant.
    const load = () => {
      if (loaded.current) return;
      loaded.current = true;
      cleanup();
      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6898af1550270c783e275378/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    };

    const events: (keyof WindowEventMap)[] = [
      "touchstart",
      "pointerdown",
      "mousedown",
      "keydown",
      "scroll",
      "wheel",
    ];

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, load, { capture: true } as any));
      if (timeoutId) clearTimeout(timeoutId);
      if (idleId && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleId);
      }
    };

    events.forEach((e) =>
      window.addEventListener(e, load, { capture: true, once: true, passive: true })
    );

    // Fallback: if the user doesn't interact, load it anyway so the video plays automatically.
    // 900 ms is short enough that the user perceives "a beat after the page paints".
    let timeoutId: ReturnType<typeof setTimeout> | null = setTimeout(load, 900);
    let idleId: number | null = null;
    if ("requestIdleCallback" in window) {
      idleId = (window as any).requestIdleCallback(load, { timeout: 900 });
    }

    return cleanup;
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
