import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import thaynaraFoto from "@/assets/thaynara-foto.jpg";
import dep1 from "@/assets/es/depoimento-novo-1-es.jpeg";
import dep2 from "@/assets/es/depoimento-novo-2-es.jpeg";
import dep3 from "@/assets/es/depoimento-novo-3-es.jpeg";
import dep4 from "@/assets/es/depoimento-novo-4-es.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuizCheckoutButtonLatam from "@/components/quiz/QuizCheckoutButtonLatam";
import VslEmbed from "@/components/quiz/VslEmbed";
import ExitIntentModalLatam, { useExitIntentLatam } from "@/components/quiz/ExitIntentModalLatam";
import StickyLeadBarLatam from "@/components/quiz/StickyLeadBarLatam";
import { QUIZ_LATAM_VSL_EMBEDS } from "@/lib/quizConfigLatam";
import {
  calcularEtapaLatam,
  loadQuizLatamAnswers,
  type QuizLatamAnswers,
} from "@/lib/quizStateLatam";

const fbqTrack = (event: string, data?: Record<string, unknown>, custom = false) => {
  const w = window as any;
  if (typeof w.fbq !== "function") return;
  const method = custom ? "trackCustom" : "track";
  if (data) w.fbq(method, event, data);
  else w.fbq(method, event);
};

const faltoMap = (nombre: string): Record<string, string> => ({
  pediatra: `🩺 El pediatra te dijo que esperaras. Pero entre los 2 y 4 años es la ventana crítica del cerebro de ${nombre}. Esperar es lo que MÁS atrasa.`,
  fono: `👩‍⚕️ Buscaste ayuda profesional con fonoaudióloga, te felicito. Pero el estímulo de ${nombre} necesita ser DIARIO, en casa, contigo. Los 30 minutos por semana con la fono no alcanzan. El programa potencializa lo que la fono ya está haciendo (o hizo).`,
  youtube: `📱 Los videos en YouTube enseñan cosas aisladas, pero sin método ni ORDEN pueden incluso atrasar el desarrollo de ${nombre}.`,
  chupete: `🍼 Quitar el chupete ayuda pero no basta. Hay que tener estímulo ACTIVO sustituyéndolo.`,
  kinder: `🏫 El kínder estimula el contacto social, pero no trabaja el habla de ${nombre} de forma estructurada.`,
  nada: `⏰ Todavía no intentaste nada. Buena noticia: todavía hay tiempo. Pero hay que empezar HOY, mamá.`,
});

const pantallaMap = (nombre: string): Record<string, string> => ({
  no_ve: `📵 ${nombre} no ve pantallas. ¡Felicitaciones por esa decisión! Pero puede que falte estímulo directo del habla. Mira lo que el programa va a enseñarte.`,
  menos_1h: `📱 ${nombre} ya tiene tiempo controlado de pantalla. Vamos a potencializar con estímulos directos.`,
  "1_2h": `📺 Ese tiempo de pantalla puede usarse de forma estratégica. El módulo de Pantallas del programa te enseña cómo.`,
  "2_4h": `🎮 Ese tiempo de pantalla puede estar atrasando el habla de ${nombre}. El programa tiene un módulo específico para revertirlo.`,
  mais_4h: `⏰ Uno de los principales bloqueos del habla que veo. Buena noticia: tiene solución. El programa te muestra cómo reducirlo SIN crisis.`,
});

const miedoMap = (nombre: string): Record<string, { titulo: string; texto: string }> => ({
  autismo: {
    titulo: "⏰ Mamá, tu miedo es comprensible",
    texto:
      "Sobre el autismo: el programa no reemplaza el diagnóstico, pero la estimulación correcta beneficia a cualquier niño — incluyendo niños en el espectro. Cuanto antes empieces, mejor.",
  },
  escuela: {
    titulo: "⏰ Mamá, tu miedo es comprensible",
    texto: `Los niños que entran a la escuela sin el habla desarrollada sufren más. Pero si ${nombre} empieza HOY, en 30 días ves cambio real antes del próximo año escolar.`,
  },
  bullying: {
    titulo: "⏰ Mamá, tu miedo es comprensible",
    texto: `Los niños que se comunican bien son más aceptados socialmente. El programa ayuda a ${nombre} a desarrollar no solo el habla, sino la confianza de expresarse.`,
  },
  comunicacion: {
    titulo: "⏰ Mamá, tu miedo es comprensible",
    texto: `La comunicación mamá-hijo es la base de todo. Imagínate escuchar a ${nombre} contándote su día, haciendo preguntas, diciendo 'te amo'. En 30 días eso puede cambiar.`,
  },
  todo: {
    titulo: "⏰ Mamá, tu miedo es comprensible",
    texto: "Estos miedos son reales y muy comunes. Pero hay un camino. No dejes que el tiempo siga pasando.",
  },
});

const QuizLatamResultado = () => {
  const [answers, setAnswers] = useState<QuizLatamAnswers | null>(null);
  const [showButton, setShowButton] = useState(false);
  const { open: exitOpen, setOpen: setExitOpen } = useExitIntentLatam(true);

  useEffect(() => {
    const a = loadQuizLatamAnswers();
    setAnswers(a);
    fbqTrack(
      "ViewContent_LATAM",
      {
        content_name: "Quiz Resultado LATAM",
        content_category: "Infoproducto",
        value: 14.99,
        currency: "USD",
      },
      true,
    );
    const onAnyKiwifyClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const aEl = target.closest('a[href*="kiwify"]');
      if (aEl) localStorage.setItem("tiathay_quiz_latam_purchase_clicked", "1");
    };
    document.addEventListener("click", onAnyKiwifyClick);
    return () => document.removeEventListener("click", onAnyKiwifyClick);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowButton(true), 60_000);
    return () => clearTimeout(t);
  }, []);

  if (!answers) return null;
  if (!answers.completed_at) return <Navigate to="/quiz-latam" replace />;

  const etapa = calcularEtapaLatam(answers.hijo_edad, answers.hijo_etapa);
  const edad = answers.hijo_edad || "tu hijo";
  const nombre = (answers.hijo_nombre || "tu hijo").trim();
  const intentos = answers.mama_intentos || [];
  const falto = faltoMap(nombre);
  const pantallaBullet = answers.hijo_pantalla ? pantallaMap(nombre)[answers.hijo_pantalla] : null;
  const miedo = answers.mama_miedo ? miedoMap(nombre)[answers.mama_miedo] : null;

  const ctaDestrabar = `QUIERO DESTRABAR EL HABLA DE ${nombre.toUpperCase()} →`;

  const FAQS = [
    {
      q: `¿Y si ${nombre} tiene autismo (o sospecha de TEA)?`,
      a: "El método se enfoca en estímulos universales de lenguaje que ayudan a cualquier niño — incluyendo niños en el espectro autista. Si hay diagnóstico de TEA, recomiendo combinar con acompañamiento profesional.",
    },
    {
      q: "¿Por qué tan barato ($14.99)? ¿Hay trampa?",
      a: "No hay trampa. Antes vendía mucho más caro y me di cuenta de que la mamá que más NECESITA el método es justamente la que no tiene mucho dinero sobrando. Decidí cobrar $14.99 para llegar al máximo de familias posible.",
    },
    {
      q: "¿Cuánto tiempo duran las clases?",
      a: "Clases cortas, de 5 a 15 minutos cada una. En total son varias horas de contenido en video + audios + tarjetas. Lo ves en el celular, en cualquier momento.",
    },
    {
      q: "¿Voy a tener contacto directo contigo?",
      a: "Sí. El soporte directo por WhatsApp conmigo está incluido. Soy yo de verdad respondiendo.",
    },
    {
      q: "¿Y si en 30 días no veo ningún resultado?",
      a: "Me mandas un mensaje y te devuelvo cada centavo. Sin preguntas, sin formularios, sin juicios.",
    },
  ];

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* ===== BLOCO 1 — DIAGNÓSTICO ===== */}
      <section className="px-4 pt-8 pb-10 text-center">
        <div className="max-w-[640px] mx-auto flex flex-col items-center gap-4">
          <span className="inline-block bg-verde/15 text-verde border border-verde/30 rounded-full px-4 py-1.5 text-[0.78rem] font-bold">
            ✅ Diagnóstico Completado
          </span>
          <h1 className="text-[1.5rem] md:text-[1.95rem] font-extrabold text-marrom-dark leading-[1.2]">
            Mamá de {nombre}: tu pequeño(a) está en la Etapa{" "}
            <span className="text-[#FF6B35]">{etapa}</span> del desarrollo del habla.
          </h1>
          <p className="text-[1rem] text-marrom-dark/80 leading-[1.6] max-w-[560px]">
            Basándome en tus 12 respuestas, identifiqué que {nombre} necesita estímulos específicos para esta fase.
          </p>
          <div className="flex items-center gap-3 bg-rosa-light/60 rounded-xl px-4 py-3 mt-2">
            <img
              src={thaynaraFoto}
              alt="Dra. Thaynara"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
            />
            <p className="text-[0.82rem] text-marrom-dark/85 text-left leading-tight">
              📋 Diagnóstico basado en fonoaudiología clínica
              <br />
              <strong>Dra. Thaynara Andrade</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 2 — VÍDEO 3 + CTA ===== */}
      <section className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto flex flex-col items-center gap-4">
          <VslEmbed
            html={QUIZ_LATAM_VSL_EMBEDS.vsl_latam_parte_3_embed}
            label="Mensaje final de la Dra. Thaynara"
          />
          {!QUIZ_LATAM_VSL_EMBEDS.vsl_latam_parte_3_embed && (
            <p className="text-[0.8rem] text-marrom-dark/60 italic">
              Video en español será agregado pronto
            </p>
          )}
          {showButton ? (
            <div className="w-full max-w-[480px] flex flex-col items-center gap-2 animate-in fade-in duration-500">
              <button
                onClick={() => {
                  document.getElementById("solucion-etapa")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold uppercase tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/30 px-6 py-5 md:py-6 text-[0.9rem] md:text-[1.05rem] w-full leading-tight whitespace-normal h-auto inline-flex items-center justify-center gap-2"
              >
                {ctaDestrabar}
              </button>
              <p className="text-[0.78rem] text-marrom-dark/70 font-medium">
                🛡️ Garantía incondicional 30 días · Riesgo cero
              </p>
            </div>
          ) : (
            <p className="text-[0.85rem] text-marrom-dark/50">
              Mira el video hasta el final para ver la oferta especial...
            </p>
          )}
        </div>
      </section>

      {/* ===== BLOCO 3 — LO QUE FALTÓ ===== */}
      {(intentos.length > 0 || pantallaBullet) && (
        <section className="px-4 pb-10">
          <div className="max-w-[640px] mx-auto">
            <h2 className="text-[1.25rem] md:text-[1.45rem] font-extrabold text-marrom-dark mb-5">
              ❌ Mamá, lo que faltó en el caso de {nombre} hasta hoy:
            </h2>
            <ul className="flex flex-col gap-3">
              {intentos.map((t) => (
                <li
                  key={t}
                  className="bg-white border-l-4 border-[#FF6B35] rounded-r-xl px-4 py-3 text-[0.95rem] text-marrom-dark leading-snug shadow-sm"
                >
                  {falto[t]}
                </li>
              ))}
              {pantallaBullet && (
                <li className="bg-white border-l-4 border-[#FF6B35] rounded-r-xl px-4 py-3 text-[0.95rem] text-marrom-dark leading-snug shadow-sm">
                  {pantallaBullet}
                </li>
              )}
            </ul>
          </div>
        </section>
      )}

      {/* ===== BLOCO 4 — OFERTA ===== */}
      <section id="solucion-etapa" className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[1.3rem] md:text-[1.55rem] font-extrabold text-marrom-dark mb-5 text-center">
            ✅ La solución para la Etapa <span className="text-[#FF6B35]">{etapa}</span> de {nombre}:
          </h2>
          <div className="bg-rosa-light/40 border-2 border-[#FF6B35]/30 rounded-2xl p-5 md:p-7">
            <h3 className="text-[1.2rem] md:text-[1.4rem] font-extrabold text-marrom-dark text-center">
              PROGRAMA MI HIJO VA A HABLAR
            </h3>
            <p className="text-[0.9rem] text-marrom-dark/75 text-center mt-1 mb-5">
              Plan de 30 días · 15 min por día · Adaptado para {edad}
            </p>

            <ul className="flex flex-col gap-2.5 text-[0.92rem] text-marrom-dark leading-snug">
              {[
                ["✅", "Clases en video con método paso a paso"],
                ["✅", "Las 50 palabras exactas (organizadas por nivel)"],
                ["✅", "10 juegos que destraban el habla"],
                ["✅", "Rutina del Niño Tagarela"],
                ["✅", "Pantallas — ¿Aliado o Enemigo del Habla?"],
                ["✅", "Señales de alerta por edad"],
                ["🔥", <strong key="s">SOPORTE WHATSAPP DIRECTO CON LA FONO</strong>],
                ["✅", "10 audios de música para estimular"],
                ["🔥", <strong key="l">LIVES EXCLUSIVAS con la Dra. Thaynara</strong>],
                ["✅", "Comunidad VIP de mamás en WhatsApp"],
                ["✅", "Planner de evolución (imprimible)"],
                ["✅", "50 tarjetas interactivas (imprimibles)"],
              ].map(([icon, text], i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="shrink-0">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <p className="text-[0.95rem] text-marrom-dark/70 line-through">Valor real: $97 USD</p>
              <p className="text-[0.85rem] text-marrom-dark/85 mt-1">
                Hoy, con promoción exclusiva para quien hizo el diagnóstico:
              </p>
              <p className="text-[2.4rem] md:text-[2.8rem] font-extrabold text-[#FF6B35] leading-none mt-2">
                $14.99 USD
              </p>
              <span className="inline-block mt-3 bg-verde/15 text-verde border border-verde/30 rounded-full px-4 py-1.5 text-[0.78rem] font-bold">
                AHORRAS más del 80%
              </span>
              <p className="text-[0.85rem] text-[#666666] text-center mt-2 leading-snug">
                💱 El precio se convierte automáticamente a la moneda de tu país (MXN, COP, CLP, PEN, etc.) al momento del pago
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center gap-2">
              <QuizCheckoutButtonLatam>{ctaDestrabar}</QuizCheckoutButtonLatam>
              <p className="text-[0.78rem] text-marrom-dark/70 font-medium">
                🛡️ Garantía incondicional de 30 días · Riesgo cero
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 5 — PRUEBA SOCIAL ===== */}
      <section className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[1.2rem] md:text-[1.4rem] font-extrabold text-marrom-dark mb-5 text-center leading-snug">
            Mira lo que otras mamás de niños con {edad} están diciendo:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[dep1, dep2, dep3, dep4].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Testimonio mamá ${i + 1}`}
                className="w-full rounded-xl shadow-md"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOCO 6 — URGENCIA + MIEDO ===== */}
      <section className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto bg-rosa/30 border-2 border-rosa rounded-2xl p-6 text-center">
          <h2 className="text-[1.25rem] md:text-[1.45rem] font-extrabold text-marrom-dark">
            {miedo?.titulo || "⏰ La ventana crítica no espera"}
          </h2>
          <p className="text-[0.95rem] text-marrom-dark/85 leading-[1.6] mt-3">
            {miedo?.texto ||
              `El cerebro de ${nombre} está en su fase de mayor plasticidad entre los 2 y 5 años. Cada semana sin estímulo correcto es tiempo que NO vuelve.`}
          </p>
          {miedo && (
            <p className="text-[0.9rem] text-marrom-dark/75 leading-[1.6] mt-4">
              El cerebro de {nombre} está en su fase de mayor plasticidad. Cada semana sin estímulo correcto es tiempo que NO vuelve.
            </p>
          )}
          <div className="mt-5 flex flex-col items-center gap-1">
            <QuizCheckoutButtonLatam>EMPEZAR AHORA POR $14.99 USD →</QuizCheckoutButtonLatam>
            <p className="text-[0.85rem] text-[#666666] text-center leading-snug">
              💱 El precio se convierte automáticamente a la moneda de tu país (MXN, COP, CLP, PEN, etc.) al momento del pago
            </p>
          </div>
        </div>
      </section>

      {/* ===== BLOCO 7 — FAQ ===== */}
      <section className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[1.3rem] md:text-[1.5rem] font-extrabold text-marrom-dark mb-4 text-center">
            Preguntas frecuentes
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

      {/* ===== BLOCO 8 — GARANTÍA + CTA FINAL ===== */}
      <section className="px-4 pb-10">
        <div className="max-w-[640px] mx-auto bg-white border-2 border-verde/40 rounded-2xl p-6 text-center">
          <h2 className="text-[1.2rem] md:text-[1.4rem] font-extrabold text-marrom-dark">
            🛡️ GARANTÍA INCONDICIONAL DE 30 DÍAS
          </h2>
          <p className="text-[0.95rem] text-marrom-dark/85 leading-[1.6] mt-3">
            Si en 30 días {nombre} no dice UNA palabra nueva, te devuelvo cada centavo. Sin preguntas. Sin juicios. Te quedas con el material.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-4 text-[0.75rem] text-marrom-dark/70 font-medium">
            <span className="bg-rosa-light/60 rounded-full px-3 py-1">Pago Seguro Kiwify</span>
            <span className="bg-rosa-light/60 rounded-full px-3 py-1">Garantía 30 días</span>
          </div>
          <div className="mt-5 flex flex-col items-center gap-1">
            <QuizCheckoutButtonLatam>QUIERO EMPEZAR AHORA POR $14.99 USD →</QuizCheckoutButtonLatam>
            <p className="text-[0.85rem] text-[#666666] text-center leading-snug">
              💱 El precio se convierte automáticamente a la moneda de tu país (MXN, COP, CLP, PEN, etc.) al momento del pago
            </p>
          </div>
        </div>
      </section>

      <StickyLeadBarLatam onClick={() => setExitOpen(true)} />
      <ExitIntentModalLatam open={exitOpen} onClose={() => setExitOpen(false)} />
    </main>
  );
};

export default QuizLatamResultado;
