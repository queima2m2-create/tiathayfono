import heroImg from "@/assets/hero-before-after.jpg";

const HeroSection = () => (
  <section className="bg-gradient-to-b from-rosa-light to-background pt-6 pb-4 md:pt-16 md:pb-12 px-6">
    <div className="max-w-[1000px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
        <div>
          <h1 className="text-[1.45rem] md:text-[2.6rem] font-black leading-[1.1] text-marrom-dark mb-2 md:mb-3 uppercase tracking-tight">
            BRINQUE COM SEU FILHO 15 MINUTOS POR DIA E VEJA ELE FORMAR AS PRIMEIRAS FRASES{" "}
            <span className="text-dourado">EM ATÉ 30 DIAS</span>.
          </h1>

          <p className="text-[0.95rem] md:text-[1.05rem] text-primary/80 leading-[1.5] md:leading-[1.8] max-w-[480px] mb-3 md:mb-0">
            Aplique em casa com leveza, sem precisar gastar com consulta,
            brinquedos ou seguir métodos complicados.
          </p>
        </div>

        <div>
          <img
            src={heroImg}
            alt="Antes e depois: criança destravar a fala"
            className="rounded-2xl w-full max-h-[280px] md:max-h-none object-cover shadow-lg"
            width={1024}
            height={768}
          />
          <div className="flex items-center gap-2 text-[0.85rem] md:text-[0.9rem] text-primary/80 mt-1.5">
            <svg className="w-5 h-5 fill-rosa shrink-0" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
            Estratégias comprovadas pela Fonoaudiologia
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
