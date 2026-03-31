import raioX from "@/assets/raio-x-fala.jpg";
import brincadeiras from "@/assets/brincadeiras-fala.jpg";
import conversas from "@/assets/conversas-fala.jpg";
import falaRotina from "@/assets/fala-rotina.jpg";
import suporteWpp from "@/assets/suporte-whatsapp.jpg";

const mainItems = [
  {
    num: "01", title: "Raio-X da Fala",
    desc: "Antes de estimular, veja exatamente o que o seu filho mais precisa.",
    checks: ["Ideal para quem se sente perdida", "Descubra o que impede ele de falar", "Em apenas 30 minutos"],
    img: raioX,
  },
  {
    num: "02", title: "Lista das Brincadeiras que Destravam a Fala",
    desc: "Use estas brincadeiras validadas para gerar estímulos reais de fala enquanto seu filho se diverte.",
    checks: ["Estímulos com diversão", "Organizadas por nível de fala", "Brincadeiras usadas no consultório"],
    img: brincadeiras,
  },
  {
    num: "03", title: "Conversas que Estimulam a Fala",
    desc: "Use as palavras e conversas certas com seu filho no dia a dia para estimular a fala dele.",
    checks: ["Estímulo sem parecer cobrança", "Ideal para rotina corrida"],
    img: conversas,
  },
  {
    num: "04", title: "Técnica: Estimulando a Fala na Rotina",
    desc: "Use objetos da sua casa e situações do dia a dia para estimular a fala com técnicas simples.",
    checks: ["Estímulo no banho", "Estímulo na hora das refeições", "Estímulo na hora de trocar de roupa"],
    img: falaRotina,
  },
  {
    num: "05", title: "Suporte com a Fono no WhatsApp",
    desc: "Sinta que não está sozinha — tire dúvidas direto com a Thaynara no WhatsApp.",
    checks: ["Tire dúvidas direto com a Fonoaudióloga", "Você não precisa enfrentar isso sozinha"],
    img: suporteWpp,
  },
];

const OQueRecebe = () => (
  <section className="bg-primary py-20 md:py-28 px-6">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-center text-background mb-16 leading-[1.25]">
        Veja tudo que você vai receber para ver seu filho começar a falar em 30 dias.
      </h2>

      <div className="space-y-10">
        {mainItems.map((item, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-background/10 rounded-2xl p-7`}>
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

export default OQueRecebe;
