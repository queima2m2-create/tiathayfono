const HeroSection = () => (
  <section className="bg-gradient-to-b from-rosa-light to-background pt-6 pb-4 md:pt-16 md:pb-12 px-6">
    <div className="max-w-[1000px] mx-auto text-center">
      <h1 className="text-[1.45rem] md:text-[2.6rem] font-black leading-[1.15] text-marrom-dark mb-3 md:mb-4 tracking-tight">
        Em 30 dias seu filho pode <span className="text-dourado underline underline-offset-4 decoration-dourado">destravar a fala</span> — com 15 minutos da rotina que você já tem.
      </h1>

      <p className="text-[0.95rem] md:text-[1.05rem] text-primary/80 leading-[1.55] md:leading-[1.8] max-w-[620px] mx-auto">
        Método criado pela fonoaudióloga <strong className="text-marrom-dark">Thaynara Andrade (CRFa 4-13693)</strong>. Mais de 2.092 mães aplicaram. Sem terapia cara, sem brinquedo especial, sem esperar pela fila do SUS.
      </p>
    </div>
  </section>
);

export default HeroSection;
