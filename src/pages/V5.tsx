import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import VturbPlayer from "@/components/landing/VturbPlayer";
import produtoMockup from "@/assets/produto-mockup.webp";

const CTA_LINK = "https://pay.kiwify.com.br/uXb5s35";

const beneficios = [
  "Actividades simples para estimular el habla en la rutina de casa",
  "Guía paso a paso para saber qué hacer cada día",
  "Estrategias creadas por una fonoaudióloga, sin juguetes caros ni complicaciones",
  "Acceso inmediato por email para empezar hoy mismo",
];

const dolores = [
  "Sientes que tu hijo quiere hablar, pero no logra expresar lo que necesita",
  "Ya buscaste consejos en internet y sigues sin saber por dónde empezar",
  "Te preocupa ver a otros niños hablando más mientras tu hijo se queda atrás",
];

const V5 = () => {
  useEffect(() => {
    const fire = () => import("@/lib/fbConversions").then((m) => m.fbEvents.pageView());
    const schedule = () => setTimeout(fire, 1);
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => window.removeEventListener("load", schedule);
  }, []);

  return (
    <main className="min-h-screen bg-background text-marrom-dark">
      <section className="hero-critical bg-gradient-to-b from-rosa-light to-background pt-6 pb-4 md:pt-16 md:pb-12 px-6">
        <div className="hero-critical__inner max-w-[1000px] mx-auto text-center">
          <h1 className="text-[1.45rem] md:text-[2.6rem] font-black leading-[1.1] text-marrom-dark mb-2 md:mb-3 uppercase tracking-tight">
            Haz estos ajustes en la rutina de tu hijo durante 15 minutos y mira cómo empieza a formar sus primeras frases{" "}
            <span className="gold text-dourado">en hasta 30 días</span>
          </h1>

          <p className="text-[0.95rem] md:text-[1.05rem] text-primary/80 leading-[1.5] md:leading-[1.8] max-w-[520px] mx-auto">
            El método creado por una fonoaudióloga que aprovecha la rutina que ya tienes — sin consultas, sin juguetes especiales y sin complicaciones.
          </p>
        </div>
      </section>

      <VturbPlayer />

      <section className="bg-background py-12 md:py-16 px-6">
        <div className="max-w-[850px] mx-auto text-center">
          <h2 className="text-[1.55rem] md:text-[2.1rem] font-extrabold text-marrom-dark mb-8 leading-[1.25]">
            Si sientes que tu hijo tiene mucho más para decir, esta guía te muestra cómo ayudarlo.
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-left">
            {dolores.map((item) => (
              <div key={item} className="rounded-2xl bg-rosa-light px-5 py-5 text-[1rem] leading-[1.55] font-semibold text-primary/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rosa py-14 md:py-20 px-6 text-background">
        <div className="max-w-[850px] mx-auto">
          <h2 className="text-[1.55rem] md:text-[2.1rem] font-extrabold mb-8 leading-[1.25] text-center">
            Lo que recibes dentro del Método Tagarela
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {beneficios.map((item) => (
              <div key={item} className="rounded-2xl bg-background/[0.12] px-6 py-5 text-[1rem] leading-[1.6] font-bold">
                ✅ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precio" className="bg-rosa pt-4 pb-10 md:pt-6 md:pb-14 px-4">
        <div className="text-center max-w-[520px] mx-auto">
          <div className="bg-background text-marrom-dark rounded-2xl p-8 md:p-10 shadow-xl">
            <span className="inline-block bg-vermelho text-background text-[0.85rem] font-bold px-6 py-2.5 rounded-lg mb-5">
              Oferta especial por tiempo limitado
            </span>

            <div className="w-full max-w-[320px] mx-auto mb-4 aspect-video rounded-2xl overflow-hidden drop-shadow-lg">
              <img
                src={produtoMockup}
                alt="Guía completa Método Tagarela"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={1024}
                height={1024}
              />
            </div>

            <p className="text-[1rem] mb-2 font-semibold">
              <span className="bg-vermelho text-background px-3 py-1 rounded-md text-[1.1rem] font-bold">
                Antes: <span className="line-through">US$ 97.99</span>
              </span>
            </p>

            <p className="text-[1.1rem] mb-1 mt-3">
              Hoy por solo <strong className="text-[2.8rem] md:text-[3.2rem] font-black text-marrom-dark leading-none">US$ 19.99</strong>
            </p>

            <div className="mt-6">
              <Button variant="cta" size="lg" className="text-[0.9rem] md:text-[1rem] px-8 py-6 md:py-7 w-full leading-tight whitespace-normal h-auto text-background font-extrabold" asChild>
                <a href={CTA_LINK} onClick={() => import("@/lib/fbConversions").then((m) => m.fbEvents.initiateCheckout())}>
                  QUIERO AYUDAR A MI HIJO A HABLAR MÁS EN 30 DÍAS
                </a>
              </Button>
            </div>

            <p className="text-[0.85rem] text-primary/60 mt-4 font-semibold">
              📲 Recibe acceso inmediato en tu email
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 md:py-20 px-6 text-center">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[1.5rem] md:text-[2rem] font-extrabold text-marrom-dark mb-5 leading-[1.25]">
            Garantía total de 30 días
          </h2>
          <p className="text-[1.05rem] text-primary/75 leading-[1.8] font-semibold">
            Entra, aplica el método con tu hijo y vive la experiencia completa. Si en 30 días sientes que no valió cada centavo, te devolvemos tu dinero sin burocracia.
          </p>
        </div>
      </section>

      <footer className="bg-rosa text-background/50 text-center py-8 px-6 text-[0.8rem] leading-relaxed">
        <p>© 2025 Thaynara Andrade Fonoaudióloga · tiathayfono.com.br · Todos los derechos reservados</p>
        <p className="mt-3 opacity-70">Política de Privacidad · Términos de Uso</p>
        <p className="mt-5 opacity-50 max-w-[600px] mx-auto">
          Este sitio no está afiliado a Facebook ni a ninguna entidad de Facebook.
        </p>
      </footer>
    </main>
  );
};

export default V5;