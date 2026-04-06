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
            Oi! Eu sou a Thaynara Andrade
          </h2>
          <div className="space-y-4 text-[1rem] text-primary/80 leading-[1.8]">
            <p>
              <strong className="text-marrom-dark">Fonoaudióloga infantil especializada no desenvolvimento da comunicação e linguagem nos primeiros anos de vida.</strong>
            </p>
            <p>
              Atuo ajudando mães que estão inseguras, cheias de dúvidas e, muitas vezes, com aquele medo silencioso de que o filho "não vá falar".
            </p>
            <p>
              Se você já se pegou comparando seu filho com outras crianças, pesquisando tudo na internet ou sem saber por onde começar… <strong className="text-marrom-dark">eu entendo exatamente como você se sente.</strong>
            </p>
            <p>
              Ao longo da minha prática clínica, acompanhei de perto a evolução de muitas crianças que hoje se comunicam melhor, interagem mais e dão passos importantes no desenvolvimento da fala — tudo isso com estímulos feitos de forma leve, respeitosa e dentro da rotina da família.
            </p>
            <p>
              E foi justamente observando essas famílias que eu percebi algo importante:
            </p>
            <p className="text-marrom-dark font-bold text-[1.1rem]">
              Não é sobre fazer mais. É sobre fazer do jeito certo.
            </p>
            <p>
              Criei esse método para te mostrar exatamente como estimular a fala do seu filho no dia a dia, usando situações simples que você já vive — sem precisar de materiais complexos, sem sobrecarga e sem transformar sua rotina em algo impossível.
            </p>
            <p>
              Porque eu sei que nem toda mãe consegue estar em terapia toda semana. <strong className="text-marrom-dark">Mas toda mãe pode aprender a estimular melhor.</strong>
            </p>
            <p>
              Aqui, você não vai encontrar fórmulas mágicas ou promessas irreais. Você vai encontrar um <strong className="text-marrom-dark">caminho claro, possível e baseado no que realmente funciona na prática clínica.</strong>
            </p>
            <p>
              Meu objetivo é que você se sinta segura, orientada e confiante — e que consiga enxergar, com seus próprios olhos, <strong className="text-marrom-dark">a evolução do seu filho na comunicação.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
