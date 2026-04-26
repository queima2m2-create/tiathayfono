import maeFilho from "@/assets/mae-filho-brincando.jpg";
import { getSocialProofCountEs } from "@/lib/socialProofCountEs";

const ProvaRapidaEs = () => (
  <section className="bg-background pt-8 pb-8 md:pt-12 md:pb-12 px-6 text-center">
    <div className="max-w-[800px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 leading-[1.25]">
        Más de {getSocialProofCountEs()} familias ya aplicaron el método de la Dra. Thaynara y vieron a sus hijos comenzar a hablar.
      </h2>
      <p className="text-[1.05rem] text-primary/70 leading-[1.8] max-w-[700px] mx-auto mb-8">
        Y tú también puedes hacerlo — usando la rutina que ya tienes, sin terapia cara, sin juguetes especiales y sin miedo a equivocarte.
      </p>
      <img
        src={maeFilho}
        alt="Madre jugando con su hijo"
        className="rounded-2xl w-full max-w-[500px] mx-auto shadow-md"
        loading="lazy"
        width={1024}
        height={768}
      />
    </div>
  </section>
);

export default ProvaRapidaEs;
