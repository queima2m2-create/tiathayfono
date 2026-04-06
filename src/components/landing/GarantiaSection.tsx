import PricingBlock from "./PricingBlock";

const GarantiaSection = () => (
  <>
    <section className="bg-rosa py-20 md:py-28 px-6">
      <div className="max-w-[750px] mx-auto grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-12 items-center text-background">
        <div className="relative w-[180px] h-[180px] mx-auto sm:mx-0 shrink-0">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-dourado/20 animate-ping" style={{ animationDuration: '3s' }} />
          {/* Seal */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-dourado to-[hsl(35,50%,42%)] border-[5px] border-background/30 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,0,0,0.3),0_0_60px_hsl(40,45%,55%,0.3)]">
            <span className="text-[0.6rem] uppercase tracking-[3px] text-background/80 font-bold">GARANTIA</span>
            <span className="text-[3.2rem] font-black text-background leading-none drop-shadow-md">7</span>
            <span className="text-[0.7rem] uppercase tracking-[2px] text-background font-extrabold leading-tight">
              DIAS
            </span>
            <div className="w-12 h-[2px] bg-background/40 my-1 rounded-full" />
            <span className="text-[0.55rem] uppercase tracking-widest text-background/90 font-bold leading-tight">
              100% DO SEU<br/>DINHEIRO DE VOLTA
            </span>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-[1.4rem] md:text-[1.65rem] font-extrabold mb-5 leading-[1.3]">
            Destrave a fala com 15 min por dia ou seu dinheiro de volta
          </h2>
          <div className="space-y-5 text-[1rem] opacity-90 leading-[1.8]">
            <p>
              <strong>Eu confio tanto no que preparei dentro do Guia que você pode entrar, testar,
              aplicar com calma e ver os efeitos com seus próprios olhos —
              porque se não fizer sentido, em até 7 dias, é só pedir o reembolso e pronto.
              Sem perguntas, sem estresse, sem culpa.</strong>
            </p>
            <p>
              <strong>Você não precisa decidir agora se esse método é para você,
              porque essa resposta só vem após viver a experiência completa.
              Então entra tranquila, testa com seu filho e sente na prática.
              Eu estarei aqui para garantir que dê certo para vocês.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-rosa py-20 md:py-24 px-6">
      <PricingBlock />
    </section>
  </>
);

export default GarantiaSection;
