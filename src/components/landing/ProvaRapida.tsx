import maeFilho from "@/assets/mae-filho-brincando.webp";
import { getSocialProofCount } from "@/lib/socialProofCount";

const ProvaRapida = () => (
  <section className="initial-proof bg-background pt-8 pb-8 md:pt-12 md:pb-12 px-6 text-center">
    <div className="initial-proof__inner max-w-[800px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 leading-[1.25]">
        Mais de {getSocialProofCount()} famílias já aplicaram o método da Dra. Thaynara e viram seus filhos começar a falar.
      </h2>
      <p className="text-[1.05rem] text-primary/70 leading-[1.8] max-w-[700px] mx-auto mb-8">
        E você também pode fazer isso — usando a rotina que você já tem, sem terapia cara, sem brinquedos especiais e sem medo de errar.
      </p>
      <img
        src={maeFilho}
        alt="Mãe brincando com filho"
        className="rounded-2xl w-full max-w-[320px] md:max-w-[500px] mx-auto shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
        loading="lazy"
        width={500}
        height={375}
      />
    </div>
  </section>
);

export default ProvaRapida;
