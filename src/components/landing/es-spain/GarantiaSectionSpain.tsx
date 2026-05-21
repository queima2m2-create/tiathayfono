import PricingBlockEs from "./PricingBlockEs";
import { getSocialProofCountEs } from "@/lib/socialProofCountEs";
import seloGarantia from "@/assets/es/selo-garantia-es.jpeg";

const GarantiaSectionEs = () => (
  <>
    <section className="bg-rosa py-20 md:py-28 px-6">
      <div className="max-w-[750px] mx-auto text-background text-center">
        <h2 className="text-[1.4rem] md:text-[1.65rem] font-extrabold mb-8 leading-[1.3]">
          Aplícalo, ve a tu hijo evolucionar — o te devolvemos cada centavo
        </h2>

        <div className="flex justify-center mb-10">
          <img
            src={seloGarantia}
            alt="Sello de 30 días de garantía — 100% de tu dinero de vuelta"
            loading="lazy"
            width={512}
            height={512}
            className="w-[220px] md:w-[300px] h-auto"
          />
        </div>

        <div className="space-y-5 text-[1rem] opacity-90 leading-[1.8] max-w-[650px] mx-auto">
          <p>
            <strong>Yo sé lo que este método hace por la vida de una familia. Lo viví en más de {getSocialProofCountEs()} atenciones. Por eso tengo total confianza en ofrecer esta garantía: entra, aplícalo con tu hijo y vive la experiencia completa. Si en 30 días no sientes que valió cada centavo — solo dímelo y te devuelvo todo. Sin burocracia, sin preguntas, sin juicios.</strong>
          </p>
          <p>
            <strong>El riesgo es cero. Lo que puedes ganar es ver a tu hijo hablar. Ese es el intercambio que la Dra. Thaynara te está proponiendo hoy.</strong>
          </p>
        </div>
      </div>
    </section>

    <section className="bg-rosa py-20 md:py-24 px-6">
      <PricingBlockEs />
    </section>
  </>
);

export default GarantiaSectionEs;
