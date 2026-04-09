import { useEffect, useCallback, useState } from "react";

const UnmuteOverlay = () => {
  const [active, setActive] = useState(true);

  const unmute = useCallback(() => {
    setActive(false);

    // Try to unmute the Vturb player via its internal video/audio elements
    const player = document.getElementById("vid-6898af1550270c783e275378");
    if (player) {
      const videos = player.querySelectorAll("video");
      videos.forEach((v) => {
        v.muted = false;
      });
      const audios = player.querySelectorAll("audio");
      audios.forEach((a) => {
        a.muted = false;
        a.play().catch(() => {});
      });
    }

    // Also try any video/audio in the page
    document.querySelectorAll("video").forEach((v) => {
      v.muted = false;
    });
    document.querySelectorAll("audio").forEach((a) => {
      a.muted = false;
      a.play().catch(() => {});
    });

    // Vturb sometimes exposes a global API
    try {
      const w = window as any;
      if (w.smartplayer?.instances) {
        w.smartplayer.instances.forEach((inst: any) => {
          if (inst?.unmute) inst.unmute();
          if (inst?.setVolume) inst.setVolume(1);
        });
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!active) return;

    const handler = () => unmute();

    // Capture phase so we intercept before anything else
    window.addEventListener("click", handler, { capture: true, once: true });
    window.addEventListener("touchstart", handler, { capture: true, once: true });
    window.addEventListener("scroll", handler, { once: true });
    window.addEventListener("keydown", handler, { once: true });

    return () => {
      window.removeEventListener("click", handler, { capture: true });
      window.removeEventListener("touchstart", handler, { capture: true });
      window.removeEventListener("scroll", handler);
      window.removeEventListener("keydown", handler);
    };
  }, [active, unmute]);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[9999]"
      style={{ background: "transparent", cursor: "default" }}
      onClick={unmute}
      onTouchStart={unmute}
    />
  );
};

export default UnmuteOverlay;
