import { useEffect, useState, lazy, Suspense } from "react";

const V4Reveal = lazy(() => import("@/components/landing/V4Reveal"));

const ROXO = "#6B2D8B";
const CINZA_CLARO = "#F8F8F8";

const V4 = () => {
  const [revealed, setRevealed] = useState(false);

  // Defer pageView tracking
  useEffect(() => {
    const fire = () =>
      import("@/lib/fbConversions").then((m) => m.fbEvents.pageView());
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(fire, { timeout: 3000 });
    } else {
      setTimeout(fire, 1000);
    }
  }, []);

  // Load Vturb player script — IMEDIATAMENTE (é o conteúdo principal)
  useEffect(() => {
    const SRC =
      "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/69e151b6eeef2dbf7e2a56c1/v4/player.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    (s as any).fetchPriority = "high";
    document.head.appendChild(s);
  }, []);

  // Reveal do conteúdo aos 5:55 — controlado APENAS pelo tempo do vídeo.
  useEffect(() => {
    if (revealed) return;
    let initTimer: number | null = null;
    let loadTimer: number | null = null;
    let pollTimer: number | null = null;
    let listenerAttached = false;

    const checkAndReveal = (player: any) => {
      const t = Number(
        player?.currentTime ||
          player?.smartAutoPlay?.currentTime ||
          player?.video?.currentTime ||
          0
      );
      if (t >= 355) {
        console.log("[V4] reveal acionado em t=", t);
        setRevealed(true);
        return true;
      }
      return false;
    };

    const initVturbListener = () => {
      const smartplayer = (window as any).smartplayer;

      if (
        typeof smartplayer !== "undefined" &&
        smartplayer.instances &&
        smartplayer.instances.length > 0
      ) {
        const player = smartplayer.instances[0];

        if (!listenerAttached && typeof player?.on === "function") {
          listenerAttached = true;
          console.log("[V4] listener timeupdate anexado");
          player.on("timeupdate", () => checkAndReveal(player));
          player.on("play", () => checkAndReveal(player));
        }

        // Polling de segurança a cada 1s — garante reveal mesmo se .on() não disparar
        if (pollTimer === null) {
          pollTimer = window.setInterval(() => {
            if (checkAndReveal(player) && pollTimer !== null) {
              window.clearInterval(pollTimer);
              pollTimer = null;
            }
          }, 1000);
        }
      } else {
        initTimer = window.setTimeout(initVturbListener, 500);
      }
    };

    const onLoad = () => {
      loadTimer = window.setTimeout(initVturbListener, 800);
    };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => {
      window.removeEventListener("load", onLoad);
      if (initTimer !== null) window.clearTimeout(initTimer);
      if (loadTimer !== null) window.clearTimeout(loadTimer);
      if (pollTimer !== null) window.clearInterval(pollTimer);
    };
  }, [revealed]);

  // Carrega script Kiwify só após o reveal
  useEffect(() => {
    if (!revealed) return;
    const KIWIFY_SRC = "https://snippets.kiwify.com/upsell/upsell.min.js";
    if (document.querySelector(`script[src="${KIWIFY_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = KIWIFY_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, [revealed]);

  // Scroll suave até o bloco revelado
  useEffect(() => {
    if (!revealed) return;
    const id = window.setTimeout(() => {
      document.getElementById("conteudo-revelado")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
    return () => window.clearTimeout(id);
  }, [revealed]);

  return (
    <div className="min-h-screen bg-white text-neutral-800" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* SEÇÃO 1 — BARRA DE URGÊNCIA */}
      <div
        className="sticky top-0 z-50 w-full text-white text-center text-[12px] md:text-sm py-2.5 px-4 tracking-wide"
        style={{ background: ROXO }}
      >
        ⏳ Seu acesso ao Guia está sendo liberado... Assista a aula exclusiva da Tia Thay antes de ir
      </div>

      {/* SEÇÃO 2 — VÍDEO */}
      <section className="px-4 py-10 md:py-16" style={{ background: CINZA_CLARO }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h1
            className="inline-block px-6 py-3 rounded-full text-white text-xl md:text-3xl lg:text-4xl font-extrabold leading-[1.2] mb-4"
            style={{ background: ROXO }}
          >
            🎓 Aula 1 — Liberada exclusivamente para você
          </h1>

          <p className="text-neutral-500 text-sm md:text-base mb-6">
            Assista até o fim — essa aula aparece só uma vez
          </p>

          <div
            className="rounded-2xl overflow-hidden shadow-lg bg-black mx-auto"
            style={{ aspectRatio: "16/9" }}
          >
            {/* @ts-ignore – custom Vturb web component */}
            <vturb-smartplayer
              id="vid-69e151b6eeef2dbf7e2a56c1"
              {...({ autoplay: "true", muted: "false", playsinline: "true" } as any)}
              className="vturb-player"
              style={{ display: "block", margin: "0 auto", width: "100%", pointerEvents: "auto", zIndex: 1 }}
            />
          </div>
        </div>
      </section>

      {/* CONTEÚDO REVELADO — só monta após o vídeo atingir 5:55 */}
      {revealed && (
        <div id="conteudo-revelado" style={{ animation: "fadeIn 0.8s ease forwards" }}>
          <Suspense fallback={null}>
            <V4Reveal />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default V4;
