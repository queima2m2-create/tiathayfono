import doisCaminhos from "@/assets/dois-caminhos.jpg";
import PricingBlock from "./PricingBlock";

const FinalCTA = () => (
  <>
    <section className="bg-background py-12 md:py-16 px-6 text-center">
      <div className="max-w-[750px] mx-auto">
        <blockquote className="bg-rosa-light rounded-2xl p-8 md:p-10 mb-8">
          <p className="text-[1.05rem] text-marrom-dark leading-[1.8] italic mb-4">
            "Eu queria ter tido um material como esse quando comecei minha jornada como mãe.
            Foi por isso que criei com tanto carinho: pra que outras mães tenham o apoio e a
            clareza que eu demorei a encontrar."
          </p>
          <footer className="text-[0.95rem] font-bold text-marrom-dark">
            — Thaynara Andrade
          </footer>
        </blockquote>
      </div>
    </section>

    <section className="bg-rosa py-14 md:py-20 px-6">
      <PricingBlock showUrgency={false} />
    </section>
  </>
);

export default FinalCTA;
