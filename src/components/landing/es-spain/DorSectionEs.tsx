import maeFilho from "@/assets/mae-filho-preocupada.jpg";

const bubbles = [
  { text: "Ya intenté de todo", className: "top-[3%] left-[2%]" },
  { text: "¿Será que mi hijo es autista?", className: "top-[1%] right-[2%]" },
  { text: "Todos sus amiguitos ya hablan", className: "top-[38%] left-[-4%]" },
  { text: "¿Nunca va a hablar?", className: "bottom-[18%] right-[-2%]" },
  { text: "¿Estoy retrasando su desarrollo?", className: "bottom-[2%] left-1/2 -translate-x-1/2" },
];

const DorSectionEs = () => (
  <section className="bg-rosa pt-12 pb-12 md:pt-16 md:pb-16 px-6 text-center">
    <div className="max-w-[900px] mx-auto">
      <h2 className="text-[1.5rem] md:text-[1.9rem] font-extrabold text-background mb-3 leading-[1.3]">
        Miras a tu hijo y sientes esa angustia de no poder entender lo que él quiere.
      </h2>
      <p className="text-[1.05rem] text-background/70 max-w-[650px] mx-auto mb-8 leading-[1.8]">
        Lo llamas, no responde. Le preguntas, señala o llora. Y cada día que pasa sin hablar, llega ese miedo: ¿habré dejado pasar demasiado tiempo?
        <br /><br />
        La verdad es que nadie te enseñó qué estimular, cuándo estimular y cómo encajar eso en tu día — sin que se vuelva otra tarea imposible en tu rutina ya saturada.
        <br /><br />
        Probablemente ya te sorprendiste pensando:
      </p>

      <div className="relative max-w-[500px] mx-auto mb-8 px-4">
        <img
          src={maeFilho}
          alt="Madre preocupada cargando a su hijo"
          className="rounded-2xl w-full shadow-lg"
          loading="lazy"
          width={1024}
          height={1024}
        />
        {bubbles.map((b, i) => (
          <span
            key={i}
            className={`absolute bg-white/95 text-marrom-dark text-[0.65rem] md:text-[0.8rem] font-bold px-3 py-2 rounded-2xl shadow-lg leading-snug max-w-[130px] md:max-w-[155px] text-center backdrop-blur-sm ${b.className}`}
          >
            {b.text}
          </span>
        ))}
      </div>

      <p className="text-[1.1rem] md:text-[1.25rem] font-bold text-background mt-8 leading-[1.5] max-w-[650px] mx-auto">
        Si te identificaste con alguno de estos pensamientos, debes saber que no es tu culpa. Nadie te enseñó el método correcto. <span className="underline decoration-2">Hasta ahora:</span>
      </p>
    </div>
  </section>
);

export default DorSectionEs;
