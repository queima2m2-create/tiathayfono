import { useEffect, useRef } from "react";

const VturbPlayerV5 = () => {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const load = () => {
      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/69efc2df3fdd3d20d10403ab/v4/player.js";
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
      <div className="max-w-[800px] mx-auto">
        <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", background: "#000" }}>
          {/* @ts-ignore */}
          <vturb-smartplayer
            id="vid-69efc2df3fdd3d20d10403ab"
            data-autoplay="true"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default VturbPlayerV5;
