import { useEffect, useRef, useState } from "react";
import thaynaraFoto from "@/assets/thaynara-foto.webp";

const VturbPlayer = () => {
  const loaded = useRef(false);
  const playerRef = useRef<HTMLElement | null>(null);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    let timeoutId: number | undefined;

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
      timeoutId = window.setTimeout(load, 150);
    };

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scheduleLoad);
    });

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    let released = false;
    let pollId: number | undefined;
    let fallbackId: number | undefined;

    const releaseOverlay = () => {
      if (released) return;
      released = true;
      setPlayerReady(true);
    };

    const bindPlayerSignals = () => {
      const host = playerRef.current;
      if (!host) return false;

      const video = host.querySelector("video") as HTMLVideoElement | null;
      if (video) {
        if (video.readyState >= 2) {
          releaseOverlay();
          return true;
        }

        video.addEventListener("loadeddata", releaseOverlay, { once: true });
        video.addEventListener("canplay", releaseOverlay, { once: true });
        video.addEventListener("playing", releaseOverlay, { once: true });
      }

      const player = (window as any).smartplayer?.instances?.[0];
      if (!player) return false;

      if (typeof player?.on === "function") {
        player.on("ready", releaseOverlay);
        player.on("canplay", releaseOverlay);
        player.on("play", releaseOverlay);
      }

      const currentTime = Number(
        player?.currentTime || player?.smartAutoPlay?.currentTime || player?.video?.currentTime || 0,
      );

      if (currentTime > 0 || player?.video?.readyState >= 2) {
        releaseOverlay();
      }

      return true;
    };

    if (!bindPlayerSignals()) {
      pollId = window.setInterval(() => {
        if (bindPlayerSignals() && pollId) {
          window.clearInterval(pollId);
          pollId = undefined;
        }
      }, 200);
    }

    fallbackId = window.setTimeout(releaseOverlay, 6000);

    return () => {
      if (pollId) window.clearInterval(pollId);
      if (fallbackId) window.clearTimeout(fallbackId);
    };
  }, []);

  return (
    <section className="bg-background py-8 md:py-12 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-muted" style={{ aspectRatio: "16/9" }}>
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 ${playerReady ? "opacity-0" : "opacity-100"}`}
          >
            <img
              src={thaynaraFoto}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-background/10" />
          </div>
          {/* @ts-ignore – custom Vturb web component */}
          <vturb-smartplayer
            ref={playerRef as any}
            id="vid-6898af1550270c783e275378"
            data-autoplay="true"
            style={{ display: "block", margin: "0 auto", width: "100%", height: "100%", position: "relative", zIndex: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default VturbPlayer;
