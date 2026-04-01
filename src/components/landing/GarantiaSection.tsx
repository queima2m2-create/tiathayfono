import PricingBlock from "./PricingBlock";

const GarantiaSection = () => (
  <>
    <section className="bg-rosa py-20 md:py-28 px-6">
      <div className="max-w-[750px] mx-auto grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-12 items-center text-background">
        <div className="w-[140px] h-[140px] rounded-full border-4 border-dourado flex flex-col items-center justify-center text-center mx-auto sm:mx-0 shrink-0">
          <span className="text-[2.6rem] font-black text-dourado leading-none">7</span>
          <span className="text-[0.6rem] uppercase tracking-widest leading-tight">
            DIAS DE<br/>GARANTIA<br/>100% DO<br/>DINHEIRO<br/>DE VOLTA
          </span>
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
