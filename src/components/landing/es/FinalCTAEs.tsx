import doisCaminhos from "@/assets/es/dois-caminhos-es.jpeg";
import PricingBlockEs from "./PricingBlockEs";

const FinalCTAEs = () => (
  <>
    <section className="bg-background py-12 md:py-16 px-6 text-center">
      <div className="max-w-[750px] mx-auto">
        <h2 className="text-[1.4rem] md:text-[1.9rem] font-extrabold text-vermelho mb-2 leading-[1.3]">
          ¿Vas a seguir sin saber cómo ayudar a tu hijo a hablar más?
        </h2>
        <h2 className="text-[1.4rem] md:text-[1.9rem] font-extrabold text-rosa mb-6 leading-[1.3]">
          ¿O lo verás desbloquear el habla en los próximos 30 días?
        </h2>

        <div className="aspect-video w-full max-w-[600px] mx-auto mb-6 overflow-hidden rounded-2xl shadow-md">
          <img
            src={doisCaminhos}
            alt="Dos caminos: con o sin la guía"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1024}
            height={576}
          />
        </div>

        <div className="max-w-[600px] mx-auto space-y-3 text-left mb-6">
          <p className="text-[1.05rem] text-marrom-dark font-bold leading-[1.6]">
            ❌ Si no actúas, vas a seguir intentando adivinar qué hacer — mientras el tiempo pasa.
          </p>
          <p className="text-[1.05rem] text-rosa font-bold leading-[1.6]">
            ✅ Si actúas ahora, finalmente vas a tener un camino claro para ayudar a tu hijo a hablar más — en pocos minutos al día.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-rosa py-14 md:py-20 px-6">
      <PricingBlockEs showUrgency={false} />
    </section>
  </>
);

export default FinalCTAEs;
