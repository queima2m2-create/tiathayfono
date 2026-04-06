import produtoMockup from "@/assets/produto-mockup.jpg";

const guideItems = [
  { emoji: "⚠️", price: "R$ 47,00", title: "Sinais de Alerta" },
  { emoji: "🎥", price: "R$ 67,00", title: "Aprenda com a Fono" },
  { emoji: "💬", price: "R$ 47,00", title: "Palavras de Poder que Destravam a Comunicação" },
  { emoji: "🎮", price: "R$ 47,00", title: "Rotina da Criança Tagarela" },
  { emoji: "📱", price: "R$ 47,00", title: "Telas — Aliado ou Inimigo da Fala?" },
  { emoji: "📲", price: "R$ 47,00", title: "Suporte com a Fono no WhatsApp" },
];
const bonusItems = [
  { emoji: "🎵", price: "R$ 67,00", title: "Músicas para Falar em Até 7 Dias" },
  { emoji: "🎥", price: "R$ 47,00", title: "Aula ao Vivo Gratuita com a Fono" },
  { emoji: "🃏", price: "R$ 47,00", title: "Cards Interativos de Estímulo" },
  { emoji: "🏅", price: "R$ 37,00", title: "Certificado Tagarela" },
];

const RecapSection = () => (
  <section id="recapitulando" className="bg-bege-dark pt-12 pb-6 md:pt-16 md:pb-8 px-6 text-center">
    <div className="max-w-[750px] mx-auto">
      <span className="inline-block bg-border text-primary text-[0.78rem] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-5">
        RECAPITULANDO
      </span>
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-8 leading-[1.25]">
        Aqui está tudo que você vai receber para ver seu filho destravar a fala em até 30 dias
      </h2>

      <img
        src={produtoMockup}
        alt="Guia completo"
        className="rounded-2xl w-full max-w-[520px] mx-auto mb-8 shadow-lg"
        loading="lazy"
        width={1024}
        height={1024}
      />

      <h3 className="text-[1.05rem] font-extrabold text-marrom-dark mb-3">
        📖 Conteúdo do Guia
      </h3>
      <div className="max-w-[600px] mx-auto mb-5 space-y-2">
        {guideItems.map((item, i) => (
          <div key={i} className="bg-background rounded-lg px-4 py-3 shadow-sm border border-border flex items-center gap-2.5">
            <span className="text-[1.1rem] shrink-0">{item.emoji}</span>
            <p className="text-[0.9rem] font-bold text-marrom-dark leading-[1.3] flex-1 text-left">{item.title}</p>
            <span className="text-vermelho font-bold text-[0.85rem] line-through whitespace-nowrap shrink-0">{item.price}</span>
          </div>
        ))}
      </div>

      <h3 className="text-[1.05rem] font-extrabold text-marrom-dark mb-3 mt-6">
        + todos esses <span className="text-dourado">BÔNUS</span> 👇
      </h3>

      <div className="max-w-[600px] mx-auto mb-8 space-y-2">
        {bonusItems.map((item, i) => (
          <div key={i} className="bg-background rounded-lg px-4 py-3 shadow-sm border border-border flex items-center gap-2.5">
            <span className="text-[1.1rem] shrink-0">{item.emoji}</span>
            <p className="text-[0.9rem] font-bold text-marrom-dark leading-[1.3] flex-1 text-left">{item.title}</p>
            <span className="text-vermelho font-bold text-[0.85rem] line-through whitespace-nowrap shrink-0">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="text-[1.2rem] font-extrabold text-marrom-dark mb-1">
          Tudo isso poderia custar facilmente
        </h3>
        <p className="text-[2rem] font-black text-vermelho line-through mb-1">R$ 497,00</p>
        <p className="text-[1.1rem] text-marrom-dark font-extrabold">
          Mas você não pagará NEM METADE DISSO…
        </p>
      </div>
    </div>
  </section>
);

export default RecapSection;
