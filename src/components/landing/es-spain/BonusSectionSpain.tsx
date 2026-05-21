import bonusMusicas from "@/assets/bonus-musicas.jpg";
import bonusAulaVivo from "@/assets/bonus-aula-vivo.jpg";
import bonusCards from "@/assets/es/bonus-cards-es.jpeg";
import bonusCertificado from "@/assets/es/certificado-hablador-es.jpeg";

const bonusItems = [
  {
    num: "08",
    title: "CANCIONES PARA HABLAR EN HASTA 7 DÍAS",
    desc: "Canciones en audios creadas por la fonoaudióloga de forma estratégica para estimular en el día a día — en la calle, en el parque, en el baño… que harán que tu hijo aprenda sin querer.",
    checks: ["Audios listos para usar en cualquier momento", "Estímulo natural a través de la música"],
    img: bonusMusicas,
  },
  {
    num: "09",
    title: "CONSULTA GRATUITA CON LA FONOAUDIÓLOGA",
    desc: "Recibe un acceso a un encuentro con Thaynara Andrade, fonoaudióloga infantil, y tendrás la oportunidad de aclarar tus dudas e impulsar el habla de tu hijo.",
    checks: ["Encuentro en vivo con la fonoaudióloga", "Resuelve todas tus dudas en tiempo real"],
    img: bonusAulaVivo,
  },
  {
    num: "10",
    title: "TARJETAS INTERACTIVAS DE ESTÍMULO",
    desc: "Tarjetas ilustradas y divertidas para usar en los juegos del día a día, transformando cada momento en una oportunidad de estimular el habla.",
    checks: ["Perfectas para jugar y aprender al mismo tiempo", "Desarrolladas por fonoaudióloga infantil"],
    img: bonusCards,
  },
  {
    num: "11",
    title: "CERTIFICADO PARLANCHÍN",
    desc: "¡Imprime y guarda en la memoria cuánto evolucionó tu pequeño con tu ayuda!",
    checks: ["Un registro especial de la evolución de tu hijo", "Para celebrar cada conquista juntos"],
    img: bonusCertificado,
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
                BONO {item.num}
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

export default BonusSectionEs;
