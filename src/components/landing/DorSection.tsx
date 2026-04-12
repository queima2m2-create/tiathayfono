import maeFilho from "@/assets/mae-filho-preocupada.jpg";

const bubbles = [
  { text: "Eu já tentei de tudo", className: "top-[3%] left-[2%]" },
  { text: "Será que meu filho é autista?", className: "top-[1%] right-[2%]" },
  { text: "Todos os coleguinhas já falam", className: "top-[38%] left-[-4%]" },
  { text: "Ele nunca vai falar?", className: "bottom-[18%] right-[-2%]" },
  { text: "Estou atrasando o desenvolvimento dele?", className: "bottom-[2%] left-1/2 -translate-x-1/2" },
];

const DorSection = () => (
  <section className="bg-rosa pt-12 pb-12 md:pt-16 md:pb-16 px-6 text-center">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.5rem] md:text-[1.9rem] font-extrabold text-background mb-3 leading-[1.3]">
        Você olha pro seu filho e sente aquela angústia de não conseguir entender o que ele quer.
      </h2>
      <p className="text-[1.05rem] text-background/70 max-w-[650px] mx-auto mb-8 leading-[1.8]">
        Você chama, ele não responde. Você pergunta, ele aponta ou chora. E cada dia que passa sem falar, bate aquele medo: será que deixei passar tempo demais?
        <br /><br />
        A verdade é que ninguém te ensinou o que estimular, quando estimular e como encaixar isso no seu dia — sem virar mais uma tarefa impossível na sua rotina já lotada.
        <br /><br />
        Você provavelmente já se pegou pensando:
      </p>

      <div className="relative max-w-[500px] mx-auto mb-8 px-4">
        <img loading="lazy"
          src={maeFilho}
          alt="Mãe preocupada segurando filho no colo"
          className="rounded-2xl w-full shadow-lg"
          loading="lazy"
          width={1024}
          height={1024}
        />
        {bubbles.map((b, i) => (
          <span
            key={i}
            className={`absolute bg-white/95 text-marrom-dark text-[0.65rem] md:text-[0.8rem] font-bold px-3 py-2 rounded-2xl shadow-lg leading-snug max-w-[130px] md:max-w-[155px] text-center backdrop-blur-sm ${b.className}`}
          >
            {b.text}
          </span>
        ))}
      </div>

      <p className="text-[1.1rem] md:text-[1.25rem] font-bold text-background mt-8 leading-[1.5] max-w-[650px] mx-auto">
        Se você se identificou com algum desses pensamentos, saiba que não é culpa sua. Ninguém te ensinou o método certo. <span className="underline decoration-2">Até agora:</span>
      </p>

    </div>
  </section>
);

export default DorSection;
