import { useState, useEffect } from "react";
import { getSocialProofCountEs } from "@/lib/socialProofCountEs";
import thaynaraFoto from "@/assets/thaynara-foto.jpg";
import sobreFilha from "@/assets/sobre-filha.jpeg";

const images = [thaynaraFoto, sobreFilha];

const SobreSectionEs = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-background py-14 md:py-20 px-6">
      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thaynara Andrade - Foto ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
              />
            ))}
          </div>
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-marrom-dark" : "bg-primary/30"
                }`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div>
          <span className="inline-block px-4 py-1.5 border border-primary rounded-full text-[0.85rem] text-primary mb-5">
            Conoce a la creadora de la Estructura Única del Habla
          </span>
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-extrabold text-marrom-dark mb-5 leading-[1.3]">
            ¡Hola! Soy Thaynara Andrade
          </h2>
          <div className="space-y-4 text-[1rem] text-primary/80 leading-[1.8]">
            <p>
              <strong className="text-marrom-dark">Fonoaudióloga infantil especializada en el desarrollo de la comunicación y el lenguaje en los primeros años de vida.</strong>
            </p>
            <p>
              Ya he acompañado a más de <strong className="text-marrom-dark">{getSocialProofCountEs()} familias</strong> — y lo que noté en todas ellas fue lo mismo: las mamás necesitaban algo más que la consulta — saber exactamente qué hacer en casa, en el baño, a la hora de comer, en el juego del día a día.
            </p>
            <p>
              Mamás que estaban perdidas, pensando que su hijo nunca iba a hablar — <strong className="text-marrom-dark">hoy me envían videos emocionadas con cada palabrita nueva.</strong>
            </p>
            <p>
              Creé esta Guía porque sé que no toda mamá puede ir a terapia todas las semanas. <strong className="text-marrom-dark">Pero toda mamá puede aprender a estimular mejor.</strong>
            </p>
            <p>
              Aquí no vas a encontrar fórmulas mágicas. Vas a encontrar un <strong className="text-marrom-dark">camino claro, ligero y basado en lo que realmente funciona en la práctica clínica</strong> — usando situaciones simples que ya vives, sin materiales complejos y sin transformar tu rutina en algo imposible.
            </p>
            <p>
              Mi objetivo es que te sientas segura y confiada — y que veas, con tus propios ojos, <strong className="text-marrom-dark">la evolución de tu hijo.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSectionEs;
