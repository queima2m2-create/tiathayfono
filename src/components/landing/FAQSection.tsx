import { useState } from "react";

const faqs = [
  {
    q: "Quando e como terei acesso ao curso?",
    a: "Após a aprovação do pagamento, você receberá um e-mail com os dados de acesso à plataforma, permitindo que você comece imediatamente.",
  },
  {
    q: "Em quanto tempo verei meu filho falando?",
    a: "A maioria das mães começa a ver mudanças já nos primeiros dias. Mas a proposta do Guia é que você veja palavras e frases surgindo em até 30 dias.",
  },
  {
    q: "Preciso de novos brinquedos ou alguma experiência?",
    a: "Não! Tudo foi pensado para você aplicar com o que já tem em casa, mesmo sem entender nada de fono ou desenvolvimento.",
  },
  {
    q: "Já tentei outras coisas e não funcionou. E se com isso for igual?",
    a: "O que você tentou antes provavelmente era genérico. Aqui você recebe um passo a passo claro, com estratégias de consultório, validadas com centenas de famílias.",
  },
  {
    q: "Se meu filho já faz acompanhamento com uma fono, o Guia ainda é útil?",
    a: "Sim, o Guia complementa o acompanhamento fonoaudiológico, oferecendo práticas que podem ser realizadas em casa. Ele potencializa os resultados, já que o maior tempo de estímulo ocorre no ambiente familiar, com você.",
  },
  {
    q: "Para quem é recomendado esse curso?",
    a: "O Guia é recomendado para todas as crianças em processo de desenvolvimento da fala, principalmente aquelas que apresentam atraso na fala ou têm um vocabulário reduzido.",
  },
  {
    q: "Qual a faixa etária indicada?",
    a: "O programa é recomendado para crianças desde os primeiros meses de vida até os 5 anos, abrangendo as principais fases de desenvolvimento da fala e linguagem.",
  },
  {
    q: "A plataforma de pagamentos é segura?",
    a: "Sim, utilizamos tecnologias avançadas de segurança, garantindo um processo de pagamento 100% confiável e protegido.",
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
