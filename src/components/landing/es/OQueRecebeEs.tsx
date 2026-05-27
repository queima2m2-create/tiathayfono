import entregaSinais from "@/assets/es/checklist-del-habla-es.jpeg";
import entregaFala from "@/assets/entrega-fala-funciona.jpg";
import entregaBrincadeiras from "@/assets/es/jugar-sonar-hablar-es.jpeg";
import entregaPalavras from "@/assets/es/palabras-que-destraban-es.jpeg";
import entregaAtividades from "@/assets/es/nino-parlanchin-es.jpeg";
import entregaTelas from "@/assets/entrega-telas.jpg";
import entregaSuporteWpp from "@/assets/entrega-suporte-wpp.jpg";

type Item = {
  num: string;
  title: string;
  desc: string;
  checks: string[];
  img: string;
  highlight?: boolean;
};

const mainItems: Item[] = [
  {
    num: "01", title: "SEÑALES DE ALERTA",
    desc: "Identifica rápidamente si tu hijo tiene señales reales de retraso en el habla — sin tener que esperar a que el pediatra te diga 'espera un poco más'. Vas a saber EXACTAMENTE qué observar, en qué momento actuar, y cuándo vale la pena buscar a una fono presencial.",
    checks: ["Hitos del desarrollo del habla por edad", "Las señales que ninguna mamá puede ignorar", "Cuándo el 'esperar más' puede atrasar aún más a tu hijo"],
    img: entregaSinais,
  },
  {
    num: "02", title: "AULA COMPLETA: QUÉ HACER PARA QUE TU HIJO HABLE",
    desc: "Varias clases en video donde la Dra. Thaynara te muestra exactamente qué hacer para que tu hijo hable — paso a paso, con método y propósito real.",
    checks: ["Clases prácticas y directo al punto", "Orientación profesional de verdad", "Acceso vitalicio a todo el contenido"],
    img: entregaFala,
  },
  {
    num: "03", title: "LOS 10 MEJORES JUEGOS QUE DESBLOQUEAN EL HABLA",
    desc: "Juegos simples, divertidos y validados por una fonoaudióloga que estimulan a tu hijo a hablar de forma natural mientras se divierte.",
    checks: ["Juegos que estimulan sonidos y palabras nuevas", "Fáciles de hacer en casa con lo que ya tienes"],
    img: entregaBrincadeiras,
  },
  {
    num: "04", title: "LAS 50 PALABRAS EXACTAS QUE DESTRABAN EL HABLA",
    desc: "Lista completa con las 50 palabras objetivo que estimulan el cerebro de tu hijo — organizadas por nivel de complejidad. Ya no tienes que adivinar qué palabra usar.",
    checks: ["Lista exacta por nivel (no por edad adivinada)", "Fácil de aplicar en el día a día"],
    img: entregaPalavras,
  },
  {
    num: "05", title: "RUTINA DEL NIÑO PARLANCHÍN",
    desc: "Usa tu día a día común para hacer que tu hijo hable — sin sufrimiento.",
    checks: ["Encaja en cualquier rutina", "Juegos validados por fonoaudióloga"],
    img: entregaAtividades,
  },
  {
    num: "06", title: "PANTALLAS — ¿ALIADO O ENEMIGO DEL HABLA?",
    desc: "Entiende cómo el tiempo de pantalla impacta el desarrollo del habla y qué hacer al respecto.",
    checks: ["Orientación basada en evidencias", "Consejos prácticos para equilibrar el uso"],
    img: entregaTelas,
  },
  {
    num: "07", title: "HABLA DIRECTO CON LA DRA. THAYNARA",
    desc: "Acceso directo a mí por WhatsApp. Envíame un mensaje cuando quieras, te respondo personalmente. Sin robot, sin asistente. Yo misma, Thaynara.",
    checks: ["Orientación personalizada para tu hijo", "Alguien de verdad a tu lado en cada etapa"],
    img: entregaSuporteWpp,
    highlight: true,
  },
];

const OQueRecebeEs = () => (
  <section id="entregas" className="bg-rosa pt-20 md:pt-28 pb-6 md:pb-8 px-6 scroll-mt-20">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-center text-background mb-16 leading-[1.25]">
        Todo lo que vas a tener en tus manos para ver a tu hijo hablar en 30 días
      </h2>

      <div className="space-y-10">
        {mainItems.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center rounded-2xl border ${
              item.highlight
                ? 'bg-dourado/25 border-dourado p-8 md:p-10 shadow-2xl ring-2 ring-dourado'
                : 'bg-background/10 border-background/30 p-7'
            }`}
          >
            <div className="md:w-2/5 w-full">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
            <div className="md:w-3/5 text-background">
              {item.highlight && (
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-block bg-coral text-white rounded px-3 py-1 text-[0.75rem] tracking-wide font-extrabold">
                    🔥 BONUS GIGANTE
                  </span>
                  <span className="inline-block bg-background text-marrom-dark rounded px-3 py-1 text-[0.75rem] font-bold">
                    Vale $97 USD por sí solo
                  </span>
                </div>
              )}
              <span className="inline-block bg-background/15 rounded px-3 py-0.5 text-[0.8rem] tracking-widest mb-4 font-semibold">
                {item.num}
              </span>
              <h3 className={`font-extrabold mb-3 leading-[1.3] ${item.highlight ? 'text-[1.35rem] md:text-[1.6rem]' : 'text-[1.15rem] md:text-[1.3rem]'}`}>
                {item.title}
              </h3>
              <p className="text-[0.95rem] opacity-80 leading-[1.7] mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.checks.map((c, j) => (
                  <li key={j} className="text-[0.9rem] opacity-90 flex items-start gap-2">
                    <span className="shrink-0">✅</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OQueRecebeEs;
