import PricingBlock from "./PricingBlock";

const GarantiaSection = () => (
  <>
    <section className="bg-rosa py-20 md:py-28 px-6">
      <div className="max-w-[750px] mx-auto text-background text-center">
        <h2 className="text-[1.4rem] md:text-[1.65rem] font-extrabold mb-8 leading-[1.3]">
          Destrave a fala com 15 min por dia ou seu dinheiro de volta
        </h2>

        {/* Big 7 seal */}
        <div className="relative flex flex-col items-center mb-10">
          <span className="text-[12rem] md:text-[16rem] font-black text-background/15 leading-none select-none">
            7
          </span>
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-start">
            <span className="text-[2rem] md:text-[2.6rem] font-black text-background leading-none tracking-tight">
              DIAS DE
            </span>
            <span className="text-[2rem] md:text-[2.6rem] font-black text-background leading-none tracking-tight">
              GARANTIA
            </span>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[1.5rem] md:text-[2rem] text-dourado">★</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5 text-[1rem] opacity-90 leading-[1.8] max-w-[650px] mx-auto">
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
    </section>

    <section className="bg-rosa py-20 md:py-24 px-6">
      <PricingBlock />
    </section>
  </>
);

export default GarantiaSection;
