import { useEffect, useRef } from "react";

const VturbPlayer = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // The player script and the first .m3u8 segment are preloaded in index.html,
    // so they're already in the browser cache when we get here. All we need to
    // do is *execute* the script. We run it in a rAF right after React's first
    // paint so it doesn't compete with hero rendering, but also doesn't add a
    // long defer that users perceive as "video is stuck on black". With the
    // DO backend this ends up being ~50-150 ms after the hero text paints.
    const load = () => {
      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6a173562c4c8455581ac0313/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    };

    if (typeof requestAnimationFrame !== "undefined") {
      requestAnimationFrame(() => requestAnimationFrame(load));
    } else {
      load();
    }
  }, []);

  return (
    <section className="bg-background py-8 md:py-12 px-4">
      <div className="max-w-[539px] mx-auto">
        <div
          className="rounded-2xl overflow-hidden relative w-full"
          style={{ aspectRatio: "1078/1534", background: "#000" }}
        >
          {/* @ts-ignore – custom Vturb web component */}
          <vturb-smartplayer
            id="vid-6a173562c4c8455581ac0313"
            data-autoplay="true"
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VturbPlayer;
