import entregaSinais from "@/assets/entrega-sinais-alerta.jpg";
import entregaFala from "@/assets/entrega-fala-funciona.jpg";
import entregaBrincadeiras from "@/assets/entrega-brincadeiras-fala.jpg";
import entregaPalavras from "@/assets/entrega-palavras.jpg";
import entregaAtividades from "@/assets/entrega-atividades.jpg";
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
    num: "01", title: "SINAIS DE ALERTA",
    desc: "Identifique rapidamente se seu filho tem sinais reais de atraso na fala — sem precisar esperar pelo pediatra dizer 'espera mais um pouco'. Você vai saber EXATAMENTE o que observar, em que momento agir, e quando vale a pena buscar uma fono presencial.",
    checks: ["Marcos do desenvolvimento da fala por idade", "Os sinais que nenhuma mãe pode ignorar", "Quando o 'esperar mais' pode atrasar ainda mais seu filho"],
    img: entregaSinais,
  },
  {
    num: "02", title: "AULA COMPLETA: O QUE FAZER PARA SEU FILHO FALAR",
    desc: "Várias aulas em vídeo onde a Dra. Thaynara mostra exatamente o que fazer pra seu filho falar — passo a passo, com método e propósito real.",
    checks: ["Aulas práticas e direto ao ponto", "Orientação profissional de verdade", "Acesso vitalício a todo o conteúdo"],
    img: entregaFala,
  },
  {
    num: "03", title: "AS 10 MELHORES BRINCADEIRAS QUE DESBLOQUEIAM A FALA",
    desc: "Brincadeiras simples, divertidas e validadas por fonoaudióloga que estimulam seu filho a falar naturalmente enquanto se diverte.",
    checks: ["Brincadeiras que estimulam sons e palavras novas", "Fáceis de fazer em casa com o que você já tem"],
    img: entregaBrincadeiras,
  },
  {
    num: "04", title: "AS 50 PALAVRAS EXATAS QUE DESTRAVAM A FALA",
    desc: "Lista completa com as 50 palavras-alvo que estimulam o cérebro do seu filho — organizadas por nível de complexidade. Você não precisa adivinhar mais qual palavra usar.",
    checks: ["Lista exata por nível (não por idade adivinhada)", "Fácil de aplicar no dia a dia"],
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
    num: "07", title: "FALE DIRETO COM A DRA. THAYNARA",
    desc: "Acesso direto a mim no WhatsApp. Manda mensagem quando quiser, eu te respondo pessoalmente. Sem robô, sem assistente. Eu mesma, a Thaynara.",
    checks: ["Orientação personalizada para o seu filho", "Alguém de verdade do seu lado em cada etapa"],
    img: entregaSuporteWpp,
    highlight: true,
  },
];

const OQueRecebe = () => (
  <section id="entregas" className="bg-rosa pt-20 md:pt-28 pb-6 md:pb-8 px-6 scroll-mt-20">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-center text-background mb-16 leading-[1.25]">
        Tudo que você vai ter nas mãos para ver seu filho falar em até 30 dias
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
                    🔥 BÔNUS GIGANTE
                  </span>
                  <span className="inline-block bg-background text-marrom-dark rounded px-3 py-1 text-[0.75rem] font-bold">
                    Vale R$ 497 sozinho
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

export default OQueRecebe;
