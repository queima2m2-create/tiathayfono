import thaynaraFoto from "@/assets/thaynara-foto.jpg";

const ConhecaThaynaraEs = () => (
  <section className="bg-background py-12 md:py-16 px-6 text-center">
    <div className="max-w-[700px] mx-auto">
      <div className="flex flex-col items-center gap-5">
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-lg ring-4 ring-rosa-light shrink-0">
          <img
            src={thaynaraFoto}
            alt="Thaynara Andrade - Fonoaudióloga infantil"
            className="w-full h-full object-cover"
            loading="lazy"
            width={400}
            height={400}
          />
        </div>

        <div className="max-w-[560px]">
          <h2 className="text-[1.25rem] md:text-[1.5rem] font-extrabold text-marrom-dark mb-3 leading-[1.3]">
            Conoce a la fonoaudióloga
          </h2>
          <p className="text-[1rem] md:text-[1.05rem] text-primary/80 leading-[1.7]">
            <strong className="text-marrom-dark">Thaynara Andrade — la fonoaudióloga que destrabó el habla de cientos de niños</strong>
            <br /><br />
            Fonoaudióloga infantil (CRFa 4-13693) con más de 8 años de experiencia y cientos de familias atendidas. Voy a mostrarte cómo destrabar el habla de tu hijo usando 15 min al día de tu rutina.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ConhecaThaynaraEs;
