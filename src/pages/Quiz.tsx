import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import thaynaraFoto from "@/assets/thaynara-foto.jpg";
import { Button } from "@/components/ui/button";
import VslEmbed from "@/components/quiz/VslEmbed";
import { QUIZ_VSL_EMBEDS } from "@/lib/quizConfig";
import { saveQuizAnswers, type QuizAnswers } from "@/lib/quizState";

type Option = { value: string; label: string; icon?: string };
type SingleQuestion = {
  type: "single";
  key: keyof QuizAnswers;
  title: string;
  subtitle?: string;
  options: Option[];
};
type MultiQuestion = {
  type: "multi";
  key: "mae_tentativas";
  title: string;
  subtitle?: string;
  options: Option[];
};
type InterstitialStep = {
  type: "interstitial";
  vslKey: "vsl_parte_1_embed" | "vsl_parte_2_embed";
  intro: string;
  unlockSec: number;
  label: string;
};
type Step = SingleQuestion | MultiQuestion | InterstitialStep;

const STEPS: Step[] = [
  {
    type: "single",
    key: "filho_idade",
    title: "Quantos aninhos tem seu filho(a)?",
    options: [
      { value: "1 a 2 anos", label: "1 a 2 anos", icon: "🍼" },
      { value: "2 a 3 anos", label: "2 a 3 anos", icon: "🧸" },
      { value: "3 a 4 anos", label: "3 a 4 anos", icon: "🎈" },
      { value: "4 a 5 anos", label: "4 a 5 anos", icon: "🚂" },
      { value: "Mais de 5 anos", label: "Mais de 5 anos", icon: "🎒" },
    ],
  },
  {
    type: "single",
    key: "filho_estagio",
    title: "Como está a fala do seu pequeno hoje?",
    options: [
      { value: "não fala", label: "Ainda não fala nenhuma palavra" },
      { value: "poucas palavras", label: "Fala pouquinhas palavras (mamãe, papai, água...)" },
      { value: "difícil entender", label: "Fala mas é difícil entender" },
      { value: "troca letras", label: "Fala mas troca letras/sons" },
      { value: "fala bem mas queria mais", label: "Fala bem mas eu queria que falasse mais" },
    ],
  },
  {
    type: "single",
    key: "mae_emocao",
    title: "Quando você vê outras crianças da mesma idade falando, o que sente?",
    options: [
      { value: "preocupada", label: "Aperta o coração, fico preocupada", icon: "💔" },
      { value: "vergonha", label: "Sinto vergonha de comparar, mas comparo", icon: "😔" },
      { value: "triste", label: "Fico triste mas fingindo estar tudo bem", icon: "😢" },
      { value: "culpa", label: "Sinto culpa de não ter feito alguma coisa antes", icon: "😞" },
      { value: "tudo junto", label: "Tudo isso junto", icon: "😭" },
    ],
  },
  {
    type: "interstitial",
    vslKey: "vsl_parte_1_embed",
    intro: "Antes da próxima pergunta, ouça isso da Dra. Thaynara (37 segundos):",
    unlockSec: 18,
    label: "Mensagem da Dra. Thaynara — Parte 1",
  },
  {
    type: "single",
    key: "filho_comunicacao",
    title: "Como seu filho(a) se comunica HOJE quando quer alguma coisa?",
    options: [
      { value: "aponta", label: "Aponta com o dedo / faz gestos", icon: "👆" },
      { value: "pega na mão", label: "Pega na sua mão e te leva pra mostrar", icon: "✋" },
      { value: "birra", label: "Faz birra / chora", icon: "😤" },
      { value: "enrolado", label: "Tenta falar mas sai enrolado", icon: "😣" },
      { value: "desiste", label: "Fica frustrado e desiste", icon: "😔" },
    ],
  },
  {
    type: "multi",
    key: "mae_tentativas",
    title: "O que você JÁ tentou pra ajudar seu filho a falar?",
    subtitle: "Pode marcar mais de uma opção",
    options: [
      { value: "pediatra", label: "Levei no pediatra (disseram que era cedo / pra esperar)" },
      { value: "fono", label: "Levei em fonoaudióloga (mas não consigo continuar/é caro)" },
      { value: "youtube", label: "Tentei vídeos no YouTube" },
      { value: "chupeta", label: "Cortei a chupeta / a mamadeira" },
      { value: "escolinha", label: "Coloquei na escolinha pra 'estimular'" },
      { value: "nada", label: "Ainda não tentei nada porque não sei o que fazer" },
    ],
  },
  {
    type: "interstitial",
    vslKey: "vsl_parte_2_embed",
    intro: "Você precisa ouvir isso antes de continuar (1 minuto e 10 segundos):",
    unlockSec: 35,
    label: "Mensagem da Dra. Thaynara — Parte 2",
  },
  {
    type: "single",
    key: "mae_tempo",
    title: "Quanto tempo por dia você consegue dedicar pro seu filho?",
    options: [
      { value: "10-15min", label: "10 a 15 minutos (a rotina é corrida)", icon: "⏱️" },
      { value: "20-30min", label: "20 a 30 minutos", icon: "⏰" },
      { value: "30min+", label: "Mais de 30 minutos", icon: "🕐" },
      { value: "dia todo", label: "Eu fico o dia todo com ele(a)", icon: "👶" },
    ],
  },
  {
    type: "single",
    key: "mae_aspiracao",
    title: "Se em 30 dias seu filho começasse a falar de verdade, o que mudaria pra você?",
    options: [
      { value: "dormir tranquila", label: "Eu finalmente ia conseguir dormir tranquila", icon: "😌" },
      { value: "parar de me culpar", label: "Ia parar de me culpar", icon: "🙏" },
      { value: "familia parar", label: "Meu marido/família iam parar de me cobrar", icon: "🛡️" },
      { value: "orgulho", label: "Eu ia poder me orgulhar do desenvolvimento dele", icon: "🥰" },
      { value: "tudo junto", label: "Tudo isso junto", icon: "✨" },
    ],
  },
  {
    type: "single",
    key: "mae_commitment",
    title:
      "Você está pronta pra dedicar 15 minutos por dia, em casa, seguindo um passo a passo de fonoaudióloga, pra destravar a fala do seu filho nos próximos 30 dias?",
    options: [
      { value: "sim", label: "SIM, eu topo", icon: "✅" },
      { value: "sim com duvidas", label: "SIM, mas tenho algumas dúvidas", icon: "🤔" },
      { value: "ver primeiro", label: "Quero ver primeiro o que é", icon: "👀" },
    ],
  },
];

const QUESTION_INDICES = STEPS
  .map((s, i) => (s.type !== "interstitial" ? i : -1))
  .filter((i) => i >= 0);
const TOTAL_QUESTIONS = QUESTION_INDICES.length; // 8

const fbqTrack = (event: string, data?: Record<string, unknown>) => {
  const w = window as any;
  if (typeof w.fbq === "function") {
    if (data) w.fbq("track", event, data);
    else w.fbq("track", event);
  }
};

const PROCESSING_MESSAGES = (idade: string) => [
  "Analisando suas respostas...",
  `Cruzando com a idade de ${idade || "seu filho"}...`,
  "Identificando o estímulo correto pra fase atual...",
  "Verificando o que está faltando no seu caso...",
  "Montando seu plano personalizado...",
  "Finalizando diagnóstico...",
];

const Quiz = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [processing, setProcessing] = useState(false);
  const [procMsgIdx, setProcMsgIdx] = useState(0);
  const [procProgress, setProcProgress] = useState(0);

  // Interstitial unlock timer
  const [unlockedAt, setUnlockedAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    if (!started) return;
    const step = STEPS[stepIdx];
    if (step?.type === "interstitial") {
      const start = Date.now();
      setUnlockedAt(start + step.unlockSec * 1000);
      setNow(start);
      const t = setInterval(() => setNow(Date.now()), 250);
      return () => clearInterval(t);
    } else {
      setUnlockedAt(null);
    }
  }, [stepIdx, started]);

  // Fire QuizStart once
  useEffect(() => {
    fbqTrack("QuizStart", {
      content_name: "Quiz Meu Filho Vai Falar BR",
      source: "landing_quiz",
    });
  }, []);

  // Processing theater
  useEffect(() => {
    if (!processing) return;
    const msgs = PROCESSING_MESSAGES(answers.filho_idade || "");
    const startedAt = Date.now();
    const dur = 18000;
    const msgInterval = setInterval(() => {
      setProcMsgIdx((i) => Math.min(i + 1, msgs.length - 1));
    }, 3000);
    const progInterval = setInterval(() => {
      const p = Math.min(100, ((Date.now() - startedAt) / dur) * 100);
      setProcProgress(p);
    }, 100);
    const done = setTimeout(() => {
      navigate("/quiz/resultado");
    }, dur);
    return () => {
      clearInterval(msgInterval);
      clearInterval(progInterval);
      clearTimeout(done);
    };
  }, [processing, answers.filho_idade, navigate]);

  const currentStep = STEPS[stepIdx];
  const questionNumber = useMemo(() => {
    let count = 0;
    for (let i = 0; i <= stepIdx; i++) if (STEPS[i].type !== "interstitial") count++;
    return count;
  }, [stepIdx]);
  const progressPct = (Math.max(0, questionNumber - (currentStep?.type === "interstitial" ? 0 : 1)) / TOTAL_QUESTIONS) * 100;

  const handleSelectSingle = (key: keyof QuizAnswers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
  };

  const handleToggleMulti = (value: string) => {
    setAnswers((a) => {
      const cur = a.mae_tentativas || [];
      return {
        ...a,
        mae_tentativas: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value],
      };
    });
  };

  const canContinue = () => {
    if (!currentStep) return false;
    if (currentStep.type === "interstitial") {
      return unlockedAt !== null && now >= unlockedAt;
    }
    if (currentStep.type === "multi") {
      return (answers.mae_tentativas?.length || 0) > 0;
    }
    return !!answers[currentStep.key];
  };

  const handleContinue = () => {
    const next = stepIdx + 1;

    // Track midway after Q4
    if (currentStep && currentStep.type !== "interstitial" && questionNumber === 4) {
      fbqTrack("QuizMidway", { content_name: "Quiz Meu Filho Vai Falar BR" });
    }

    if (next >= STEPS.length) {
      // Q8 done -> processing
      const finalAnswers = { ...answers, completed_at: new Date().toISOString() };
      saveQuizAnswers(finalAnswers);
      fbqTrack("QuizComplete", {
        content_name: "Quiz Meu Filho Vai Falar BR",
        value: 67,
        currency: "BRL",
      });
      setProcessing(true);
      return;
    }
    setStepIdx(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    if (stepIdx === 0) {
      setStarted(false);
      return;
    }
    setStepIdx(stepIdx - 1);
  };

  // ============ ENTRY SCREEN ============
  if (!started) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[480px] flex flex-col items-center text-center gap-5">
          <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden shadow-xl ring-4 ring-rosa-light">
            <img
              src={thaynaraFoto}
              alt="Dra. Thaynara Andrade — Fonoaudióloga infantil"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>
          <h1 className="text-[1.55rem] md:text-[1.95rem] font-extrabold text-marrom-dark leading-[1.2]">
            Em 90 segundos, descubra exatamente por que seu filho ainda não fala como deveria
          </h1>
          <p className="text-[1rem] md:text-[1.05rem] text-marrom-dark/80 leading-[1.5]">
            Responda 8 perguntas rápidas e receba um diagnóstico personalizado + um plano de ação pra começar HOJE em casa.
          </p>
          <div className="bg-rosa-light/60 rounded-xl px-4 py-3 text-[0.85rem] text-marrom-dark/85 font-medium">
            Dra. Thaynara Andrade · Fonoaudióloga (CRFa 4-13693) · +8 anos atendendo crianças com atraso de fala
          </div>
          <Button
            onClick={() => setStarted(true)}
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold uppercase tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/30 px-6 py-6 text-[1rem] md:text-[1.1rem] w-full leading-tight whitespace-normal h-auto"
          >
            COMEÇAR DIAGNÓSTICO GRATUITO →
          </Button>
          <p className="text-[0.8rem] text-marrom-dark/60">
            🔒 100% gratuito · Sem cadastro inicial · Leva 90 segundos
          </p>
          <p className="text-[0.85rem] text-marrom-dark/75 font-medium">
            ⭐⭐⭐⭐⭐ Mais de 2.000 mães já fizeram esse diagnóstico
          </p>
        </div>
      </main>
    );
  }

  // ============ PROCESSING THEATER ============
  if (processing) {
    const msgs = PROCESSING_MESSAGES(answers.filho_idade || "");
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-[420px] text-center flex flex-col items-center gap-6">
          <div className="w-14 h-14 border-4 border-rosa-light border-t-[#FF6B35] rounded-full animate-spin" />
          <h2 className="text-[1.15rem] md:text-[1.3rem] font-bold text-marrom-dark leading-snug min-h-[60px]">
            {msgs[procMsgIdx]}
          </h2>
          <div className="w-full h-3 bg-rosa-light/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF6B35] transition-all duration-200"
              style={{ width: `${procProgress}%` }}
            />
          </div>
          <p className="text-[0.85rem] text-marrom-dark/60">
            Aguarde, estamos preparando seu diagnóstico personalizado...
          </p>
        </div>
      </main>
    );
  }

  // ============ QUESTION / INTERSTITIAL ============
  const remainingSec =
    currentStep.type === "interstitial" && unlockedAt
      ? Math.max(0, Math.ceil((unlockedAt - now) / 1000))
      : 0;

  return (
    <main className="min-h-screen bg-background px-4 py-6">
      {/* Top bar */}
      <div className="max-w-[600px] mx-auto mb-6">
        <div className="flex items-center justify-between gap-3 mb-3">
          <button
            onClick={handleBack}
            className="text-marrom-dark/60 text-[0.85rem] font-medium hover:text-marrom-dark"
            aria-label="Voltar"
          >
            ← Voltar
          </button>
          <span className="text-[0.8rem] font-bold text-marrom-dark/70">
            {questionNumber}/{TOTAL_QUESTIONS}
          </span>
        </div>
        <div className="h-2 bg-rosa-light/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF6B35] transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <div
        key={stepIdx}
        className="max-w-[600px] mx-auto animate-in fade-in slide-in-from-right-4 duration-300"
      >
        {currentStep.type === "interstitial" ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[0.9rem] md:text-[0.95rem] text-marrom-dark/75 font-medium">
              {currentStep.intro}
            </p>
            <VslEmbed
              html={QUIZ_VSL_EMBEDS[currentStep.vslKey]}
              label={currentStep.label}
            />
            {remainingSec > 0 ? (
              <p className="text-[0.85rem] text-marrom-dark/60 mt-2">
                Botão libera em {remainingSec}s...
              </p>
            ) : (
              <Button
                onClick={handleContinue}
                className="mt-2 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold uppercase tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/30 px-8 py-5 text-[0.95rem] w-full max-w-[420px] h-auto animate-in fade-in duration-300"
              >
                Continuar →
              </Button>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h2 className="text-[1.3rem] md:text-[1.55rem] font-extrabold text-marrom-dark text-center leading-tight">
              {currentStep.title}
            </h2>
            {currentStep.subtitle && (
              <p className="text-[0.9rem] text-marrom-dark/70 text-center -mt-2">
                {currentStep.subtitle}
              </p>
            )}

            <div className="flex flex-col gap-3 mt-2">
              {currentStep.options.map((opt) => {
                const selected =
                  currentStep.type === "multi"
                    ? (answers.mae_tentativas || []).includes(opt.value)
                    : answers[currentStep.key] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() =>
                      currentStep.type === "multi"
                        ? handleToggleMulti(opt.value)
                        : handleSelectSingle(currentStep.key, opt.value)
                    }
                    className={
                      "min-h-[60px] w-full text-left px-4 py-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 " +
                      (selected
                        ? "border-[#FF6B35] bg-[#FF6B35]/10 shadow-md"
                        : "border-marrom-dark/15 bg-white hover:border-[#FF6B35]/50")
                    }
                  >
                    {currentStep.type === "multi" && (
                      <span
                        className={
                          "w-5 h-5 shrink-0 rounded border-2 flex items-center justify-center text-white text-xs " +
                          (selected
                            ? "bg-[#FF6B35] border-[#FF6B35]"
                            : "border-marrom-dark/30 bg-white")
                        }
                      >
                        {selected ? "✓" : ""}
                      </span>
                    )}
                    {opt.icon && <span className="text-xl shrink-0">{opt.icon}</span>}
                    <span className="text-[0.95rem] md:text-[1rem] font-medium text-marrom-dark leading-snug">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {canContinue() && (
              <Button
                onClick={handleContinue}
                className="mt-4 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold uppercase tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/30 px-8 py-5 text-[0.95rem] w-full h-auto animate-in fade-in duration-300"
              >
                Continuar →
              </Button>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Quiz;
