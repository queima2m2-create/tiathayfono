import bonusMusicas from "@/assets/bonus-musicas.jpg";
import bonusAulaVivo from "@/assets/bonus-aula-vivo.jpg";
import bonusCards from "@/assets/es/bonus-cards-es.jpeg";
import suporteWhatsapp from "@/assets/suporte-whatsapp.jpg";
import bonusPlanner from "@/assets/bonus-certificado.jpg";

type Bonus = {
  num: string;
  title: string;
  desc: string;
  checks: string[];
  img: string;
  highlight?: boolean;
};

const bonusItems: Bonus[] = [
  {
    num: "08",
    title: "10 CANCIONES PARA HABLAR EN HASTA 7 DÍAS",
    desc: "10 audios en formato canción creados por la fonoaudióloga de forma estratégica para estimular en el día a día — en la calle, en el parque, en el baño… que harán que tu hijo aprenda sin querer.",
    checks: ["10 audios listos para usar a cualquier momento", "Estímulo natural a través de la música", "Funcionan en cualquier lugar (auto, baño, parque)"],
    img: bonusMusicas,
  },
  {
    num: "09",
    title: "LIVES EXCLUSIVAS CON LA DRA. THAYNARA",
    desc: "Periódicamente realizo encuentros en vivo vía Zoom con las alumnas del programa. Tienes acceso a TODAS las lives que ocurran — grabadas para siempre en la plataforma para que las veas cuando quieras.",
    checks: [
      "Acceso vitalicio a todas las lives realizadas",
      "Muestra a tu hijo y resuelve dudas con la Thaynara en vivo",
      "Las grabaciones quedan guardadas para revisar",
      "Aviso previo por el grupo VIP de WhatsApp",
    ],
    img: bonusAulaVivo,
    highlight: true,
  },
  {
    num: "10",
    title: "50 TARJETAS INTERACTIVAS DE ESTÍMULO (IMPRIMIBLES)",
    desc: "50 tarjetas ilustradas y divertidas en PDF imprimible para usar en los juegos del día a día. Transforma cada momento en una oportunidad de estimular el habla de tu hijo.",
    checks: ["50 tarjetas listas para imprimir en casa", "Perfectas para jugar y aprender al mismo tiempo", "Desarrolladas por fonoaudióloga infantil"],
    img: bonusCards,
  },
  {
    num: "11",
    title: "COMUNIDAD VIP DE MAMÁS EN WHATSAPP",
    desc: "Entra en un grupo exclusivo en WhatsApp con otras mamás que están en el mismo camino. Comparte logros, intercambia experiencias, celebra cada palabrita nueva. NUNCA MÁS te vas a sentir sola en este camino.",
    checks: [
      "Grupo exclusivo solo para alumnas del programa",
      "Celebra cada logro junto con otras mamás",
      "Apoyo emocional 24/7",
      "Resuelve dudas e intercambia experiencias reales",
    ],
    img: suporteWhatsapp,
  },
  {
    num: "12",
    title: "PLANNER DE EVOLUCIÓN DEL HABLA (IMPRIMIBLE)",
    desc: "Hojas imprimibles para que acompañes visualmente la evolución de tu hijo mes a mes. Marca palabras nuevas, logros, momentos especiales. Se convierte en un recuerdo precioso y al mismo tiempo te da control real sobre el progreso.",
    checks: [
      "PDFs imprimibles listos para usar",
      "Registra cada palabrita nueva",
      "Visualiza el progreso real semana a semana",
    ],
    img: bonusPlanner,
  },
];

const BonusSectionEs = () => (
  <section className="bg-rosa pt-6 md:pt-8 pb-20 md:pb-28 px-6">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-center text-background mb-16 leading-[1.25]">
        Y para acelerar aún más los resultados, preparamos estos <span className="text-dourado">BONOS</span> exclusivos para ti:
      </h2>

      <div className="space-y-10">
        {bonusItems.map((item, i) => (
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
                </div>
              )}
              <span className="inline-block bg-background/15 rounded px-3 py-0.5 text-[0.8rem] tracking-widest mb-4 font-semibold">
                BONO {item.num}
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

export default BonusSectionEs;
