import entregaSinais from "@/assets/entrega-sinais-alerta.jpg";
import entregaFala from "@/assets/entrega-fala-funciona.jpg";
import entregaBrincadeiras from "@/assets/entrega-brincadeiras-fala.jpg";
import entregaPalavras from "@/assets/entrega-palavras.jpg";
import entregaAtividades from "@/assets/entrega-atividades.jpg";
import entregaTelas from "@/assets/entrega-telas.jpg";
import entregaSuporteWpp from "@/assets/entrega-suporte-wpp.jpg";

const mainItems = [
  {
    num: "01", title: "SINAIS DE ALERTA",
    desc: "Descubra se seu filho tem algum sinal de atraso e aplique o guia de forma estratégica.",
    checks: ["Identifique sinais precocemente", "Saiba quando procurar ajuda profissional"],
    img: entregaSinais,
  },
  {
    num: "02", title: "APRENDA COM A FONO",
    desc: "Aula explicativa e dinâmica onde eu vou te mostrar exatamente o que fazer para seu filho falar.",
    checks: ["Aula prática e direto ao ponto", "Orientação profissional de verdade"],
    img: entregaFala,
  },
  {
    num: "03", title: "AS 10 MELHORES BRINCADEIRAS QUE DESBLOQUEIAM A FALA",
    desc: "Brincadeiras simples, divertidas e validadas por fonoaudióloga que estimulam seu filho a falar naturalmente enquanto se diverte.",
    checks: ["Brincadeiras que estimulam sons e palavras novas", "Fáceis de fazer em casa com o que você já tem"],
    img: entregaBrincadeiras,
  },
  {
    num: "04", title: "PALAVRAS DE PODER QUE DESTRAVAM A COMUNICAÇÃO",
    desc: "Use as palavras certas que farão seu filho se sentir seguro para começar a falar.",
    checks: ["Palavras que geram resultado real", "Fácil de aplicar no dia a dia"],
    img: entregaPalavras,
  },
  {
    num: "05", title: "ROTINA DA CRIANÇA TAGARELA",
    desc: "Use seu dia a dia comum para fazer seu filho falar — sem sofrimento.",
    checks: ["Encaixa em qualquer rotina", "Brincadeiras validadas por fonoaudióloga"],
    img: entregaAtividades,
  },
  {
    num: "06", title: "TELAS — ALIADO OU INIMIGO DA FALA?",
    desc: "Entenda como o tempo de tela impacta o desenvolvimento da fala e o que fazer a respeito.",
    checks: ["Orientação baseada em evidências", "Dicas práticas para equilibrar o uso"],
    img: entregaTelas,
  },
  {
    num: "07", title: "SUPORTE COM A FONO NO WHATSAPP",
    desc: "Sinta que não está sozinha — tire dúvidas direto com a Thaynara no WhatsApp.",
    checks: ["Tire dúvidas direto com a Fonoaudióloga", "Você não precisa enfrentar isso sozinha"],
    img: entregaSuporteWpp,
  },
];
const OQueRecebe = () => (
  <section className="bg-rosa pt-20 md:pt-28 pb-6 md:pb-8 px-6">
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
