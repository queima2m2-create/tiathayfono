import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import thaynaraFoto from "@/assets/thaynara-foto.jpg";
import dep1 from "@/assets/depoimento-novo-1.jpeg";
import dep2 from "@/assets/depoimento-novo-2.jpeg";
import dep3 from "@/assets/depoimento-novo-3.jpeg";
import dep4 from "@/assets/depoimento-novo-4.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuizCheckoutButton from "@/components/quiz/QuizCheckoutButton";
import VslEmbed from "@/components/quiz/VslEmbed";
import ExitIntentModal, { useExitIntent } from "@/components/quiz/ExitIntentModal";
import StickyLeadBar from "@/components/quiz/StickyLeadBar";
import { QUIZ_VSL_EMBEDS } from "@/lib/quizConfig";
import { calcularEstagio, loadQuizAnswers, type QuizAnswers } from "@/lib/quizState";

const fbqTrack = (event: string, data?: Record<string, unknown>) => {
  const w = window as any;
  if (typeof w.fbq === "function") {
    if (data) w.fbq("track", event, data);
    else w.fbq("track", event);
  }
};

const faltouMap = (nome: string): Record<string, string> => ({
  pediatra: `🩺 Você ouviu do pediatra pra esperar — mas dos 2 aos 4 anos é a janela crítica do cérebro do(a) ${nome}. Esperar é o que MAIS atrasa.`,
  fono: `👩‍⚕️ Você buscou ajuda profissional com fonoaudióloga, parabéns por isso. Mas o estímulo do(a) ${nome} precisa ser DIÁRIO, em casa, com você. Os 30 minutos por semana com a fono não bastam. O programa potencializa o que a fono já tá fazendo (ou fez).`,
  youtube: `📱 Vídeos no YouTube ensinam coisas isoladas — mas sem método e sem ORDEM, eles podem até atrapalhar o(a) ${nome}.`,
  chupeta: `🍼 Tirar chupeta do(a) ${nome} ajuda, mas não basta. Tem que ter estímulo ATIVO substituindo.`,
  escolinha: `🏫 A escola estimula contato social do(a) ${nome}, mas não trabalha a fala de forma estruturada como precisa.`,
  nada: `⏰ Você ainda não tentou nada com o(a) ${nome}. Boa notícia: ainda dá tempo. Mas tem que começar HOJE.`,
});

const telaMap = (nome: string): Record<string, string> => ({
  nao_ve: `📵 ${nome} não vê tela. Parabéns por essa decisão. Mas pode ser que falte estímulo direto de fala. Veja o que o programa vai te ensinar.`,
  menos_1h: `📱 ${nome} já tem tempo controlado de tela. Vamos potencializar com estímulos diretos.`,
  "1_2h": `📺 Esse tempo de tela do(a) ${nome} pode ser usado de forma estratégica. O módulo de Telas do programa te ensina como.`,
  "2_4h": `🎮 Esse tempo de tela pode estar atrasando a fala do(a) ${nome}. O programa tem um módulo específico pra você reverter isso.`,
  mais_4h: `⏰ Um dos principais bloqueios de fala que vejo. Boa notícia: tem solução. O programa te mostra como reduzir SEM crise.`,
});

const medoMap = (nome: string): Record<string, { titulo: string; texto: string }> => ({
  autismo: {
    titulo: "⏰ Mãe, seu medo é compreensível",
    texto:
      "Sobre o autismo: o programa não substitui diagnóstico, mas a estimulação correta beneficia qualquer criança — incluindo crianças no espectro. Quanto antes começar, melhor.",
  },
  escola: {
    titulo: "⏰ Mãe, seu medo é compreensível",
    texto: `Crianças que entram na escola sem fala desenvolvida sofrem mais. Mas se ${nome} começar HOJE, em 30 dias você vê mudança real antes mesmo do próximo ano letivo.`,
  },
  bullying: {
    titulo: "⏰ Mãe, seu medo é compreensível",
    texto: `Crianças que se comunicam bem são mais aceitas socialmente. O programa ajuda o(a) ${nome} a desenvolver não só a fala, mas a confiança de se expressar.`,
  },
  comunicacao: {
    titulo: "⏰ Mãe, seu medo é compreensível",
    texto: `A comunicação mãe-filho é a base de tudo. Imagina ouvir ${nome} te contando o dia dele(a), fazendo perguntas, dizendo 'te amo'. Em 30 dias isso pode mudar.`,
  },
  tudo: {
    titulo: "⏰ Mãe, seu medo é compreensível",
    texto: "Esses medos são reais e muito comuns. Mas tem um caminho. Não deixa o tempo passar.",
  },
});

const QuizResultado = () => {
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);
  const [showButton, setShowButton] = useState(false);
  const { open: exitOpen, setOpen: setExitOpen } = useExitIntent(true);

  useEffect(() => {
    const a = loadQuizAnswers();
    setAnswers(a);
    fbqTrack("ViewContent", {
      content_name: "Quiz Resultado",
      content_category: "Infoproduto",
      value: 57,
      currency: "BRL",
    });
    const onAnyKiwifyClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const a = target.closest('a[href*="kiwify"]');
      if (a) localStorage.setItem("tiathay_quiz_purchase_clicked", "1");
    };
    document.addEventListener("click", onAnyKiwifyClick);
    return () => document.removeEventListener("click", onAnyKiwifyClick);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowButton(true), 87_000);
    return () => clearTimeout(t);
  }, []);

  if (!answers) return null;
  if (!answers.completed_at) return <Navigate to="/quiz" replace />;

  const estagio = calcularEstagio(answers.filho_idade, answers.filho_estagio);
  const idade = answers.filho_idade || "seu filho";
  const nome = (answers.filho_nome || "seu filho").trim();
  const tentativas = answers.mae_tentativas || [];
  const faltou = faltouMap(nome);
  const telaBullet = answers.filho_tela ? telaMap(nome)[answers.filho_tela] : null;
  const medo = answers.mae_medo ? medoMap(nome)[answers.mae_medo] : null;

  const ctaDestravar = `QUERO DESTRAVAR A FALA DO(A) ${nome.toUpperCase()} →`;

  const FAQS = [
    {
      q: `E se ${nome} tiver autismo (ou suspeita de TEA)?`,
      a: "O método foca em estímulos universais de linguagem que ajudam qualquer criança — incluindo crianças no espectro autista. Se há diagnóstico de TEA, recomendo combinar com acompanhamento profissional. Já tive várias mães de crianças autistas relatando avanço significativo.",
    },
    {
      q: "Por que tão barato (R$57)? Tem pegadinha?",
      a: "Não tem pegadinha. Vendi a R$200 antes e percebi que a mãe que mais PRECISA do método é justamente a que não tem R$200 sobrando. Decidi cobrar R$57 para atingir o máximo de famílias possível. A qualidade do conteúdo é exatamente a mesma.",
    },
    {
      q: "Quanto tempo de aula são?",
      a: "Aulas curtas de 5 a 15 minutos cada. No total, ~3 horas de conteúdo em vídeo + áudios + cards. Você assiste no celular, no ônibus, na pausa do café.",
    },
    {
      q: "Vou ter contato direto com a Dra. Thaynara?",
      a: "Sim. O suporte direto pelo WhatsApp comigo está incluído. Sou eu de verdade respondendo.",
    },
    {
      q: "E se em 30 dias eu não ver resultado nenhum?",
      a: "Manda mensagem e devolvo cada centavo. Sem perguntas, sem formulário, sem julgamento.",
    },
  ];

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* ===== BLOCO 1 — DIAGNÓSTICO ===== */}
      <section className="px-4 pt-8 pb-10 text-center">
        <div className="max-w-[640px] mx-auto flex flex-col items-center gap-4">
          <span className="inline-block bg-verde/15 text-verde border border-verde/30 rounded-full px-4 py-1.5 text-[0.78rem] font-bold">
            ✅ Diagnóstico Concluído
          </span>
          <h1 className="text-[1.5rem] md:text-[1.95rem] font-extrabold text-marrom-dark leading-[1.2]">
            Mãe do(a) {nome}: o(a) {nome} está no Estágio{" "}
            <span className="text-[#FF6B35]">{estagio}</span> de desenvolvimento da fala.
          </h1>
          <p className="text-[1rem] text-marrom-dark/80 leading-[1.6] max-w-[560px]">
            Baseado nas suas 12 respostas, identifiquei que o(a) {nome} precisa de estímulos específicos pra essa fase.
          </p>
          <div className="flex items-center gap-3 bg-rosa-light/60 rounded-xl px-4 py-3 mt-2">
            <img
              src={thaynaraFoto}
              alt="Dra. Thaynara"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
            />
            <p className="text-[0.82rem] text-marrom-dark/85 text-left leading-tight">
              📋 Diagnóstico baseado em fonoaudiologia clínica
              <br />
              <strong>Dra. Thaynara Andrade · CRFa 4-13693</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 2 — VÍDEO 3 + CTA ===== */}
      <section className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto flex flex-col items-center gap-4">
          <VslEmbed
            html={QUIZ_VSL_EMBEDS.vsl_parte_3_embed}
            label="Mensagem final da Dra. Thaynara"
          />
          {showButton ? (
            <div className="w-full max-w-[480px] flex flex-col items-center gap-2 animate-in fade-in duration-500">
              <button
                onClick={() => {
                  document.getElementById('solucao-estagio')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold uppercase tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/30 px-6 py-5 md:py-6 text-[0.9rem] md:text-[1.05rem] w-full leading-tight whitespace-normal h-auto inline-flex items-center justify-center gap-2"
              >
                {ctaDestravar}
              </button>
              <p className="text-[0.78rem] text-marrom-dark/70 font-medium">
                🛡️ Garantia incondicional 30 dias · Risco zero
              </p>
            </div>
          ) : (
            <p className="text-[0.85rem] text-marrom-dark/50">
              Assista o vídeo até o final para ver a oferta especial...
            </p>
          )}
        </div>
      </section>

      {/* ===== BLOCO 3 — O QUE FALTOU ===== */}
      {(tentativas.length > 0 || telaBullet) && (
        <section className="px-4 pb-10">
          <div className="max-w-[640px] mx-auto">
            <h2 className="text-[1.25rem] md:text-[1.45rem] font-extrabold text-marrom-dark mb-5">
              ❌ Mãe, o que faltou no caso do(a) {nome} até agora:
            </h2>
            <ul className="flex flex-col gap-3">
              {tentativas.map((t) => (
                <li
                  key={t}
                  className="bg-white border-l-4 border-[#FF6B35] rounded-r-xl px-4 py-3 text-[0.95rem] text-marrom-dark leading-snug shadow-sm"
                >
                  {faltou[t]}
                </li>
              ))}
              {telaBullet && (
                <li className="bg-white border-l-4 border-[#FF6B35] rounded-r-xl px-4 py-3 text-[0.95rem] text-marrom-dark leading-snug shadow-sm">
                  {telaBullet}
                </li>
              )}
            </ul>
          </div>
        </section>
      )}

      {/* ===== BLOCO 4 — OFERTA ===== */}
      <section id="solucao-estagio" className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[1.3rem] md:text-[1.55rem] font-extrabold text-marrom-dark mb-5 text-center">
            ✅ A solução pro Estágio <span className="text-[#FF6B35]">{estagio}</span> do(a) {nome}:
          </h2>
          <div className="bg-rosa-light/40 border-2 border-[#FF6B35]/30 rounded-2xl p-5 md:p-7">
            <h3 className="text-[1.2rem] md:text-[1.4rem] font-extrabold text-marrom-dark text-center">
              PROGRAMA MEU FILHO VAI FALAR
            </h3>
            <p className="text-[0.9rem] text-marrom-dark/75 text-center mt-1 mb-5">
              Plano de 30 dias · 15 min por dia · Adaptado pra {idade}
            </p>

            <ul className="flex flex-col gap-2.5 text-[0.92rem] text-marrom-dark leading-snug">
              {[
                ["✅", "Aulas em vídeo com método passo a passo"],
                ["✅", "As 50 palavras exatas (organizadas por nível)"],
                ["✅", "10 brincadeiras que destravam a fala"],
                ["✅", "Rotina da Criança Tagarela"],
                ["✅", "Telas — Aliado ou Inimigo da Fala"],
                ["✅", "Sinais de alerta por idade"],
                ["🔥", <strong key="s">SUPORTE WHATSAPP DIRETO COM A FONO</strong>],
                ["✅", "10 áudios de música pra estimular"],
                ["🔥", <strong key="l">LIVES EXCLUSIVAS com a Dra. Thaynara</strong>],
                ["✅", "Comunidade VIP de mães no WhatsApp"],
                ["✅", "Planner de evolução imprimível"],
                ["✅", "50 cards interativos imprimíveis"],
              ].map(([icon, text], i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="shrink-0">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <p className="text-[0.95rem] text-marrom-dark/70 line-through">Valor real: R$ 497</p>
              <p className="text-[0.85rem] text-marrom-dark/85 mt-1">
                Hoje, com promoção exclusiva pra quem fez o diagnóstico:
              </p>
              <p className="text-[2.2rem] md:text-[2.6rem] font-extrabold text-[#FF6B35] leading-none mt-2">
                12x R$ 5,90
              </p>
              <p className="text-[0.85rem] text-marrom-dark/70 font-medium">
                ou R$ 57,00 à vista no PIX
              </p>
              <span className="inline-block mt-3 bg-verde/15 text-verde border border-verde/30 rounded-full px-4 py-1.5 text-[0.78rem] font-bold">
                VOCÊ ECONOMIZA R$ 440
              </span>
            </div>

            <div className="mt-6 flex flex-col items-center gap-2">
              <QuizCheckoutButton>{ctaDestravar}</QuizCheckoutButton>
              <p className="text-[0.78rem] text-marrom-dark/70 font-medium">
                🛡️ Garantia incondicional de 30 dias · Risco zero
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 5 — PROVA SOCIAL ===== */}
      <section className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[1.2rem] md:text-[1.4rem] font-extrabold text-marrom-dark mb-5 text-center leading-snug">
            Veja o que outras mães de filhos com {idade} estão dizendo:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[dep1, dep2, dep3, dep4].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Depoimento de mãe ${i + 1}`}
                className="w-full rounded-xl shadow-md"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOCO 6 — URGÊNCIA + MEDO PERSONALIZADO ===== */}
      <section className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto bg-rosa/30 border-2 border-rosa rounded-2xl p-6 text-center">
          <h2 className="text-[1.25rem] md:text-[1.45rem] font-extrabold text-marrom-dark">
            {medo?.titulo || "⏰ A janela crítica não espera"}
          </h2>
          <p className="text-[0.95rem] text-marrom-dark/85 leading-[1.6] mt-3">
            {medo?.texto ||
              `O cérebro do(a) ${nome} está numa fase de maior plasticidade entre 2 e 5 anos. Cada semana sem estímulo correto é tempo que NÃO volta.`}
          </p>
          {medo && (
            <p className="text-[0.9rem] text-marrom-dark/75 leading-[1.6] mt-4">
              O cérebro do(a) {nome} está numa fase de maior plasticidade. Cada semana sem estímulo correto é tempo que NÃO volta.
            </p>
          )}
          <div className="mt-5">
            <QuizCheckoutButton>COMEÇAR AGORA POR 12x R$ 5,90 →</QuizCheckoutButton>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 7 — FAQ ===== */}
      <section className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[1.3rem] md:text-[1.5rem] font-extrabold text-marrom-dark mb-4 text-center">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="bg-white rounded-xl px-4 shadow-sm">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`}>
                <AccordionTrigger className="text-left text-[0.95rem] font-bold text-marrom-dark">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.9rem] text-marrom-dark/80 leading-[1.6]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== BLOCO 8 — GARANTIA + CTA FINAL ===== */}
      <section className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto bg-white border-2 border-verde/40 rounded-2xl p-6 text-center">
          <h2 className="text-[1.2rem] md:text-[1.4rem] font-extrabold text-marrom-dark">
            🛡️ GARANTIA INCONDICIONAL DE 30 DIAS
          </h2>
          <p className="text-[0.95rem] text-marrom-dark/85 leading-[1.6] mt-3">
            Se em 30 dias o(a) {nome} não falar UMA palavra nova, eu devolvo cada centavo. Sem perguntas. Sem julgamento. Você fica com o material.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-4 text-[0.75rem] text-marrom-dark/70 font-medium">
            <span className="bg-rosa-light/60 rounded-full px-3 py-1">CRFa 4-13693</span>
            <span className="bg-rosa-light/60 rounded-full px-3 py-1">Pagamento Seguro Kiwify</span>
            <span className="bg-rosa-light/60 rounded-full px-3 py-1">Garantia 30 dias</span>
          </div>
          <div className="mt-5">
            <QuizCheckoutButton>QUERO COMEÇAR POR 12x R$ 5,90 →</QuizCheckoutButton>
          </div>
        </div>
      </section>

      {/* Sticky bar + exit-intent */}
      <StickyLeadBar onClick={() => setExitOpen(true)} />
      <ExitIntentModal open={exitOpen} onClose={() => setExitOpen(false)} />
    </main>
  );
};

export default QuizResultado;
