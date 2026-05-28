import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import thaynaraFoto from "@/assets/thaynara-foto.jpg";
import { Button } from "@/components/ui/button";
import VslEmbed from "@/components/quiz/VslEmbed";
import { QUIZ_LATAM_VSL_EMBEDS } from "@/lib/quizConfigLatam";
import { saveQuizLatamAnswers, type QuizLatamAnswers } from "@/lib/quizStateLatam";

type Option = { value: string; label: string; icon?: string };
type SingleQuestion = {
  type: "single";
  key: keyof QuizLatamAnswers;
  title: string;
  subtitle?: string;
  microcopy?: string;
  options: Option[];
};
type MultiQuestion = {
  type: "multi";
  key: "mama_intentos";
  title: string;
  subtitle?: string;
  options: Option[];
};
type NameQuestion = {
  type: "name";
  key: "hijo_nombre";
  title: string;
  placeholder: string;
};
type InterstitialStep = {
  type: "interstitial";
  vslKey: "vsl_latam_parte_1_embed" | "vsl_latam_parte_2_embed";
  intro: string;
  unlockSec: number;
  label: string;
};
type Step = SingleQuestion | MultiQuestion | NameQuestion | InterstitialStep;

const STEPS: Step[] = [
  {
    type: "single",
    key: "hijo_edad",
    title: "¿Cuántos añitos tiene tu hijo(a)?",
    options: [
      { value: "1 a 2 años", label: "1 a 2 años", icon: "🍼" },
      { value: "2 a 3 años", label: "2 a 3 años", icon: "🧸" },
      { value: "3 a 4 años", label: "3 a 4 años", icon: "🎈" },
      { value: "4 a 5 años", label: "4 a 5 años", icon: "🚂" },
      { value: "Más de 5 años", label: "Más de 5 años", icon: "🎒" },
    ],
  },
  {
    type: "name",
    key: "hijo_nombre",
    title: "¿Cómo se llama tu pequeño(a)? (solo el primer nombre)",
    placeholder: "Ej: Mateo, Sofía, Lucas...",
  },
  {
    type: "single",
    key: "hijo_etapa",
    title: "¿Cómo habla [hijo_nombre] HOY? Marca la opción que más se acerca:",
    options: [
      { value: "no dice palabras", label: "Todavía no dice ninguna palabra" },
      { value: "poquitas palabras", label: "Solo dice poquitas palabras (mamá, papá, agua...)" },
      { value: "difícil entender", label: "Dice varias palabras pero es difícil entenderle" },
      { value: "cambia letras", label: "Dice palabras pero cambia letras/sonidos (ej: 'perro' dice 'tetto')" },
      { value: "habla bien", label: "Habla bien pero yo quisiera que hablara más" },
    ],
  },
  {
    type: "single",
    key: "hijo_reaccion",
    title: "Cuando [hijo_nombre] NO consigue expresarse, ¿qué hace?",
    options: [
      { value: "berrinche", label: "Hace berrinche o llora mucho", icon: "😤" },
      { value: "senala", label: "Señala con el dedo y me lleva para mostrar", icon: "👆" },
      { value: "enredado", label: "Trata de hablar pero le sale enredado y se rinde", icon: "😣" },
      { value: "silencio", label: "Se queda en silencio, cerrado", icon: "🙊" },
      { value: "se_aleja", label: "Se frustra y se aleja", icon: "😔" },
    ],
  },
  {
    type: "interstitial",
    vslKey: "vsl_latam_parte_1_embed",
    intro: "Antes de la siguiente pregunta, escucha esto de la Dra. Thaynara (40 segundos):",
    unlockSec: 18,
    label: "Mensaje de la Dra. Thaynara — Parte 1",
  },
  {
    type: "single",
    key: "mama_emocion",
    title: "Cuando ves a otros niños de la misma edad hablando, ¿qué sientes?",
    options: [
      { value: "preocupada", label: "Se me aprieta el corazón, me preocupo", icon: "💔" },
      { value: "verguenza", label: "Siento vergüenza de comparar, pero comparo", icon: "😔" },
      { value: "triste", label: "Me pongo triste pero fingiendo que está todo bien", icon: "😢" },
      { value: "culpa", label: "Siento culpa de no haber hecho algo antes", icon: "😞" },
      { value: "todo", label: "Todo eso junto", icon: "😭" },
    ],
  },
  {
    type: "single",
    key: "mama_miedo",
    title: "¿Cuál es tu MAYOR miedo hoy sobre [hijo_nombre]?",
    options: [
      { value: "autismo", label: "Que sea autismo o algún problema neurológico", icon: "😰" },
      { value: "escuela", label: "Que tenga dificultades en la escuela", icon: "🏫" },
      { value: "bullying", label: "Que sufra bullying o exclusión social", icon: "😔" },
      { value: "comunicacion", label: "No lograr una comunicación real con él(ella)", icon: "💔" },
      { value: "todo", label: "Todo eso junto", icon: "🌪️" },
    ],
  },
  {
    type: "single",
    key: "hijo_pantalla",
    title: "¿Cuánto tiempo al día [hijo_nombre] pasa viendo pantallas (celular, TV, tablet)?",
    microcopy:
      "💗 Mamá, sin juicios aquí. Quiero entender para adaptar el plan a tu realidad.",
    options: [
      { value: "no_ve", label: "No ve pantallas / no se las permitimos", icon: "🚫" },
      { value: "menos_1h", label: "Menos de 1 hora al día", icon: "📱" },
      { value: "1_2h", label: "1 a 2 horas al día", icon: "📺" },
      { value: "2_4h", label: "2 a 4 horas al día", icon: "🎮" },
      { value: "mais_4h", label: "Más de 4 horas al día", icon: "⏰" },
    ],
  },
  {
    type: "multi",
    key: "mama_intentos",
    title: "¿Qué YA intentaste para ayudar a [hijo_nombre] a hablar?",
    subtitle: "Puedes marcar más de una opción",
    options: [
      { value: "pediatra", label: "Lo llevé al pediatra (me dijeron que era pronto / que esperara)" },
      { value: "fono", label: "Hago o ya hice acompañamiento con fonoaudióloga" },
      { value: "youtube", label: "Probé videos en YouTube" },
      { value: "chupete", label: "Le quité el chupete / la mamadera" },
      { value: "kinder", label: "Lo metí al kínder/jardín para 'estimular'" },
      { value: "nada", label: "Todavía no he intentado nada porque no sé qué hacer" },
    ],
  },
  {
    type: "interstitial",
    vslKey: "vsl_latam_parte_2_embed",
    intro: "Necesitas escuchar esto antes de continuar (1 minuto 36 seg):",
    unlockSec: 30,
    label: "Mensaje de la Dra. Thaynara — Parte 2",
  },
  {
    type: "single",
    key: "hijo_logopeda",
    title: "¿Cuál es la situación de [hijo_nombre] hoy con fonoaudióloga?",
    options: [
      { value: "acompanamiento", label: "Hace acompañamiento actualmente", icon: "👩‍⚕️" },
      { value: "evaluacion", label: "Ya pasó por evaluación (pero no continúa)", icon: "📋" },
      { value: "lista_espera", label: "Está en lista de espera (sistema público o seguro de salud)", icon: "⏰" },
      { value: "nunca", label: "Nunca pasó por una fonoaudióloga", icon: "❌" },
    ],
  },
  {
    type: "single",
    key: "mama_tiempo",
    title: "¿Cuánto tiempo al día puedes dedicarle a estimular a [hijo_nombre]?",
    options: [
      { value: "10-15min", label: "10 a 15 minutos (la rutina es ajetreada)", icon: "⏱️" },
      { value: "20-30min", label: "20 a 30 minutos", icon: "⏰" },
      { value: "30min+", label: "Más de 30 minutos", icon: "🕐" },
      { value: "todo_dia", label: "Estoy con él(ella) todo el día", icon: "👶" },
    ],
  },
  {
    type: "single",
    key: "mama_aspiracion",
    title: "Si en 30 días [hijo_nombre] empezara a hablar de verdad, ¿qué cambiaría para ti?",
    options: [
      { value: "dormir", label: "Por fin podría dormir tranquila", icon: "😌" },
      { value: "culpa", label: "Dejaría de culparme", icon: "🙏" },
      { value: "presion_familia", label: "Mi esposo/familia dejaría de presionarme", icon: "🛡️" },
      { value: "orgullo", label: "Podría enorgullecerme de su desarrollo", icon: "🥰" },
      { value: "todo", label: "Todo eso junto", icon: "✨" },
    ],
  },
  {
    type: "single",
    key: "mama_compromiso",
    title:
      "¿Estás lista para dedicar 15 minutos al día, en casa, siguiendo un paso a paso de fonoaudióloga, para destrabar el habla de [hijo_nombre] en los próximos 30 días?",
    options: [
      { value: "si", label: "SÍ, me comprometo", icon: "✅" },
      { value: "si_dudas", label: "SÍ, pero tengo algunas dudas", icon: "🤔" },
      { value: "ver_primero", label: "Quiero ver primero qué es", icon: "👀" },
    ],
  },
];

const QUESTION_INDICES = STEPS
  .map((s, i) => (s.type !== "interstitial" ? i : -1))
  .filter((i) => i >= 0);
const TOTAL_QUESTIONS = QUESTION_INDICES.length; // 12

const fbqTrack = (event: string, data?: Record<string, unknown>, custom = false) => {
  const w = window as any;
  if (typeof w.fbq !== "function") return;
  const method = custom ? "trackCustom" : "track";
  if (data) w.fbq(method, event, data);
  else w.fbq(method, event);
};

const interpolateName = (text: string, nombre?: string) => {
  const n = (nombre || "tu hijo").trim();
  return text.replace(/\[hijo_nombre\]/g, n);
};

const PROCESSING_MESSAGES = (nombre?: string) => {
  const n = (nombre || "tu hijo").trim();
  return [
    "Analizando tus respuestas...",
    `Cruzando datos de ${n}...`,
    "Identificando el estímulo correcto para esta fase...",
    `Armando el plan personalizado para ${n}...`,
    "Finalizando diagnóstico...",
  ];
};

const NAME_REGEX = /^[A-Za-zÀ-ÿ\s]+$/;
const capitalize = (s: string) =>
  s.length === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1);

const QuizLatam = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<QuizLatamAnswers>({});
  const [processing, setProcessing] = useState(false);
  const [procMsgIdx, setProcMsgIdx] = useState(0);
  const [procProgress, setProcProgress] = useState(0);

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

  useEffect(() => {
    import("@/lib/tracking").then((m) => m.captureTracking());
    fbqTrack(
      "QuizStart_LATAM",
      { content_name: "Quiz Mi Hijo Va a Hablar LATAM", source: "landing_quiz_latam" },
      true,
    );
  }, []);

  useEffect(() => {
    if (!processing) return;
    const msgs = PROCESSING_MESSAGES(answers.hijo_nombre);
    const startedAt = Date.now();
    const dur = 12000;
    const msgInterval = setInterval(() => {
      setProcMsgIdx((i) => Math.min(i + 1, msgs.length - 1));
    }, 2500);
    const progInterval = setInterval(() => {
      const p = Math.min(100, ((Date.now() - startedAt) / dur) * 100);
      setProcProgress(p);
    }, 100);
    const done = setTimeout(() => {
      navigate("/quiz-latam/resultado");
    }, dur);
    return () => {
      clearInterval(msgInterval);
      clearInterval(progInterval);
      clearTimeout(done);
    };
  }, [processing, answers.hijo_nombre, navigate]);

  const currentStep = STEPS[stepIdx];
  const questionNumber = useMemo(() => {
    let count = 0;
    for (let i = 0; i <= stepIdx; i++) if (STEPS[i].type !== "interstitial") count++;
    return count;
  }, [stepIdx]);
  const progressPct = (Math.max(0, questionNumber - (currentStep?.type === "interstitial" ? 0 : 1)) / TOTAL_QUESTIONS) * 100;

  const handleSelectSingle = (key: keyof QuizLatamAnswers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
  };

  const handleToggleMulti = (value: string) => {
    setAnswers((a) => {
      const cur = a.mama_intentos || [];
      return {
        ...a,
        mama_intentos: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value],
      };
    });
  };

  const handleNameChange = (raw: string) => {
    const trimmed = raw.slice(0, 15);
    if (trimmed !== "" && !NAME_REGEX.test(trimmed)) return;
    setAnswers((a) => ({ ...a, hijo_nombre: capitalize(trimmed) }));
  };

  const canContinue = () => {
    if (!currentStep) return false;
    if (currentStep.type === "interstitial") {
      return unlockedAt !== null && now >= unlockedAt;
    }
    if (currentStep.type === "multi") {
      return (answers.mama_intentos?.length || 0) > 0;
    }
    if (currentStep.type === "name") {
      const v = (answers.hijo_nombre || "").trim();
      return v.length >= 2 && NAME_REGEX.test(v);
    }
    return !!answers[currentStep.key];
  };

  const handleContinue = () => {
    const next = stepIdx + 1;

    if (currentStep && currentStep.type !== "interstitial" && questionNumber === 4) {
      fbqTrack("QuizQ4_LATAM", { content_name: "Quiz Mi Hijo Va a Hablar LATAM" }, true);
    }
    if (currentStep && currentStep.type !== "interstitial" && questionNumber === 8) {
      fbqTrack("QuizMidway_LATAM", { content_name: "Quiz Mi Hijo Va a Hablar LATAM" }, true);
    }

    if (next >= STEPS.length) {
      const finalAnswers = { ...answers, completed_at: new Date().toISOString() };
      saveQuizLatamAnswers(finalAnswers);
      fbqTrack(
        "QuizComplete_LATAM",
        {
          content_name: "Quiz Mi Hijo Va a Hablar LATAM",
          value: 14.99,
          currency: "USD",
        },
        true,
      );
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
            En 3 minutos, descubre exactamente por qué tu hijo todavía no habla como debería
          </h1>
          <p className="text-[1rem] md:text-[1.05rem] text-marrom-dark/80 leading-[1.5]">
            Responde 12 preguntas y recibe un diagnóstico personalizado + plan de acción para empezar HOY en casa.
          </p>
          <div className="bg-rosa-light/60 rounded-xl px-4 py-3 text-[0.85rem] text-marrom-dark/85 font-medium">
            Dra. Thaynara Andrade · Fonoaudióloga · +8 años atendiendo niños con retraso del habla
          </div>
          <Button
            onClick={() => setStarted(true)}
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold uppercase tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/30 px-6 py-6 text-[1rem] md:text-[1.1rem] w-full leading-tight whitespace-normal h-auto"
          >
            EMPEZAR DIAGNÓSTICO GRATUITO →
          </Button>
          <p className="text-[0.8rem] text-marrom-dark/60">
            🔒 100% gratuito · Sin registro inicial · Diagnóstico personalizado
          </p>
          <p className="text-[0.85rem] text-marrom-dark/75 font-medium">
            ⭐⭐⭐⭐⭐ Más de 2.000 mamás ya hicieron este diagnóstico
          </p>
        </div>
      </main>
    );
  }

  // ============ PROCESSING THEATER ============
  if (processing) {
    const msgs = PROCESSING_MESSAGES(answers.hijo_nombre);
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
            Espera, estamos preparando tu diagnóstico personalizado...
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
      <div className="max-w-[600px] mx-auto mb-6">
        <div className="flex items-center justify-between gap-3 mb-3">
          <button
            onClick={handleBack}
            className="text-marrom-dark/60 text-[0.85rem] font-medium hover:text-marrom-dark"
            aria-label="Volver"
          >
            ← Volver
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
              html={QUIZ_LATAM_VSL_EMBEDS[currentStep.vslKey]}
              label={currentStep.label}
            />
            {!QUIZ_LATAM_VSL_EMBEDS[currentStep.vslKey] && (
              <p className="text-[0.8rem] text-marrom-dark/60 italic">
                Video en español será agregado pronto
              </p>
            )}
            {remainingSec > 0 ? (
              <p className="text-[0.85rem] text-marrom-dark/60 mt-2">
                El botón se libera en {remainingSec}s...
              </p>
            ) : (
              <Button
                onClick={handleContinue}
                className="mt-2 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold uppercase tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/30 px-8 py-5 text-[0.95rem] w-full max-w-[420px] h-auto animate-in fade-in duration-300"
              >
                Continuar diagnóstico →
              </Button>
            )}
          </div>
        ) : currentStep.type === "name" ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-[1.3rem] md:text-[1.55rem] font-extrabold text-marrom-dark text-center leading-tight">
              {currentStep.title}
            </h2>
            <input
              type="text"
              value={answers.hijo_nombre || ""}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder={currentStep.placeholder}
              maxLength={15}
              autoFocus
              autoCapitalize="words"
              className="w-full h-14 px-4 rounded-xl border-2 border-marrom-dark/15 bg-white text-marrom-dark text-[1.1rem] font-medium text-center focus:outline-none focus:border-[#FF6B35]"
            />
            {canContinue() && (
              <Button
                onClick={handleContinue}
                className="mt-2 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold uppercase tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/30 px-8 py-5 text-[0.95rem] w-full h-auto animate-in fade-in duration-300"
              >
                Continuar →
              </Button>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {currentStep.type === "single" && currentStep.microcopy && (
              <div className="bg-rosa/30 border border-rosa rounded-xl px-4 py-3 text-[0.9rem] text-marrom-dark/90 font-medium text-center leading-snug">
                {currentStep.microcopy}
              </div>
            )}
            <h2 className="text-[1.3rem] md:text-[1.55rem] font-extrabold text-marrom-dark text-center leading-tight">
              {interpolateName(currentStep.title, answers.hijo_nombre)}
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
                    ? (answers.mama_intentos || []).includes(opt.value)
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

export default QuizLatam;
