import maeFilho from "@/assets/es/prova-rapida-es.jpeg";
import { getSocialProofCountSpain } from "@/lib/socialProofCountSpain";

const ProvaRapidaSpain = () => (
  <section className="bg-background pt-8 pb-8 md:pt-12 md:pb-12 px-6 text-center">
    <div className="max-w-[800px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 leading-[1.25]">
        Más de {getSocialProofCountSpain()} familias ya aplicaron el método de Thaynara Andrade y vieron a sus hijos comenzar a hablar.
      </h2>
      <p className="text-[1.05rem] text-primary/70 leading-[1.8] max-w-[700px] mx-auto mb-8">
        Y tú también puedes hacerlo en casa — sumando 15 minutos al día al trabajo que la logopeda ya hace o iniciando desde hoy mientras esperas tu primera cita.
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

export default ProvaRapidaSpain;
