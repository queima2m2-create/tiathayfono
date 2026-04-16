import { useEffect, useRef, useState } from "react";
import { Shield, Lock, ShieldCheck } from "lucide-react";
import imgPlano from "@/assets/v4-plano30dias.jpeg";
import imgCaderno from "@/assets/v4-caderno.jpeg";
import imgCards from "@/assets/v4-cards.jpeg";
import imgGuia from "@/assets/v4-guia-situacoes.jpeg";
import imgChecklist from "@/assets/v4-checklist.jpeg";
import imgTagarelar from "@/assets/v4-tagarelar.jpeg";

const produtos = [
  { nome: "Plano 30 Dias com a Tia Thay", desc: "Roteiro diário passo a passo para destravar a fala do seu filho.", valor: "R$297,00", dataProduct: "plano30dias", img: imgPlano },
  { nome: "Caderno de Acompanhamento", desc: "Registre cada palavra nova e veja a evolução em tempo real.", valor: "R$47,00", dataProduct: "caderno", img: imgCaderno },
  { nome: "50 Cards para Imprimir", desc: "Estímulos visuais prontos para usar todos os dias.", valor: "R$47,00", dataProduct: "cards", img: imgCards },
  { nome: "Guia de Respostas para Situações Difíceis", desc: "O que fazer quando ele se recusa, chora ou ignora.", valor: "R$57,00", dataProduct: "guia-situacoes", img: imgGuia },
  { nome: "Checklist de Marcos por Faixa Etária", desc: "Saiba exatamente o que esperar em cada idade.", valor: "R$52,00", dataProduct: "checklist", img: imgChecklist },
  { nome: "App Tagarelar", desc: "Acesso ao app com jogos de estímulo de linguagem.", valor: "R$97,00", dataProduct: "tagarelar", img: imgTagarelar },
];

const depoimentos = [
  {
    nome: "Ana Paula",
    texto:
      "Thaynara preciso te contar. O Miguel falou 'agua' hoje na hora do banho. Ele nunca tinha pedido nada antes. Eu fiz exatamente o que você ensinou, fiquei esperando ele me olhar. Obrigada por me mostrar que eu era capaz de fazer isso por ele ❤️",
  },
  {
    nome: "Jéssica",
    texto:
      "TIAAA o guto falou mamãe!! MAMÃEEE!! minha mãe tava aqui e as duas entramos em parafuso kkkkkkk eu tava fazendo aquela pausa que vc falou ne ai ele veio e falou. to tremendo ate agora kkk vc é incrível demais 🙏",
  },
  {
    nome: "Rosangela",
    texto:
      "boa tarde thaynara. queria te avisar que o pedro disse 'nao' hoje quando eu fui tirar o brinquedo dele. pode parecer pouco mas ele tinha quase 2 anos e meio sem falar nada. sua metodo funcionou mesmo. Deus abençoe voce",
  },
];

const ROXO = "#6B2D8B";
const ROXO_CLARO = "#F3E8FA";
const VERDE = "#1A7A3A";
const VERDE_CLARO = "#E8F5ED";
const CINZA_CLARO = "#F8F8F8";

const V4 = () => {
  const [showButton, setShowButton] = useState(false);
  const startedAt = useRef<number>(Date.now());
  const ctaBlockRef = useRef<HTMLDivElement | null>(null);

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

  // Load Vturb player script
  useEffect(() => {
    const load = () => {
      const s = document.createElement("script");
      s.src =
        "https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/69e151b6eeef2dbf7e2a56c1/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    };
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(load, { timeout: 1500 });
    } else {
      setTimeout(load, 300);
    }
  }, []);

  // Reveal CTA at 4:50 (290s) of video.
  // ============================================================
  // COMO CONECTAR AO PLAYER REAL DO VÍDEO:
  // Substitua o setTimeout abaixo pelo evento timeupdate do player.
  // Exemplo (HTML5 video):
  //   const video = document.querySelector('video');
  //   video.addEventListener('timeupdate', () => {
  //     if (video.currentTime >= 290) setShowButton(true);
  //   });
  // Exemplo (VTurb / players customizados):
  //   player.on('timeupdate', (t) => { if (t >= 290) setShowButton(true); });
  // ============================================================
  useEffect(() => {
    const REVEAL_MS = 290 * 1000;
    const elapsed = Date.now() - startedAt.current;
    const remaining = Math.max(0, REVEAL_MS - elapsed);
    const id = window.setTimeout(() => setShowButton(true), remaining);
    return () => window.clearTimeout(id);
  }, []);

  // Smooth scroll para o bloco quando ele aparecer
  useEffect(() => {
    if (showButton && ctaBlockRef.current) {
      setTimeout(() => {
        ctaBlockRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }, [showButton]);

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
          {/* 1. Badge */}
          <span
            className="inline-block px-4 py-1.5 rounded-full text-white text-xs md:text-sm font-semibold mb-4"
            style={{ background: ROXO }}
          >
            🎓 Aula 1 — Liberada exclusivamente para você
          </span>

          {/* 2. Subheadline */}
          <p className="text-neutral-500 text-sm md:text-base mb-6">
            Assista até o fim — essa aula aparece só uma vez
          </p>

          {/* 3. Vídeo */}
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

          {/* 4. Headline ABAIXO do vídeo */}
          <h1
            className="text-3xl md:text-5xl font-extrabold leading-[1.15] mt-8"
            style={{ color: ROXO }}
          >
            Você tem o conhecimento. Agora precisa do roteiro.
          </h1>

          {/* BLOCO CTA — oculto até 4:50, fade-in suave */}
          <div
            ref={ctaBlockRef}
            className={`transition-all duration-[800ms] ease-out ${
              showButton
                ? "opacity-100 max-h-[2000px] mt-10"
                : "opacity-0 max-h-0 overflow-hidden mt-0"
            }`}
            aria-hidden={!showButton}
          >
            <p className="text-neutral-700 mb-5 text-sm md:text-base">
              Adicione ao seu pedido com 1 clique — sem precisar digitar nada
            </p>

            <div className="flex justify-center">
              <div
                style={{ textAlign: "center", width: "100%" }}
                id="kiwify-upsell-cXCgv1m"
                data-upsell-url=""
                data-downsell-url=""
              >
                <button
                  id="kiwify-upsell-trigger-cXCgv1m"
                  style={{
                    backgroundColor: "#27AF60",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    border: "1px solid #27AF60",
                    cursor: "pointer",
                    width: "100%",
                    maxWidth: "480px",
                    padding: "18px 24px",
                    fontSize: "22px",
                    borderRadius: "50px",
                    boxShadow: "0 4px 20px rgba(39,175,96,0.4)",
                  }}
                >
                  Sim, QUERO O PLANO DA TIA THAY
                </button>
              </div>
            </div>

            <p className="font-extrabold mt-5 text-lg" style={{ color: ROXO }}>
              12x de R$20,47
            </p>
            <p className="text-neutral-500 text-sm mt-1">
              ou R$197,90 à vista — acesso imediato e vitalício
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-neutral-500 text-xs md:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-4 h-4" /> Compra 100% segura
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> 7 dias de garantia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ESPAÇAMENTO 60px */}
      <div style={{ height: "60px" }} />

      {/* SEÇÃO 4 — O QUE ESTÁ INCLUÍDO */}
      <section className="px-4 py-14 md:py-20" style={{ background: ROXO_CLARO }}>
        <div className="max-w-[1100px] mx-auto">
          <h2
            className="text-2xl md:text-4xl font-extrabold text-center mb-10"
            style={{ color: ROXO }}
          >
            Tudo que você leva hoje:
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {produtos.map((p) => (
              <div
                key={p.nome}
                className="bg-white rounded-2xl shadow-[0_8px_20px_-12px_rgba(107,45,139,0.25)] flex flex-col overflow-hidden"
              >
                {/* SUBSTITUIR src PELA URL DA IMAGEM DO PRODUTO */}
                <img
                  src={p.img}
                  alt={p.nome}
                  data-product={p.dataProduct}
                  loading="lazy"
                  className="w-full bg-neutral-100"
                  style={{ height: "260px", objectFit: "contain", padding: "12px" }}
                />
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-sm md:text-base mb-1" style={{ color: ROXO }}>
                    {p.nome}
                  </h3>
                  <p className="text-neutral-500 text-xs md:text-sm mb-3 flex-1">{p.desc}</p>
                  <p className="text-red-600 line-through text-sm font-semibold">{p.valor}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-10 border-purple-200" />
          <div className="text-center">
            <p className="text-neutral-700 text-base md:text-lg">
              Valor total: <span className="line-through text-red-600 font-semibold">R$597,00</span>
            </p>
            <p className="mt-2 text-lg md:text-2xl font-extrabold" style={{ color: ROXO }}>
              Hoje: 12x de R$20,47 ou R$197,90 à vista
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — DEPOIMENTOS */}
      <section className="bg-white px-4 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <h2
            className="text-2xl md:text-4xl font-extrabold text-center mb-10"
            style={{ color: ROXO }}
          >
            O que as mães estão dizendo:
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {depoimentos.map((d) => (
              <div
                key={d.nome}
                className="bg-neutral-50 rounded-xl p-5 border-l-4 shadow-sm"
                style={{ borderLeftColor: ROXO }}
              >
                <p className="text-neutral-700 text-sm md:text-[15px] leading-relaxed whitespace-pre-line">
                  {d.texto}
                </p>
                <p className="font-bold mt-4" style={{ color: ROXO }}>
                  — {d.nome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — GARANTIA */}
      <section className="px-4 py-14 md:py-20" style={{ background: VERDE_CLARO }}>
        <div className="max-w-[720px] mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" style={{ color: VERDE }} strokeWidth={2.2} />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4" style={{ color: VERDE }}>
            Garantia de 7 Dias
          </h2>
          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            Aplica o plano por 7 dias. Se você não enxergar nenhuma mudança na forma como o seu filho
            interage com você, me manda uma mensagem e eu devolvo cada centavo. Sem perguntas. Sem
            burocracia.
          </p>
          <p className="mt-5 font-bold text-neutral-800">— Thaynara Andrade, Fonoaudióloga</p>
        </div>
      </section>

      {/* SEÇÃO 7 — CTA FINAL */}
      <section className="px-4 py-16 md:py-24 text-center text-white" style={{ background: ROXO }}>
        <div className="max-w-[820px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.15] mb-4">
            Você tem o conhecimento. Agora precisa do roteiro.
          </h2>
          <p className="text-white/85 text-base md:text-lg mb-8">
            Essa condição existe só aqui, só agora. Quando você sair essa página ela some.
          </p>
          <div className="min-h-[60px] flex justify-center items-center">
            {/* EMBED KIWIFY BOTÃO 2 — SUBSTITUIR AQUI */}
          </div>
          <p className="mt-5 font-extrabold text-lg">12x de R$20,47 ou R$197,90 à vista</p>
        </div>
      </section>

      {/* SEÇÃO 8 — RECUSA */}
      <section className="bg-white px-4 py-10 text-center">
        {/* COLE O LINK DE RECUSA DA KIWIFY AQUI */}
        <a
          href="#"
          style={{ color: "#AAAAAA", fontSize: "13px", textDecoration: "none" }}
        >
          Não, prefiro continuar sem o passo a passo diário
        </a>
      </section>
    </div>
  );
};

export default V4;
