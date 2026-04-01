import PricingBlock from "./PricingBlock";

const GarantiaSection = () => (
  <>
    <section className="bg-rosa py-20 md:py-28 px-6">
      <div className="max-w-[750px] mx-auto grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-12 items-center text-background">
        <div className="w-[140px] h-[140px] rounded-full border-4 border-dourado flex flex-col items-center justify-center text-center mx-auto sm:mx-0 shrink-0">
          <span className="text-[2.6rem] font-black text-dourado leading-none">7</span>
          <span className="text-[0.6rem] uppercase tracking-widest leading-tight">
            DIAS DE<br/>GARANTIA<br/>INCONDICIONAL
          </span>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-[1.4rem] md:text-[1.65rem] font-extrabold mb-5 leading-[1.3]">
            Garantia de 7 dias incondicional
          </h2>
          <div className="space-y-5 text-[1rem] opacity-90 leading-[1.8]">
            <p>
              <strong>Sem Riscos, Só Benefícios! Estamos tão confiantes na qualidade
              e eficácia do nosso guia que oferecemos uma garantia de 7 dias incondicional.</strong>
            </p>
            <p>
              <strong>Experimente por uma semana inteira, e se por qualquer motivo você não estiver
              satisfeita, devolvemos 100% do seu investimento. Sem perguntas, sem complicações.</strong>
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
