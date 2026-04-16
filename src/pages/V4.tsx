import { useEffect, useRef, useState } from "react";
import { Shield, Lock, ShieldCheck } from "lucide-react";

const produtos = [
  { nome: "Plano 30 Dias com a Tia Thay", desc: "Roteiro diário passo a passo para destravar a fala do seu filho.", valor: "R$197,90" },
  { nome: "Caderno de Acompanhamento", desc: "Registre cada palavra nova e veja a evolução em tempo real.", valor: "R$27,00" },
  { nome: "50 Cards para Imprimir", desc: "Estímulos visuais prontos para usar todos os dias.", valor: "R$19,90" },
  { nome: "Guia de Situações Difíceis", desc: "O que fazer quando ele se recusa, chora ou ignora.", valor: "R$17,00" },
  { nome: "Checklist de Marcos", desc: "Saiba exatamente o que esperar em cada idade.", valor: "R$17,00" },
  { nome: "App Tagarelar", desc: "Acesso ao app com jogos de estímulo de linguagem.", valor: "R$27,00" },
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

  // Reveal CTA at 4:50 (290s) of video.
  // NOTE: substitua este timer pelo evento real do player quando o embed estiver conectado.
  // Exemplo: player.on('timeupdate', (t) => { if (t >= 290) setShowButton(true); });
  useEffect(() => {
    const REVEAL_MS = 290 * 1000;
    const elapsed = Date.now() - startedAt.current;
    const remaining = Math.max(0, REVEAL_MS - elapsed);
    const id = window.setTimeout(() => setShowButton(true), remaining);
    return () => window.clearTimeout(id);
  }, []);

  const PrimaryCTA = () => (
    <a
      href="#kiwify-embed"
      className="inline-flex items-center justify-center w-full max-w-[520px] min-h-[64px] px-8 rounded-full text-white font-extrabold text-lg md:text-xl shadow-[0_10px_30px_-10px_rgba(26,122,58,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
      style={{ background: VERDE }}
    >
      ✅ SIM — QUERO O PLANO 30 DIAS
    </a>
  );

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
          <span
            className="inline-block px-4 py-1.5 rounded-full text-white text-xs md:text-sm font-semibold mb-5"
            style={{ background: ROXO }}
          >
            🎓 Aula 1 — Liberada exclusivamente para você
          </span>
          <h1
            className="text-3xl md:text-5xl font-extrabold leading-[1.15] mb-3"
            style={{ color: ROXO }}
          >
            Você tem o conhecimento. Agora precisa do roteiro.
          </h1>
          <p className="text-neutral-500 text-sm md:text-base mb-8">
            Assista até o fim — essa aula aparece só uma vez
          </p>

          <div
            className="rounded-2xl overflow-hidden shadow-lg bg-black mx-auto"
            style={{ aspectRatio: "16/9" }}
          >
            {/* COLE O EMBED DO VÍDEO AQUI */}
          </div>
          {/* BOTÃO REVELADO AOS 4:50 DO VÍDEO VIA JS */}
        </div>
      </section>

      {/* SEÇÃO 3 — BOTÃO PRINCIPAL (oculto até 4:50) */}
      <section
        className={`bg-white px-4 py-12 md:py-16 transition-opacity duration-700 ${
          showButton ? "opacity-100" : "opacity-0 pointer-events-none h-0 py-0 overflow-hidden"
        }`}
        aria-hidden={!showButton}
      >
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-neutral-700 mb-5 text-sm md:text-base">
            Adicione ao seu pedido com 1 clique — sem precisar digitar nada
          </p>
          <div className="flex justify-center">
            <PrimaryCTA />
          </div>
          <p className="font-extrabold mt-5 text-lg" style={{ color: ROXO }}>
            12x de R$20,47
          </p>
          <p className="text-neutral-500 text-sm mt-1">
            ou R$197,90 à vista — acesso imediato e vitalício
          </p>

          <div id="kiwify-embed" className="mt-8 min-h-[60px]">
            {/* COLE O EMBED DA KIWIFY AQUI */}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-neutral-500 text-xs md:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="w-4 h-4" /> Compra 100% segura
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 7 dias de garantia
            </span>
          </div>
        </div>
      </section>

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
                className="bg-white rounded-2xl p-4 md:p-5 shadow-[0_8px_20px_-12px_rgba(107,45,139,0.25)] flex flex-col"
              >
                <div
                  className="w-full rounded-xl mb-4 bg-neutral-100"
                  style={{ aspectRatio: "200/260" }}
                  aria-label={`Capa ${p.nome}`}
                />
                <h3 className="font-bold text-sm md:text-base mb-1" style={{ color: ROXO }}>
                  {p.nome}
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm mb-3 flex-1">{p.desc}</p>
                <p className="text-red-600 line-through text-sm font-semibold">{p.valor}</p>
              </div>
            ))}
          </div>

          <hr className="my-10 border-purple-200" />
          <div className="text-center">
            <p className="text-neutral-700 text-base md:text-lg">
              Valor total: <span className="line-through text-red-600 font-semibold">R$305,80</span>
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
          <div className="flex justify-center">
            <PrimaryCTA />
          </div>
          <p className="mt-5 font-extrabold text-lg">12x de R$20,47 ou R$197,90 à vista</p>
          <div className="mt-8 min-h-[60px]">
            {/* COLE O EMBED DA KIWIFY AQUI */}
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 — RECUSA */}
      <section className="bg-white px-4 py-10 text-center">
        <a
          href="#"
          /* COLE O LINK DE RECUSA DA KIWIFY AQUI */
          className="text-neutral-400 text-sm underline underline-offset-4 hover:text-neutral-600 transition-colors"
        >
          Não, prefiro continuar sem o passo a passo diário
        </a>
      </section>
    </div>
  );
};

export default V4;
