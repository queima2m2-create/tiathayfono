const problems = [
  "😭 Estás viendo a otros niños hablar y sintiendo ese dolor en el pecho que solo una madre conoce",
  "😟 Lloras a escondidas porque no consigues entender lo que tu hijo intenta decirte",
  "😓 Ya buscaste todo en internet y cada cosa que lees aumenta más tu miedo",
  "🥺 Quieres hacer todo bien por tu hijo pero nadie te enseñó qué hacer de verdad",
];

const desires = [
  "🥰 Escuchar a tu hijo llamarte mamá con ganas — y sentir que él te eligió",
  "😌 Acostarte por la noche sabiendo que hiciste todo lo que estaba a tu alcance por tu hijo",
  "🤩 Ver a tu hijo comunicarse, hacer amigos y ocupar el lugar que siempre fue suyo",
];

const ParaQuemSectionEs = () => (
  <section className="bg-rosa py-20 md:py-28 px-6 text-center">
    <div className="max-w-[750px] mx-auto">
      <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-background mb-14 leading-[1.25]">
        La Guía Mi Hijo Va a Hablar es para quien…
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {problems.map((p, i) => (
          <div key={i} className="bg-background/[0.08] rounded-2xl px-6 py-5 text-left text-background text-[1rem] leading-[1.6]">
            {p}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p className="text-[0.85rem] font-bold text-background/60 uppercase tracking-[2px] mb-6">
          Pero en el fondo, lo que realmente quieres es 👇
        </p>
        <div className="space-y-4">
          {desires.map((d, i) => (
            <div key={i} className="bg-background/[0.12] rounded-2xl px-6 py-5 text-left text-background text-[1rem] leading-[1.6]">
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ParaQuemSectionEs;
