import { useState } from "react";

const faqs = [
  {
    q: "Compré ahora — ¿cuándo puedo acceder?",
    a: "Al instante. En cuanto se apruebe el pago, recibes el acceso directo en la plataforma. No necesitas esperar, no necesitas instalar nada. En menos de 2 minutos ya estás dentro.",
  },
  {
    q: "¿Cuánto tiempo tarda mi hijo en empezar a hablar más?",
    a: "La mayoría de las mamás ya nota algo diferente en la primera semana — un intento nuevo, una palabra que no existía antes. El programa es de 30 días, pero las primeras señales aparecen mucho antes. Cada niño tiene su tiempo, y la Guía fue hecha para respetar eso sin dejarte sin acción.",
  },
  {
    q: "¿Necesito tener algún conocimiento o comprar material especial?",
    a: "No necesitas nada de eso. Todo fue creado para funcionar con lo que ya tienes en casa y con la rutina que ya vives. No es necesario entender de fonoaudiología, no es necesario comprar juguetes nuevos. Solo eres tú, tu hijo y 15 minutos al día.",
  },
  {
    q: "Ya intenté varias cosas antes y no vi resultados. ¿Esto es diferente?",
    a: "Sí — y mucho. La diferencia está en el origen: lo que intentaste antes probablemente era contenido genérico, sin estructura clínica. Aquí recibes el mismo protocolo que la Dra. Thaynara aplica en consultorio, adaptado para mamás, con paso a paso claro y validado con cientos de niños reales.",
  },
  {
    q: "Mi hijo ya hace terapia con una fonoaudióloga. ¿Sigue valiendo la pena?",
    a: "Vale — y mucho. La fonoaudióloga atiende a tu hijo por 1 hora a la semana. La Guía te pone en acción en las otras horas del día, dentro de casa. No compite con la terapia, amplifica su resultado. Muchas fonoaudiólogas inclusive la recomiendan.",
  },
  {
    q: "¿Cómo sé si la Guía es la adecuada para mi hijo?",
    a: "Si tu hijo tiene entre 1 y 5 años y sientes que él podría estar comunicándose mejor — habla poco, no habla nada, entiende pero no verbaliza, o regresó — entonces la Guía fue hecha para él. Y para ti.",
  },
  {
    q: "¿A partir de qué edad puedo usar la Guía?",
    a: "La Guía está indicada para niños de 1 a 5 años, que es la fase donde el cerebro está más receptivo para aprender a hablar. Cuanto antes empieces, más fuerte es el resultado — pero dentro de ese rango, nunca es tarde para actuar.",
  },
  {
    q: "¿La plataforma de pagos es segura?",
    a: "Sí, utilizamos tecnologías avanzadas de seguridad, garantizando un proceso de pago 100% confiable y protegido.",
  },
];

const FAQSectionEs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-20 md:py-28 px-6">
      <div className="max-w-[750px] mx-auto">
        <h2 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-marrom-dark text-center mb-14 leading-[1.25]">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-bege-dark rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-marrom-dark text-[1rem]"
              >
                <span>{faq.q}</span>
                <span className="text-xl shrink-0 text-dourado font-bold">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-[0.95rem] text-primary/80 leading-[1.7]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSectionEs;
