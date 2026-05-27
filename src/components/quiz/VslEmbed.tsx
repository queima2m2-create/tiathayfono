import { useEffect, useRef } from "react";

const VslEmbed = ({ html, label }: { html: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!html || !ref.current) return;
    // Insert HTML and execute any <script> tags
    ref.current.innerHTML = html;
    ref.current.querySelectorAll("script").forEach((oldScript) => {
      const s = document.createElement("script");
      Array.from(oldScript.attributes).forEach((a) => s.setAttribute(a.name, a.value));
      s.text = oldScript.text;
      oldScript.parentNode?.replaceChild(s, oldScript);
    });
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
