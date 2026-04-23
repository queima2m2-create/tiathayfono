import { useState, useEffect } from "react";
import { getSocialProofCount } from "@/lib/socialProofCount";
import thaynaraFoto from "@/assets/thaynara-foto.webp";
import sobreFilha from "@/assets/sobre-filha.webp";

const images = [
  { src: thaynaraFoto, width: 600, height: 800 },
  { src: sobreFilha, width: 450, height: 800 },
];

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
            {images.map((item, i) => (
              <img
                key={i}
                src={item.src}
                alt={`Thaynara Andrade - Foto ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                decoding="async"
                width={item.width}
                height={item.height}
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
            Conheça a criadora da Estrutura Única da Fala
          </span>
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-extrabold text-marrom-dark mb-5 leading-[1.3]">
            Oi! Eu sou a Thaynara Andrade
          </h2>
          <div className="space-y-4 text-[1rem] text-primary/80 leading-[1.8]">
            <p>
              <strong className="text-marrom-dark">Fonoaudióloga infantil especializada no desenvolvimento da comunicação e linguagem nos primeiros anos de vida.</strong>
            </p>
            <p>
              Já acompanhei mais de <strong className="text-marrom-dark">{getSocialProofCount()} famílias</strong> — e o que eu percebi em todas elas foi o mesmo: as mães precisavam de algo além da consulta — saber exatamente o que fazer em casa, no banho, na hora da comida, na brincadeira do dia a dia.
            </p>
            <p>
              Mães que estavam perdidas, achando que o filho nunca ia falar — <strong className="text-marrom-dark">hoje me mandam vídeos emocionadas com cada palavrinha nova.</strong>
            </p>
            <p>
              Criei esse Guia porque sei que nem toda mãe consegue estar em terapia toda semana. <strong className="text-marrom-dark">Mas toda mãe pode aprender a estimular melhor.</strong>
            </p>
            <p>
              Aqui você não vai encontrar fórmulas mágicas. Vai encontrar um <strong className="text-marrom-dark">caminho claro, leve e baseado no que realmente funciona na prática clínica</strong> — usando situações simples que você já vive, sem materiais complexos e sem transformar sua rotina em algo impossível.
            </p>
            <p>
              Meu objetivo é que você se sinta segura e confiante — e que veja, com seus próprios olhos, <strong className="text-marrom-dark">a evolução do seu filho.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
