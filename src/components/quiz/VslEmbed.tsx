import { useEffect, useRef, useState } from "react";

const VslEmbed = ({ html, label }: { html: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

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

    // Autoplay nudger: try with sound first, fallback to muted autoplay
    let cancelled = false;
    const tryPlay = (attempt = 0) => {
      if (cancelled || !ref.current) return;
      const videos = ref.current.querySelectorAll("video");
      let foundPlaying = false;
      videos.forEach((v) => {
        // Try with sound
        v.muted = false;
        const p = v.play();
        if (p && typeof p.catch === "function") {
          p.then(() => {
            foundPlaying = true;
            setMuted(false);
          }).catch(() => {
            // Browser blocked sound autoplay → fallback to muted
            v.muted = true;
            v.play().catch(() => {});
            setMuted(true);
          });
        }
      });
      // Try VTurb global API if available
      try {
        const w = window as any;
        if (w.smartplayer?.instances) {
          w.smartplayer.instances.forEach((inst: any) => {
            try {
              inst?.play?.();
            } catch {}
          });
        }
      } catch {}
      if (videos.length === 0 && attempt < 20) {
        setTimeout(() => tryPlay(attempt + 1), 300);
      }
      void foundPlaying;
    };
    const t = setTimeout(() => tryPlay(0), 400);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [html]);

  const handleUnmute = () => {
    if (!ref.current) return;
    ref.current.querySelectorAll("video").forEach((v) => {
      v.muted = false;
      v.volume = 1;
      v.play().catch(() => {});
    });
    ref.current.querySelectorAll("audio").forEach((a) => {
      a.muted = false;
      a.play().catch(() => {});
    });
    try {
      const w = window as any;
      if (w.smartplayer?.instances) {
        w.smartplayer.instances.forEach((inst: any) => {
          try {
            inst?.unmute?.();
            inst?.setVolume?.(1);
          } catch {}
        });
      }
    } catch {}
    setMuted(false);
  };

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

  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div ref={ref} className="w-full" />
      {muted && (
        <button
          type="button"
          onClick={handleUnmute}
          className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold text-[0.9rem] px-5 py-3 rounded-full shadow-xl shadow-black/30 flex items-center gap-2 animate-pulse"
          aria-label="Ativar som do vídeo"
        >
          🔊 Toque para ativar o som
        </button>
      )}
    </div>
  );
};

export default VslEmbed;
