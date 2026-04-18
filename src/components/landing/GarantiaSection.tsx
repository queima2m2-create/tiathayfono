import PricingBlock from "./PricingBlock";
import { getSocialProofCount } from "@/lib/socialProofCount";
import seloGarantia from "@/assets/selo-garantia.webp";

const GarantiaSection = () => (
  <>
    <section className="bg-rosa py-20 md:py-28 px-6">
      <div className="max-w-[750px] mx-auto text-background text-center">
        <h2 className="text-[1.4rem] md:text-[1.65rem] font-extrabold mb-8 leading-[1.3]">
          Aplique, veja seu filho evoluir — ou devolvemos cada centavo
        </h2>

        {/* Selo de garantia */}
        <div className="flex justify-center mb-10">
          <img
            src={seloGarantia}
            alt="Selo de 30 dias de garantia — 100% do seu dinheiro de volta"
            loading="lazy"
            width={512}
            height={512}
            className="w-[220px] md:w-[300px] h-auto"
          />
        </div>

        <div className="space-y-5 text-[1rem] opacity-90 leading-[1.8] max-w-[650px] mx-auto">
          <p>
            <strong>Eu sei o que esse método faz pela vida de uma família. Eu vivi isso em mais de {getSocialProofCount()} atendimentos. Por isso tenho total confiança de oferecer essa garantia: entra, aplica com seu filho e vive a experiência completa. Se em 30 dias você não sentir que valeu cada centavo — é só me falar e eu devolvo tudo. Sem burocracia, sem perguntas, sem julgamento.</strong>
          </p>
          <p>
            <strong>O risco é zero. O que você pode ganhar é ver seu filho falar. Essa é a troca que a Dra. Thaynara está propondo para você hoje.</strong>
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
