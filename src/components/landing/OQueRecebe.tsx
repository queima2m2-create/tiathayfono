import entregaFala from "@/assets/entrega-fala-funciona.jpg";
import entregaMarcos from "@/assets/entrega-marcos.jpg";
import entregaSinais from "@/assets/entrega-sinais-alerta.jpg";
import entregaPalavras from "@/assets/entrega-palavras.jpg";
import entregaAtividades from "@/assets/entrega-atividades.jpg";
import entregaTelas from "@/assets/entrega-telas.jpg";
import entregaRoteiro from "@/assets/entrega-roteiro.jpg";
import entregaSuporteWpp from "@/assets/entrega-suporte-wpp.jpg";

const mainItems = [
  {
    num: "01", title: "Entenda como a fala funciona",
    desc: "Saiba o que acontece por trás do desenvolvimento da comunicação do seu filho — de forma simples e acessível.",
    checks: ["Explicação clara e sem termos técnicos", "Base para entender todo o guia"],
    img: entregaFala,
  },
  {
    num: "02", title: "Marcos do desenvolvimento comunicativo",
    desc: "Conheça cada fase da fala e saiba exatamente o que esperar em cada idade.",
    checks: ["Saiba o que é esperado para a idade do seu filho", "Identifique avanços com clareza"],
    img: entregaMarcos,
  },
  {
    num: "03", title: "Sinais de alerta de forma leve",
    desc: "Aprenda a identificar quando algo precisa de mais atenção — sem pânico e sem ansiedade.",
    checks: ["Orientação profissional acessível", "Saiba quando procurar ajuda"],
    img: entregaSinais,
  },
  {
    num: "04", title: "Palavras funcionais para estimular a fala",
    desc: "Descubra quais palavras usar no dia a dia para incentivar seu filho a se comunicar.",
    checks: ["Palavras que geram resultado real", "Fácil de aplicar na rotina"],
    img: entregaPalavras,
  },
  {
    num: "05", title: "Atividades pra usar na rotina diária",
    desc: "Tenha acesso a atividades práticas que estimulam a fala enquanto seu filho se diverte.",
    checks: ["Brincadeiras validadas por fonoaudióloga", "Encaixam em qualquer rotina"],
    img: entregaAtividades,
  },
  {
    num: "06", title: "Uso de telas e fala",
    desc: "Entenda como o tempo de tela impacta o desenvolvimento da fala e o que fazer a respeito.",
    checks: ["Orientação baseada em evidências", "Dicas práticas para o dia a dia"],
    img: entregaTelas,
  },
  {
    num: "07", title: "Roteiro de estímulo prático",
    desc: "Ganhe um roteiro completo para aplicar no dia a dia e ver resultados reais.",
    checks: ["Passo a passo direto ao ponto", "Ideal para mães com rotina corrida"],
    img: entregaRoteiro,
  },
  {
    num: "08", title: "Suporte com a Fono no WhatsApp",
    desc: "Sinta que não está sozinha — tire dúvidas direto com a Thaynara no WhatsApp.",
    checks: ["Tire dúvidas direto com a Fonoaudióloga", "Você não precisa enfrentar isso sozinha"],
    img: entregaSuporteWpp,
  },
];

const OQueRecebe = () => (
  <section className="bg-rosa py-20 md:py-28 px-6">
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
