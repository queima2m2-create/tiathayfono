import maeFilho from "@/assets/mae-filho-brincando.jpg";

const ProvaRapidaV2 = () => (
  <section className="bg-background pt-8 pb-8 md:pt-12 md:pb-12 px-6 text-center">
    <div className="max-w-[800px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark mb-3 leading-[1.25]">
        Mais de 1.800 famílias já aplicaram o método da Dra. Thaynara.
      </h2>
      <p className="text-[1.15rem] md:text-[1.3rem] font-bold text-primary/90 leading-[1.6] max-w-[700px] mx-auto mb-4">
        Não é milagre. É ciência aplicada na rotina.
      </p>
      <p className="text-[1.05rem] text-primary/70 leading-[1.8] max-w-[700px] mx-auto mb-8">
        O método da Dra. Thaynara usa a rotina que você já tem — sem mudar
        nada, sem brinquedos especiais e sem medo de errar. Funciona sozinho
        ou junto com o acompanhamento que seu filho já faz.
      </p>
      <img loading="lazy"
        src={maeFilho}
        alt="Mãe brincando com filho"
        className="rounded-2xl w-full max-w-[500px] mx-auto shadow-md"
        loading="lazy"
        width={1024}
        height={768}
      />
    </div>
  </section>
);

export default ProvaRapidaV2;
