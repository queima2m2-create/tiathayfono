import thaynaraFoto from "@/assets/thaynara-foto.jpg";

const ConhecaThaynara = () => (
  <section className="bg-background py-12 md:py-16 px-6 text-center">
    <div className="max-w-[700px] mx-auto">
      <div className="flex flex-col items-center gap-5">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-rosa-light shrink-0">
          <img
            src={thaynaraFoto}
            alt="Dra. Thaynara Andrade - Fonoaudióloga infantil"
            className="w-full h-full object-cover"
            loading="lazy"
            width={400}
            height={400}
          />
        </div>

        <div className="max-w-[520px]">
          <h2 className="text-[1.15rem] md:text-[1.35rem] font-extrabold text-marrom-dark mb-3 leading-[1.3]">
            Conheça a fonoaudióloga
          </h2>
          <p className="text-[1rem] md:text-[1.05rem] text-primary/80 leading-[1.7]">
            <strong className="text-marrom-dark">Dra. Thaynara Andrade — a fonoaudióloga que destravou a fala de 2.092 crianças</strong>
            <br /><br />
            Fonoaudióloga infantil (CRFa 4-13693) com mais de 8 anos de experiência e 2.092 famílias atendidas. Vou te mostrar como destravar a fala do seu filho usando 15 min por dia da sua rotina.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ConhecaThaynara;
