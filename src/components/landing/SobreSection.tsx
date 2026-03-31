import { useState, useEffect } from "react";
import thaynaraFoto from "@/assets/thaynara-foto.jpg";
import sobreFilha from "@/assets/sobre-filha.jpeg";

const images = [thaynaraFoto, sobreFilha];

const SobreSection = () => {
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
            Quem sou eu
          </span>
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-extrabold text-marrom-dark mb-5 leading-[1.3]">
            Olá! Eu sou a Thaynara Andrade.
          </h2>
          <div className="space-y-4 text-[1rem] text-primary/80 leading-[1.8]">
            <p>
              Sou <strong className="text-marrom-dark">fonoaudióloga especializada em linguagem infantil</strong> e também mãe.
            </p>
            <p>
              Criei este guia com base em tudo que aplico no consultório e aqui em casa, com a minha filha.
            </p>
            <p>
              Quero te mostrar que <strong className="text-marrom-dark">estimular a fala não precisa ser complicado ou técnico</strong>.
            </p>
            <p>
              Com estratégias simples e carinho, você pode fazer uma <strong className="text-marrom-dark">enorme diferença na vida do seu filho</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
