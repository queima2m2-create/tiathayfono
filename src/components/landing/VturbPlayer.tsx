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
        "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6a173b5092e602d534b94dd1/v4/player.js";
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
    <section className="bg-background pt-2 pb-8 md:pt-4 md:pb-12 px-4">
      {/* @ts-ignore – custom Vturb web component */}
      <vturb-smartplayer
        id="vid-6a173b5092e602d534b94dd1"
        data-autoplay="true"
        style={{
          display: "block",
          margin: "0 auto",
          width: "100%",
          maxWidth: "400px",
        }}
      />
    </section>
  );
};

export default VturbPlayer;
