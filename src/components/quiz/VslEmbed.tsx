import { useEffect, useRef } from "react";

/**
 * Embed for a VTurb player snippet. Injects the provided HTML, re-executes
 * its <script> tags, and aggressively forces play-with-sound. Because the
 * user already interacted with the page (clicked "Começar", answered
 * questions, etc.) before reaching any video, browsers allow unmuted
 * autoplay here.
 */
const VslEmbed = ({ html, label }: { html: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!html || !ref.current) return;

    // Inject HTML and re-execute <script> tags
    ref.current.innerHTML = html;
    ref.current.querySelectorAll("script").forEach((oldScript) => {
      const s = document.createElement("script");
      Array.from(oldScript.attributes).forEach((a) => s.setAttribute(a.name, a.value));
      s.text = oldScript.text;
      oldScript.parentNode?.replaceChild(s, oldScript);
    });

    let cancelled = false;

    const forcePlay = () => {
      if (cancelled || !ref.current) return;

      // 1. VTurb custom element API
      ref.current.querySelectorAll("vturb-smartplayer").forEach((p: any) => {
        try {
          if ("muted" in p) p.muted = false;
          if ("volume" in p) p.volume = 1;
          const r = p.play?.();
          if (r && typeof r.catch === "function") {
            r.catch(() => {
              // Last-resort: muted autoplay so video at least starts
              try {
                p.muted = true;
                p.play?.();
              } catch {}
            });
          }
        } catch {}
      });

      // 2. VTurb global JS API
      try {
        const w = window as any;
        if (w.smartplayer?.instances) {
          w.smartplayer.instances.forEach((inst: any) => {
            try {
              inst?.unmute?.();
              inst?.setVolume?.(1);
              inst?.play?.();
            } catch {}
          });
        }
      } catch {}

      // 3. Underlying <video> / <audio> elements
      ref.current.querySelectorAll("video").forEach((v) => {
        try {
          v.muted = false;
          v.volume = 1;
          const r = v.play();
          if (r && typeof r.catch === "function") {
            r.catch(() => {
              v.muted = true;
              v.play().catch(() => {});
            });
          }
        } catch {}
      });
      ref.current.querySelectorAll("audio").forEach((a) => {
        try {
          a.muted = false;
          a.volume = 1;
          a.play().catch(() => {});
        } catch {}
      });
    };

    // The VTurb loader script + custom element bootstrap takes a moment.
    // Retry several times so we hit the player as soon as it's ready.
    const timers = [200, 600, 1200, 2000, 3000, 4500].map((ms) =>
      setTimeout(forcePlay, ms),
    );

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [html]);

  if (!html) {
    return (
      <div className="w-full max-w-[420px] mx-auto aspect-[9/16] bg-muted/40 border-2 border-dashed border-muted-foreground/30 rounded-xl flex items-center justify-center text-center p-6">
        <div>
          <p className="text-muted-foreground font-medium text-sm">🎬 {label}</p>
          <p className="text-muted-foreground/70 text-xs mt-2">Vídeo será adicionado em breve</p>
        </div>
      </div>
    );
  }

  return <div ref={ref} className="w-full max-w-[420px] mx-auto" />;
};

export default VslEmbed;
