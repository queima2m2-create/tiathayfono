import { useEffect, lazy, Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import VturbPlayer from "@/components/landing/VturbPlayer";
import { getSocialProofCount } from "@/lib/socialProofCount";
import maeBrincando from "@/assets/mae-filho-brincando.webp";
import maePreocupada from "@/assets/mae-filho-preocupada.webp";
import etapa1 from "@/assets/etapa1-cerebro-fala.webp";
import etapa2 from "@/assets/etapa2-protocolo.webp";
import etapa3 from "@/assets/etapa3-tagarelas.webp";
import entregaSinais from "@/assets/entrega-sinais-alerta-es.webp";
import entregaFala from "@/assets/entrega-fala-funciona.webp";
import entregaBrincadeiras from "@/assets/entrega-brincadeiras-fala-es.webp";
import entregaPalavras from "@/assets/entrega-palavras-es.webp";
import entregaAtividades from "@/assets/entrega-atividades-es.webp";
import entregaTelas from "@/assets/entrega-telas.webp";
import entregaSuporteWpp from "@/assets/entrega-suporte-wpp.webp";
import bonusMusicas from "@/assets/bonus-musicas.webp";
import bonusAulaVivo from "@/assets/bonus-aula-vivo.webp";
import bonusCards from "@/assets/bonus-cards-es.webp";
import bonusCertificado from "@/assets/bonus-certificado-es.webp";
import produtoMockup from "@/assets/mockup-mi-hijo-va-a-hablar.jpeg";
import doisCaminhos from "@/assets/dois-caminhos-es.webp";
import thaynaraFoto from "@/assets/thaynara-foto.webp";
import sobreFilha from "@/assets/sobre-filha.webp";
import seloGarantia from "@/assets/selo-garantia-es.webp";

const DepoimentosSection = lazy(() => import("@/components/landing/DepoimentosSection"));
const SocialProofToast = lazy(() => import("@/components/landing/SocialProofToast"));
const UnmuteOverlay = lazy(() => import("@/components/landing/UnmuteOverlay"));

const CTA_LINK = "https://pay.kiwify.com.br/uXb5s35";
const TIMER_KEY = "pricing_timer_start_v5";
const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

const getTimeLeft = () => {
  let start = localStorage.getItem(TIMER_KEY);
  if (!start) {
    start = String(Date.now());
    localStorage.setItem(TIMER_KEY, start);
  }
  const elapsed = Date.now() - Number(start);
  return Math.max(0, TWENTY_FOUR_HOURS - elapsed);
};

const formatTime = (ms: number) => {
  const totalSec = Math.floor(ms / 1000);
  const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
  const s = String(totalSec % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

const painBubbles = [
  { text: "Ya intenté de todo", className: "top-[3%] left-[2%]" },
  { text: "¿Será que mi hijo es autista?", className: "top-[1%] right-[2%]" },
  { text: "Todos sus amiguitos ya hablan", className: "top-[38%] left-[-4%]" },
  { text: "¿Nunca va a hablar?", className: "bottom-[18%] right-[-2%]" },
  { text: "¿Estoy atrasando su desarrollo?", className: "bottom-[2%] left-1/2 -translate-x-1/2" },
];

const steps = [
  {
    num: "ETAPA 1",
    title: "ENTIENDE EL CEREBRO QUE HABLA",
    subtitle: "Descubre cómo el cerebro del niño aprende a hablar — y por qué la mayoría de las madres estimula de la forma equivocada sin saberlo. Cuando entiendes este mecanismo, cada cosa que haces con tu hijo empieza a tener un propósito real.",
    img: etapa1,
  },
  {
    num: "ETAPA 2",
    title: "APLICA LA ESTRUCTURA ÚNICA DE LA DRA. THAYNARA",
    subtitle: `Pon en práctica el protocolo exclusivo desarrollado a partir de ${getSocialProofCount()} atenciones. Una secuencia específica de estímulos que respeta exactamente la etapa de tu hijo y desbloquea el habla de adentro hacia afuera — de forma natural, sin presión y sin salir de casa.`,
    img: etapa2,
  },
  {
    num: "ETAPA 3",
    title: "EL SECRETO DE LOS NIÑOS HABLADORES",
    subtitle: "Descubre qué tienen en común los niños que hablan muchísimo — y cómo transformar la rutina de tu hijo para que él también llegue allí. No es suerte. No es genética. Es método.",
    img: etapa3,
  },
];

const mainItems = [
  { num: "01", title: "SEÑALES DE ALERTA", desc: "Descubre si tu hijo tiene alguna señal de retraso y aplica la guía de forma estratégica.", checks: ["Identifica señales temprano", "Sepa cuándo buscar ayuda profesional"], img: entregaSinais },
  { num: "02", title: "CLASE COMPLETA: QUÉ HACER PARA QUE TU HIJO HABLE", desc: "Clase explicativa y dinámica donde te mostraré exactamente qué hacer para que tu hijo hable.", checks: ["Clase práctica y directa al punto", "Orientación profesional de verdad"], img: entregaFala },
  { num: "03", title: "LOS 10 MEJORES JUEGOS QUE DESBLOQUEAN EL HABLA", desc: "Juegos simples, divertidos y validados por fonoaudióloga que estimulan a tu hijo a hablar naturalmente mientras se divierte.", checks: ["Juegos que estimulan sonidos y palabras nuevas", "Fáciles de hacer en casa con lo que ya tienes"], img: entregaBrincadeiras },
  { num: "04", title: "PALABRAS DE PODER QUE DESTRABAN LA COMUNICACIÓN", desc: "Usa las palabras correctas que harán que tu hijo se sienta seguro para empezar a hablar.", checks: ["Palabras que generan resultado real", "Fácil de aplicar en el día a día"], img: entregaPalavras },
  { num: "05", title: "RUTINA DEL NIÑO HABLADOR", desc: "Usa tu día a día común para hacer que tu hijo hable — sin sufrimiento.", checks: ["Encaja en cualquier rutina", "Juegos validados por fonoaudióloga"], img: entregaAtividades },
  { num: "06", title: "PANTALLAS — ¿ALIADO O ENEMIGO DEL HABLA?", desc: "Entiende cómo el tiempo de pantalla impacta el desarrollo del habla y qué hacer al respecto.", checks: ["Orientación basada en evidencias", "Consejos prácticos para equilibrar el uso"], img: entregaTelas },
  { num: "07", title: "HABLA DIRECTAMENTE CON LA DRA. THAYNARA", desc: "¿Tienes dudas en el camino? Envía un mensaje. Thaynara responde y te orienta personalmente.", checks: ["Orientación personalizada para tu hijo", "Alguien real a tu lado en cada etapa"], img: entregaSuporteWpp },
];

const bonusItems = [
  { num: "08", title: "CANCIONES PARA HABLAR EN HASTA 7 DÍAS", desc: "Canciones en audio creadas estratégicamente por la fono para estimular en el día a día — en la calle, en el parque, en el baño… para que tu hijo aprenda sin darse cuenta.", checks: ["Audios listos para usar en cualquier momento", "Estimulación natural a través de la música"], img: bonusMusicas },
  { num: "09", title: "CONSULTA GRATUITA CON LA FONO", desc: "Gana acceso a un encuentro con Thaynara Andrade, fonoaudióloga infantil, y ten la oportunidad de resolver tus dudas e impulsar el habla de tu hijo.", checks: ["Encuentro en vivo con la fonoaudióloga", "Resuelve tus dudas en tiempo real"], img: bonusAulaVivo },
  { num: "10", title: "TARJETAS INTERACTIVAS DE ESTÍMULO", desc: "Tarjetas ilustradas y divertidas para usar en los juegos del día a día, transformando cada momento en una oportunidad para estimular el habla.", checks: ["Perfectas para jugar y aprender al mismo tiempo", "Desarrolladas por fonoaudióloga infantil"], img: bonusCards },
  { num: "11", title: "CERTIFICADO HABLADOR", desc: "Imprime y guarda como recuerdo cuánto evolucionó tu pequeño con tu ayuda.", checks: ["Un registro especial de la evolución de tu hijo", "Para celebrar cada logro juntos"], img: bonusCertificado },
];

const guideItems = [
  { emoji: "⚠️", price: "US$ 12.99", title: "Señales de Alerta" },
  { emoji: "🎥", price: "US$ 19.99", title: "Clase Completa: Qué Hacer Para Que Tu Hijo Hable" },
  { emoji: "🎲", price: "US$ 12.99", title: "Los 10 Mejores Juegos que Desbloquean el Habla" },
  { emoji: "💬", price: "US$ 12.99", title: "Palabras de Poder que Destraban la Comunicación" },
  { emoji: "🎮", price: "US$ 12.99", title: "Rutina del Niño Hablador" },
  { emoji: "📱", price: "US$ 12.99", title: "Pantallas — ¿Aliado o Enemigo del Habla?" },
  { emoji: "📲", price: "US$ 12.99", title: "Soporte con la Fono por WhatsApp" },
];

const recapBonusItems = [
  { emoji: "🎵", price: "US$ 19.99", title: "Canciones para Hablar en Hasta 7 Días" },
  { emoji: "🎥", price: "US$ 12.99", title: "Clase en Vivo Gratuita con la Fono" },
  { emoji: "🃏", price: "US$ 12.99", title: "Tarjetas Interactivas de Estímulo" },
  { emoji: "🏅", price: "US$ 9.99", title: "Certificado Tagarela" },
];

const problems = [
  "😭 Está viendo a otros niños hablar y siente ese dolor en el pecho que solo una madre conoce",
  "😟 Llora a escondidas porque no logra entender lo que su hijo intenta decir",
  "😓 Ya investigó de todo en internet y cada cosa que lee aumenta más su miedo",
  "🥺 Quiere hacer todo bien por su hijo, pero nadie le enseñó qué hacer de verdad",
];

const desires = [
  "🥰 Escuchar a tu hijo llamarte mamá con intención — y sentir que él te eligió a ti",
  "😌 Acostarte por la noche sabiendo que hiciste todo lo que estaba a tu alcance",
  "🤩 Ver a tu hijo comunicarse, hacer amigos y ocupar el espacio que siempre fue suyo",
];

const faqs = [
  { q: "Compré ahora — ¿cuándo puedo acceder?", a: "Al instante. Cuando el pago sea aprobado, recibes el acceso directo a la plataforma. No necesitas esperar ni instalar nada. En menos de 2 minutos ya puedes estar dentro." },
  { q: "¿Cuánto tiempo tarda mi hijo en empezar a hablar más?", a: "La mayoría de las madres nota algo diferente en la primera semana — un nuevo intento, una palabra que antes no existía. El programa es de 30 días, pero las primeras señales pueden aparecer antes. Cada niño tiene su tiempo, y la Guía fue creada para respetarlo sin dejarte paralizada." },
  { q: "¿Necesito tener conocimiento o comprar material especial?", a: "No. Todo fue creado para funcionar con lo que ya tienes en casa y con la rutina que ya vives. No necesitas entender de fonoaudiología ni comprar juguetes nuevos. Solo tú, tu hijo y 15 minutos al día." },
  { q: "Ya intenté varias cosas y no vi resultado. ¿Esto es diferente?", a: "Sí — y mucho. La diferencia está en el origen: lo que intentaste antes probablemente era contenido genérico, sin estructura clínica. Aquí recibes un protocolo adaptado para madres, con paso a paso claro y validado con niños reales." },
  { q: "Mi hijo ya hace terapia con una fono. ¿Aun así vale la pena?", a: "Vale mucho. La fonoaudióloga atiende a tu hijo por un tiempo limitado a la semana. La Guía te pone en acción en las otras horas del día, dentro de casa. No compite con la terapia: amplifica sus resultados." },
  { q: "¿Cómo sé si la Guía es correcta para mi hijo?", a: "Si tu hijo tiene entre 1 y 5 años y sientes que podría comunicarse mejor — habla poco, no habla, entiende pero no verbaliza, o retrocedió — entonces la Guía fue hecha para él. Y para ti." },
  { q: "¿Desde qué edad puedo usar la Guía?", a: "La Guía está indicada para niños de 1 a 5 años, etapa en la que el cerebro está más receptivo para aprender a hablar. Cuanto antes empiezas, más fuerte puede ser el resultado — pero dentro de ese rango, nunca es tarde para actuar." },
  { q: "¿La plataforma de pago es segura?", a: "Sí, usamos tecnologías avanzadas de seguridad para garantizar un proceso de pago 100% confiable y protegido." },
];

const PricingBlockSpanish = ({ showUrgency = true }: { showUrgency?: boolean }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    if (!showUrgency) return;
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, [showUrgency]);

  return (
  <div className="text-center max-w-[520px] mx-auto">
    <div className="bg-background text-marrom-dark rounded-2xl p-8 md:p-10 shadow-xl">
      {showUrgency && <span className="inline-block bg-vermelho text-background text-[0.85rem] font-bold px-6 py-2.5 rounded-lg mb-5">⏰ La oferta termina en: {formatTime(timeLeft)}</span>}
      <div className="w-full max-w-[320px] mx-auto mb-4 aspect-video rounded-2xl overflow-hidden drop-shadow-lg">
        <img src={produtoMockup} alt="Guía completa Método Tagarela" className="w-full h-full object-cover" loading="lazy" decoding="async" width={1024} height={1024} />
      </div>
      <p className="text-[1rem] mb-2 font-semibold"><span className="bg-vermelho text-background px-3 py-1 rounded-md text-[1.1rem] font-bold">Antes: <span className="line-through">US$ 97.99</span></span></p>
      <p className="text-[1.1rem] mb-1 mt-3">Hoy por <strong className="text-[2.8rem] md:text-[3.2rem] font-black text-marrom-dark leading-none">US$ 19.99</strong></p>
      <div className="mt-5">
        <Button variant="cta" size="lg" className="text-[0.9rem] md:text-[1rem] px-8 py-6 md:py-7 w-full leading-tight whitespace-normal h-auto text-background font-extrabold" asChild>
          <a href={CTA_LINK} onClick={() => import("@/lib/fbConversions").then((m) => m.fbEvents.initiateCheckout())}>QUIERO DESTRABAR EL HABLA DE MI HIJO EN 30 DÍAS</a>
        </Button>
      </div>
      <p className="text-[0.85rem] text-primary/60 mt-4 font-semibold">📲 RECIBE ACCESO INMEDIATO EN TU EMAIL</p>
    </div>
  </div>
  );
};

const V5 = () => {
  const [showRest, setShowRest] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const photos = [{ src: thaynaraFoto, width: 600, height: 800 }, { src: sobreFilha, width: 450, height: 800 }];

  useEffect(() => {
    const fire = () => import("@/lib/fbConversions").then((m) => m.fbEvents.pageView());
    const schedule = () => setTimeout(fire, 1);
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => window.removeEventListener("load", schedule);
  }, []);

  useEffect(() => {
    const reveal = () => setShowRest(true);
    const timer = window.setTimeout(reveal, 150);
    window.addEventListener("scroll", reveal, { once: true, passive: true });
    window.addEventListener("pointerdown", reveal, { once: true, passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("pointerdown", reveal);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentPhoto((prev) => (prev + 1) % photos.length), 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <main>
      <section className="hero-critical bg-gradient-to-b from-rosa-light to-background pt-6 pb-4 md:pt-16 md:pb-12 px-6">
        <div className="hero-critical__inner max-w-[1000px] mx-auto text-center">
          <h1 className="text-[1.45rem] md:text-[2.6rem] font-black leading-[1.1] text-marrom-dark mb-2 md:mb-3 uppercase tracking-tight">HAZ ESTOS AJUSTES EN LA RUTINA DE TU HIJO POR 15 MINUTOS Y MIRA CÓMO FORMA SUS PRIMERAS FRASES <span className="gold text-dourado">EN HASTA 30 DÍAS</span></h1>
          <p className="text-[0.95rem] md:text-[1.05rem] text-primary/80 leading-[1.5] md:leading-[1.8] max-w-[480px] mx-auto">El método creado por una fonoaudióloga que usa la rutina que ya tienes — sin consulta, sin juguetes especiales y sin complicación.</p>
        </div>
      </section>

      <VturbPlayer />

      {showRest && (
        <Suspense fallback={null}>
          <section className="bg-background pt-8 pb-8 md:pt-12 md:pb-12 px-6 text-center">
            <div className="max-w-[800px] mx-auto">
              <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 leading-[1.25]">Más de {getSocialProofCount()} familias ya aplicaron el método de la Dra. Thaynara y vieron a sus hijos empezar a hablar.</h2>
              <p className="text-[1.05rem] text-primary/70 leading-[1.8] max-w-[700px] mx-auto mb-8">Y tú también puedes hacerlo — usando la rutina que ya tienes, sin terapia cara, sin juguetes especiales y sin miedo a equivocarte.</p>
              <img src={maeBrincando} alt="Madre jugando con su hijo" className="rounded-2xl w-full max-w-[500px] mx-auto shadow-md" loading="lazy" width={1024} height={768} />
            </div>
          </section>

          <section className="bg-rosa pt-12 pb-12 md:pt-16 md:pb-16 px-6 text-center">
            <div className="max-w-[900px] mx-auto">
              <h2 className="text-[1.5rem] md:text-[1.9rem] font-extrabold text-background mb-3 leading-[1.3]">Miras a tu hijo y sientes esa angustia de no lograr entender lo que quiere.</h2>
              <p className="text-[1.05rem] text-background/70 max-w-[650px] mx-auto mb-8 leading-[1.8]">Lo llamas y no responde. Preguntas algo y él señala o llora. Y cada día que pasa sin hablar, aparece ese miedo: ¿será que dejé pasar demasiado tiempo?<br /><br />La verdad es que nadie te enseñó qué estimular, cuándo estimular y cómo encajarlo en tu día — sin convertirlo en otra tarea imposible dentro de una rutina ya llena.<br /><br />Probablemente ya te descubriste pensando:</p>
              <div className="relative max-w-[500px] mx-auto mb-8 px-4">
                <img src={maePreocupada} alt="Madre preocupada cargando a su hijo" className="rounded-2xl w-full shadow-lg" loading="lazy" width={1024} height={1024} />
                {painBubbles.map((b) => <span key={b.text} className={`absolute bg-white/95 text-marrom-dark text-[0.65rem] md:text-[0.8rem] font-bold px-3 py-2 rounded-2xl shadow-lg leading-snug max-w-[130px] md:max-w-[155px] text-center backdrop-blur-sm ${b.className}`}>{b.text}</span>)}
              </div>
              <p className="text-[1.1rem] md:text-[1.25rem] font-bold text-background mt-8 leading-[1.5] max-w-[650px] mx-auto">Si te identificaste con alguno de estos pensamientos, debes saber que no es tu culpa. Nadie te enseñó el método correcto. <span className="underline decoration-2">Hasta ahora:</span></p>
            </div>
          </section>

          <section className="bg-rosa-light pt-12 pb-12 md:pt-16 md:pb-16 px-4">
            <div className="max-w-[720px] mx-auto">
              <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 text-center leading-[1.2]">La mayoría de las madres estimula a su hijo de la forma equivocada sin saberlo. Cuando entiendes el método correcto, todo cambia:</h2>
              <div className="w-16 h-1 bg-rosa mx-auto rounded-full mb-10" />
              <div className="space-y-8">{steps.map((s) => <div key={s.title} className="bg-card border-2 border-rosa/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"><div className="aspect-video w-full overflow-hidden"><img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" width={1280} height={720} /></div><div className="p-6"><span className="inline-block bg-rosa text-background text-[0.75rem] font-bold px-4 py-1.5 rounded-full mb-3 tracking-wider">{s.num}</span><h3 className="text-[1.15rem] md:text-[1.35rem] font-extrabold text-marrom-dark leading-[1.3] mb-2">{s.title}</h3><p className="text-[0.95rem] text-primary/80 leading-[1.7]">{s.subtitle}</p></div></div>)}</div>
            </div>
          </section>

          <section className="bg-rosa pt-20 md:pt-28 pb-6 md:pb-8 px-6"><div className="max-w-[900px] mx-auto"><h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-center text-background mb-16 leading-[1.25]">Lo que está dentro de la Guía que ya destrabó el habla de {getSocialProofCount()} niños</h2><div className="space-y-10">{mainItems.map((item, i) => <div key={item.title} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center bg-background/10 rounded-2xl p-7 border border-background/30`}><div className="md:w-2/5"><img src={item.img} alt={item.title} className="rounded-xl w-full object-cover aspect-[4/3]" loading="lazy" width={1024} height={768} /></div><div className="md:w-3/5 text-background"><span className="inline-block bg-background/15 rounded px-3 py-0.5 text-[0.8rem] tracking-widest mb-4 font-semibold">{item.num}</span><h3 className="text-[1.15rem] md:text-[1.3rem] font-extrabold mb-3 leading-[1.3]">{item.title}</h3><p className="text-[0.95rem] opacity-80 leading-[1.7] mb-4">{item.desc}</p><ul className="space-y-2">{item.checks.map((c) => <li key={c} className="text-[0.9rem] opacity-90 flex items-start gap-2"><span className="shrink-0">✅</span>{c}</li>)}</ul></div></div>)}</div></div></section>

          <section className="bg-rosa pt-6 md:pt-8 pb-20 md:pb-28 px-6"><div className="max-w-[900px] mx-auto"><h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-center text-background mb-16 leading-[1.25]">Y para acelerar todavía más los resultados, preparamos estos <span className="text-dourado">BONOS</span> exclusivos para ti:</h2><div className="space-y-10">{bonusItems.map((item, i) => <div key={item.title} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center bg-background/10 rounded-2xl p-7 border border-background/30`}><div className="md:w-2/5"><img src={item.img} alt={item.title} className="rounded-xl w-full object-cover aspect-[4/3]" loading="lazy" width={1024} height={768} /></div><div className="md:w-3/5 text-background"><span className="inline-block bg-background/15 rounded px-3 py-0.5 text-[0.8rem] tracking-widest mb-4 font-semibold">BONO {item.num}</span><h3 className="text-[1.15rem] md:text-[1.3rem] font-extrabold mb-3 leading-[1.3]">{item.title}</h3><p className="text-[0.95rem] opacity-80 leading-[1.7] mb-4">{item.desc}</p><ul className="space-y-2">{item.checks.map((c) => <li key={c} className="text-[0.9rem] opacity-90 flex items-start gap-2"><span className="shrink-0">✅</span>{c}</li>)}</ul></div></div>)}</div></div></section>

          <DepoimentosSection language="es" />

          <section className="bg-background pb-10 px-4 text-center"><a href="#recapitulando" onClick={() => import("@/lib/fbConversions").then((m) => m.fbEvents.initiateCheckout())} className="inline-flex items-center justify-center rounded-full bg-verde px-8 py-5 md:py-6 text-[0.85rem] md:text-[1rem] font-bold uppercase tracking-wide text-background shadow-lg shadow-verde/30 animate-pulse-glow w-full md:w-auto max-w-[600px] leading-tight">QUIERO DESTRABAR EL HABLA DE MI HIJO EN 30 DÍAS →</a></section>

          <section className="bg-rosa py-20 md:py-28 px-6 text-center"><div className="max-w-[750px] mx-auto"><h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-background mb-14 leading-[1.25]">La Guía Mi Hijo Va a Hablar es para quien…</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">{problems.map((p) => <div key={p} className="bg-background/[0.08] rounded-2xl px-6 py-5 text-left text-background text-[1rem] leading-[1.6]">{p}</div>)}</div><div className="mt-10"><p className="text-[0.85rem] font-bold text-background/60 uppercase tracking-[2px] mb-6">Pero en el fondo, lo que realmente quieres es 👇</p><div className="space-y-4">{desires.map((d) => <div key={d} className="bg-background/[0.12] rounded-2xl px-6 py-5 text-left text-background text-[1rem] leading-[1.6]">{d}</div>)}</div></div></div></section>

          <section id="recapitulando" className="bg-bege-dark pt-12 pb-6 md:pt-16 md:pb-8 px-6 text-center"><div className="max-w-[750px] mx-auto"><span className="inline-block bg-border text-primary text-[0.78rem] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-5">RESUMEN</span><h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-8 leading-[1.25]">Todo lo que tendrás en tus manos para ver a tu hijo hablar en hasta 30 días</h2><img src={produtoMockup} alt="Guía completa" className="rounded-2xl w-full max-w-[520px] mx-auto mb-8 shadow-lg" loading="lazy" width={1024} height={1024} /><h3 className="text-[1.05rem] font-extrabold text-marrom-dark mb-3">📖 Contenido de la Guía</h3><div className="max-w-[600px] mx-auto mb-5 space-y-2">{guideItems.map((item) => <div key={item.title} className="bg-background rounded-lg px-4 py-3 shadow-sm border border-border flex items-center gap-2.5"><span className="text-[1.1rem] shrink-0">{item.emoji}</span><p className="text-[0.9rem] font-bold text-marrom-dark leading-[1.3] flex-1 text-left">{item.title}</p><span className="text-vermelho font-bold text-[0.85rem] line-through whitespace-nowrap shrink-0">{item.price}</span></div>)}</div><h3 className="text-[1.05rem] font-extrabold text-marrom-dark mb-3 mt-6">+ todos estos <span className="text-dourado">BONOS</span> 👇</h3><div className="max-w-[600px] mx-auto mb-8 space-y-2">{recapBonusItems.map((item) => <div key={item.title} className="bg-background rounded-lg px-4 py-3 shadow-sm border border-border flex items-center gap-2.5"><span className="text-[1.1rem] shrink-0">{item.emoji}</span><p className="text-[0.9rem] font-bold text-marrom-dark leading-[1.3] flex-1 text-left">{item.title}</p><span className="text-vermelho font-bold text-[0.85rem] line-through whitespace-nowrap shrink-0">{item.price}</span></div>)}</div><div className="mt-4"><h3 className="text-[1.2rem] font-extrabold text-marrom-dark mb-1">Todo esto podría costar fácilmente</h3><p className="text-[2rem] font-black text-vermelho line-through mb-1">US$ 97.99</p><p className="text-[1.1rem] text-marrom-dark font-extrabold">Pero no pagarás NI LA MITAD DE ESO...</p></div></div></section>

          <section id="preco" className="bg-rosa pt-4 pb-8 md:pt-6 md:pb-10 px-4"><PricingBlockSpanish /></section>

          <section className="bg-background py-12 md:py-16 px-6 text-center"><div className="max-w-[750px] mx-auto"><h2 className="text-[1.4rem] md:text-[1.9rem] font-extrabold text-vermelho mb-2 leading-[1.3]">¿Vas a seguir sin saber cómo ayudar a tu hijo a hablar más?</h2><h2 className="text-[1.4rem] md:text-[1.9rem] font-extrabold text-rosa mb-6 leading-[1.3]">¿O vas a verlo desbloquear el habla en los próximos 30 días?</h2><div className="aspect-video w-full max-w-[600px] mx-auto mb-6 overflow-hidden rounded-2xl shadow-md"><img src={doisCaminhos} alt="Dos caminos: con o sin la guía" className="w-full h-full object-cover" loading="lazy" width={1024} height={576} /></div><div className="max-w-[600px] mx-auto space-y-3 text-left mb-6"><p className="text-[1.05rem] text-marrom-dark font-bold leading-[1.6]">❌ Si no actúas, seguirás intentando adivinar qué hacer — mientras el tiempo pasa.</p><p className="text-[1.05rem] text-rosa font-bold leading-[1.6]">✅ Si actúas ahora, finalmente tendrás un camino claro para ayudar a tu hijo a hablar más — en pocos minutos al día.</p></div></div></section><section className="bg-rosa py-14 md:py-20 px-6"><PricingBlockSpanish showUrgency={false} /></section>

          <section className="bg-background py-14 md:py-20 px-6"><div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 items-center"><div className="flex flex-col items-center gap-3"><div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">{photos.map((item, i) => <img key={item.src} src={item.src} alt={`Thaynara Andrade - Foto ${i + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === currentPhoto ? "opacity-100" : "opacity-0"}`} loading="lazy" decoding="async" width={item.width} height={item.height} />)}</div><div className="flex gap-2">{photos.map((_, i) => <button key={i} onClick={() => setCurrentPhoto(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentPhoto ? "bg-marrom-dark" : "bg-primary/30"}`} aria-label={`Foto ${i + 1}`} />)}</div></div><div><span className="inline-block px-4 py-1.5 border border-primary rounded-full text-[0.85rem] text-primary mb-5">Conoce a la creadora de la Estructura Única del Habla</span><h2 className="text-[1.5rem] md:text-[1.8rem] font-extrabold text-marrom-dark mb-5 leading-[1.3]">¡Hola! Soy Thaynara Andrade</h2><div className="space-y-4 text-[1rem] text-primary/80 leading-[1.8]"><p><strong className="text-marrom-dark">Fonoaudióloga infantil especializada en el desarrollo de la comunicación y el lenguaje en los primeros años de vida.</strong></p><p>Ya acompañé a más de <strong className="text-marrom-dark">{getSocialProofCount()} familias</strong> — y lo que vi en todas fue lo mismo: las madres necesitaban algo más que la consulta — saber exactamente qué hacer en casa, en el baño, a la hora de comer y en los juegos del día a día.</p><p>Madres que estaban perdidas, pensando que su hijo nunca iba a hablar — <strong className="text-marrom-dark">hoy me envían videos emocionadas con cada nueva palabrita.</strong></p><p>Creé esta Guía porque sé que no toda madre puede estar en terapia cada semana. <strong className="text-marrom-dark">Pero toda madre puede aprender a estimular mejor.</strong></p><p>Aquí no encontrarás fórmulas mágicas. Encontrarás un <strong className="text-marrom-dark">camino claro, leve y basado en lo que realmente funciona en la práctica clínica</strong> — usando situaciones simples que ya vives.</p><p>Mi objetivo es que te sientas segura y confiada — y que veas, con tus propios ojos, <strong className="text-marrom-dark">la evolución de tu hijo.</strong></p></div></div></div></section>

          <section className="bg-rosa py-20 md:py-28 px-6"><div className="max-w-[750px] mx-auto text-background text-center"><h2 className="text-[1.4rem] md:text-[1.65rem] font-extrabold mb-8 leading-[1.3]">Aplica, mira a tu hijo evolucionar — o te devolvemos cada centavo</h2><div className="flex justify-center mb-10"><img src={seloGarantia} alt="Sello de garantía de 30 días — devolución del 100% de tu dinero" loading="lazy" width={512} height={512} className="w-[220px] md:w-[300px] h-auto" /></div><div className="space-y-5 text-[1rem] opacity-90 leading-[1.8] max-w-[650px] mx-auto"><p><strong>Sé lo que este método hace por la vida de una familia. Lo viví en más de {getSocialProofCount()} atenciones. Por eso tengo total confianza para ofrecer esta garantía: entra, aplica con tu hijo y vive la experiencia completa. Si en 30 días no sientes que valió cada centavo — solo me avisas y te devuelvo todo.</strong></p><p><strong>El riesgo es cero. Lo que puedes ganar es ver a tu hijo hablar. Ese es el intercambio que la Dra. Thaynara te propone hoy.</strong></p></div></div></section><section className="bg-rosa py-20 md:py-24 px-6"><PricingBlockSpanish /></section>

          <section className="bg-background py-20 md:py-28 px-6"><div className="max-w-[750px] mx-auto"><h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark text-center mb-14 leading-[1.25]">Preguntas frecuentes</h2><div className="space-y-4">{faqs.map((faq, i) => <div key={faq.q} className="bg-bege-dark rounded-2xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-marrom-dark text-[1rem]"><span>{faq.q}</span><span className="text-xl shrink-0 text-dourado font-bold">{openFaq === i ? "−" : "+"}</span></button>{openFaq === i && <div className="px-6 pb-5 text-[0.95rem] text-primary/80 leading-[1.7]">{faq.a}</div>}</div>)}</div></div></section>

          <footer className="bg-rosa text-background/50 text-center py-8 px-6 text-[0.8rem] leading-relaxed"><p>© 2025 Thaynara Andrade Fonoaudióloga · tiathayfono.com.br · Todos los derechos reservados</p><p className="mt-3 opacity-70">Política de Privacidad · Términos de Uso</p><p className="mt-5 opacity-50 max-w-[600px] mx-auto">Este sitio no está afiliado a Facebook ni a ninguna entidad de Facebook. Después de salir de Facebook, la responsabilidad no es de ellos, sino de nuestro sitio.</p></footer>

          <SocialProofToast language="es" />
          <UnmuteOverlay />
        </Suspense>
      )}
    </main>
  );
};

export default V5;
