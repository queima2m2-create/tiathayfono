import { useState } from "react";

const faqs = [
  {
    q: "Comprei agora — quando consigo acessar?",
    a: "Na hora. Assim que o pagamento for aprovado, você recebe o acesso direto na plataforma. Não precisa esperar, não precisa instalar nada. Em menos de 2 minutos você já está dentro.",
  },
  {
    q: "Quanto tempo leva pra meu filho começar a falar mais?",
    a: "A maioria das mães já percebe algo diferente na primeira semana — uma tentativa nova, uma palavra que não existia antes. O programa é de 30 dias, mas os primeiros sinais aparecem bem antes disso. Cada criança tem seu tempo, e o Guia foi feito para respeitar isso sem deixar você parada.",
  },
  {
    q: "Preciso ter algum conhecimento ou comprar material especial?",
    a: "Não precisa de nada disso. Tudo foi criado para funcionar com o que você já tem em casa e com a rotina que você já vive. Não é necessário entender de fono, não é necessário comprar brinquedo novo. É só você, seu filho e 15 minutos por dia.",
  },
  {
    q: "Já tentei várias coisas antes e não vi resultado. Isso é diferente?",
    a: "Sim — e muito. A diferença está na origem: o que você tentou antes provavelmente era conteúdo genérico, sem estrutura clínica. Aqui você recebe o mesmo protocolo que a Dra. Thaynara aplica em consultório, adaptado para mães, com passo a passo claro e validado com centenas de crianças reais.",
  },
  {
    q: "Meu filho já faz terapia com uma fono. Ainda vale a pena?",
    a: "Vale — e muito. A fonoaudióloga atende seu filho por 1 hora por semana. O Guia coloca você em ação nas outras horas do dia, dentro de casa. Ele não compete com a terapia, ele amplifica o resultado dela. Muitas fonoaudiólogas inclusive recomendam.",
  },
  {
    q: "Como sei se o Guia é certo para o meu filho?",
    a: "Se seu filho tem entre 1 e 5 anos e você sente que ele poderia estar se comunicando melhor — fala pouco, não fala nada, entende mas não verbaliza, ou regrediu — então o Guia foi feito para ele. E para você.",
  },
  {
    q: "A partir de que idade posso usar o Guia?",
    a: "O Guia é indicado para crianças de 1 a 5 anos, que é a fase onde o cérebro está mais receptivo para aprender a falar. Quanto mais cedo você começa, mais forte é o resultado — mas dentro dessa faixa, nunca é tarde demais para agir.",
  },
  {
    q: "A plataforma de pagamentos é segura?",
    a: "Sim, utilizamos tecnologias avançadas de segurança, garantindo um processo de pagamento 100% confiável e protegido.",
  },
  {
    q: "E se meu filho tiver autismo (ou suspeita de TEA)?",
    a: "O método foca em estímulos universais de linguagem que ajudam qualquer criança — incluindo crianças no espectro autista. Se há diagnóstico de TEA, recomendo combinar com acompanhamento profissional. Já tive várias mães de crianças autistas relatando avanço significativo — veja os depoimentos.",
  },
  {
    q: "Por que tão barato (R$67)? Tem pegadinha?",
    a: "Não tem pegadinha. Vendi a R$200 antes e percebi que a mãe que mais PRECISA do método é justamente a que não tem R$200 sobrando. Decidi cobrar R$67 para atingir o máximo de famílias possível. A qualidade do conteúdo é exatamente a mesma. E você tem 30 dias de garantia incondicional.",
  },
  {
    q: "Quanto tempo de aula são?",
    a: "Aulas curtas de 5 a 15 minutos cada. No total, são aproximadamente 3 horas de conteúdo em vídeo + áudios + cards interativos. Você assiste no celular, no ônibus, na pausa do café — sem virar mais uma tarefa pesada.",
  },
  {
    q: "Vou ter contato direto com você?",
    a: "Sim. O bônus 07 do programa te dá acesso direto a mim pelo WhatsApp. Sou eu de verdade respondendo, não é robô nem assistente.",
  },
  {
    q: "E se em 30 dias eu não ver resultado nenhum?",
    a: "Manda mensagem e devolvo cada centavo. Sem perguntas, sem formulário, sem julgamento. O risco é meu, não seu.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-20 md:py-28 px-6">
      <div className="max-w-[750px] mx-auto">
        <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark text-center mb-14 leading-[1.25]">
          Dúvidas frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-bege-dark rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-marrom-dark text-[1rem]"
              >
                <span>{faq.q}</span>
                <span className="text-xl shrink-0 text-dourado font-bold">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-[0.95rem] text-primary/80 leading-[1.7]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
