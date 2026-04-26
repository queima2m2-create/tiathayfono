import entregaSinais from "@/assets/entrega-sinais-alerta.jpg";
import { getSocialProofCountEs } from "@/lib/socialProofCountEs";
import entregaFala from "@/assets/entrega-fala-funciona.jpg";
import entregaBrincadeiras from "@/assets/entrega-brincadeiras-fala.jpg";
import entregaPalavras from "@/assets/entrega-palavras.jpg";
import entregaAtividades from "@/assets/entrega-atividades.jpg";
import entregaTelas from "@/assets/entrega-telas.jpg";
import entregaSuporteWpp from "@/assets/entrega-suporte-wpp.jpg";

const mainItems = [
  {
    num: "01", title: "SEÑALES DE ALERTA",
    desc: "Descubre si tu hijo tiene alguna señal de retraso y aplica la guía de forma estratégica.",
    checks: ["Identifica señales tempranamente", "Sabe cuándo buscar ayuda profesional"],
    img: entregaSinais,
  },
  {
    num: "02", title: "CLASE COMPLETA: QUÉ HACER PARA QUE TU HIJO HABLE",
    desc: "Clase explicativa y dinámica donde te voy a mostrar exactamente qué hacer para que tu hijo hable.",
    checks: ["Clase práctica y directa al punto", "Orientación profesional de verdad"],
    img: entregaFala,
  },
  {
    num: "03", title: "LOS 10 MEJORES JUEGOS QUE DESBLOQUEAN EL HABLA",
    desc: "Juegos simples, divertidos y validados por una fonoaudióloga que estimulan a tu hijo a hablar de forma natural mientras se divierte.",
    checks: ["Juegos que estimulan sonidos y palabras nuevas", "Fáciles de hacer en casa con lo que ya tienes"],
    img: entregaBrincadeiras,
  },
  {
    num: "04", title: "PALABRAS DE PODER QUE DESBLOQUEAN LA COMUNICACIÓN",
    desc: "Usa las palabras correctas que harán que tu hijo se sienta seguro para empezar a hablar.",
    checks: ["Palabras que generan resultado real", "Fácil de aplicar en el día a día"],
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
    desc: "¿Tienes dudas en el camino? Envía un mensaje. Thaynara responde y te orienta personalmente.",
    checks: ["Orientación personalizada para tu hijo", "Alguien de verdad a tu lado en cada etapa"],
    img: entregaSuporteWpp,
  },
];

const OQueRecebeEs = () => (
  <section className="bg-rosa pt-20 md:pt-28 pb-6 md:pb-8 px-6">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-center text-background mb-16 leading-[1.25]">
        Lo que está dentro de la Guía que ya desbloqueó el habla de {getSocialProofCountEs()} niños
      </h2>

      <div className="space-y-10">
        {mainItems.map((item, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-background/10 rounded-2xl p-7 border border-background/30`}>
            <div className="md:w-2/5">
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
              <span className="inline-block bg-background/15 rounded px-3 py-0.5 text-[0.8rem] tracking-widest mb-4 font-semibold">
                {item.num}
              </span>
              <h3 className="text-[1.15rem] md:text-[1.3rem] font-extrabold mb-3 leading-[1.3]">{item.title}</h3>
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
