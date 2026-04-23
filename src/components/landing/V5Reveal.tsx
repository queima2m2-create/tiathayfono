import { Shield, Lock, ShieldCheck } from "lucide-react";
import imgPlano from "@/assets/v4-plano30dias.jpeg";
import imgCaderno from "@/assets/v4-caderno.jpeg";
import imgCards from "@/assets/v4-cards.jpeg";
import imgGuia from "@/assets/v4-guia-situacoes.jpeg";
import imgChecklist from "@/assets/v4-checklist.jpeg";
import imgTagarelar from "@/assets/v4-tagarelar.jpeg";

const productos = [
  { nombre: "Plan 30 Días con Tía Thay", desc: "Guía diaria paso a paso para destrabar el habla de tu hijo.", valor: "R$297,00", dataProduct: "plano30dias", img: imgPlano },
  { nombre: "Cuaderno de Seguimiento", desc: "Registra cada palabra nueva y mira la evolución en tiempo real.", valor: "R$47,00", dataProduct: "caderno", img: imgCaderno },
  { nombre: "50 Tarjetas para Imprimir", desc: "Estímulos visuales listos para usar todos los días.", valor: "R$47,00", dataProduct: "cards", img: imgCards },
  { nombre: "Guía para Situaciones Difíciles", desc: "Qué hacer cuando se niega, llora o ignora.", valor: "R$57,00", dataProduct: "guia-situacoes", img: imgGuia },
  { nombre: "Checklist de Hitos por Edad", desc: "Sepa exactamente qué esperar en cada etapa.", valor: "R$52,00", dataProduct: "checklist", img: imgChecklist },
  { nombre: "App Tagarelar", desc: "Acceso a la app con juegos de estimulación del lenguaje.", valor: "R$97,00", dataProduct: "tagarelar", img: imgTagarelar },
];

const testimonios = [
  {
    nombre: "Ana Paula",
    texto:
      "Thaynara, tengo que contarte. Miguel dijo 'agua' hoy durante el baño. Nunca había pedido nada antes. Hice exactamente lo que enseñaste, esperé a que me mirara. Gracias por mostrarme que yo podía hacer esto por él ❤️",
  },
  {
    nombre: "Jéssica",
    texto:
      "TIAAA Guto dijo mamá!! MAMÁÁÁ!! mi mamá estaba aquí y las dos nos volvimos locas jajaja hice esa pausa que dijiste y él vino y habló. todavía estoy temblando jaja eres increíble 🙏",
  },
  {
    nombre: "Rosangela",
    texto:
      "buenas tardes thaynara. quería avisarte que pedro dijo 'no' hoy cuando fui a quitarle el juguete. puede parecer poco, pero tenía casi 2 años y medio sin hablar nada. tu método realmente funcionó. Dios te bendiga",
  },
];

const ROXO = "#6B2D8B";
const ROXO_CLARO = "#F3E8FA";
const VERDE = "#1A7A3A";
const VERDE_CLARO = "#E8F5ED";
const CINZA_CLARO = "#F8F8F8";

const V5Reveal = () => {
  return (
    <>
      <section className="px-4 pb-10 md:pb-16" style={{ background: CINZA_CLARO }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.15]" style={{ color: ROXO }}>
            Ya tienes el conocimiento. Ahora necesitas el plan.
          </h1>

          <div className="mt-10">
            <div className="flex justify-center">
              <div style={{ textAlign: "center" }} id="kiwify-upsell-cXCgv1m" data-upsell-url="" data-downsell-url="">
                <button
                  id="kiwify-upsell-trigger-cXCgv1m"
                  className="kiwify-cta-button"
                  style={{
                    background: "linear-gradient(180deg, #2ED66F 0%, #27AF60 50%, #1F8F4E 100%)",
                    padding: "20px 32px",
                    cursor: "pointer",
                    color: "#FFFFFF",
                    fontWeight: 800,
                    borderRadius: "16px",
                    border: "none",
                    fontSize: "20px",
                    lineHeight: 1.2,
                    width: "100%",
                    maxWidth: "520px",
                    letterSpacing: "0.3px",
                    textTransform: "uppercase",
                    boxShadow: "0 10px 24px -8px rgba(31,143,78,0.55), 0 4px 0 0 #1F8F4E, inset 0 1px 0 rgba(255,255,255,0.35)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    textShadow: "0 1px 1px rgba(0,0,0,0.15)",
                  }}
                >
                  <span aria-hidden="true">🛒</span>
                  Sí, QUIERO EL PLAN DE TÍA THAY
                </button>
                <div id="kiwify-upsell-cancel-trigger-cXCgv1m" style={{ marginTop: "1rem", cursor: "pointer", fontSize: "16px", textDecoration: "underline", fontFamily: "sans-serif" }}>
                  .
                </div>
              </div>
            </div>

            <p className="font-extrabold mt-5 text-lg" style={{ color: ROXO }}>12x de R$20,47</p>
            <p className="text-neutral-500 text-sm mt-1">o R$197,90 al contado — acceso inmediato y de por vida</p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-neutral-500 text-xs md:text-sm">
              <span className="inline-flex items-center gap-1.5"><Lock className="w-4 h-4" /> Compra 100% segura</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> 7 días de garantía</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "60px" }} />

      <section className="px-4 py-14 md:py-20" style={{ background: ROXO_CLARO }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10" style={{ color: ROXO }}>Todo lo que recibes hoy:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {productos.map((p) => (
              <div key={p.nombre} className="bg-white rounded-2xl shadow-[0_8px_20px_-12px_rgba(107,45,139,0.25)] flex flex-col overflow-hidden">
                <img src={p.img} alt={p.nombre} data-product={p.dataProduct} loading="lazy" decoding="async" className="w-full bg-neutral-100" style={{ height: "260px", objectFit: "contain", padding: "12px" }} />
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-sm md:text-base mb-1" style={{ color: ROXO }}>{p.nombre}</h3>
                  <p className="text-neutral-500 text-xs md:text-sm mb-3 flex-1">{p.desc}</p>
                  <p className="text-red-600 line-through text-sm font-semibold">{p.valor}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-10 border-purple-200" />
          <div className="text-center">
            <p className="text-neutral-700 text-base md:text-lg">Valor total: <span className="line-through text-red-600 font-semibold">R$597,00</span></p>
            <p className="mt-2 text-lg md:text-2xl font-extrabold" style={{ color: ROXO }}>Hoy: 12x de R$20,47 o R$197,90 al contado</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10" style={{ color: ROXO }}>Lo que dicen las mamás:</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonios.map((d) => (
              <div key={d.nombre} className="bg-neutral-50 rounded-xl p-5 border-l-4 shadow-sm" style={{ borderLeftColor: ROXO }}>
                <p className="text-neutral-700 text-sm md:text-[15px] leading-relaxed whitespace-pre-line">{d.texto}</p>
                <p className="font-bold mt-4" style={{ color: ROXO }}>— {d.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20" style={{ background: VERDE_CLARO }}>
        <div className="max-w-[720px] mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" style={{ color: VERDE }} strokeWidth={2.2} />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4" style={{ color: VERDE }}>Garantía de 7 Días</h2>
          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">Aplica el plan durante 7 días. Si no ves ningún cambio en la forma en que tu hijo interactúa contigo, me envías un mensaje y te devuelvo cada centavo. Sin preguntas. Sin burocracia.</p>
          <p className="mt-5 font-bold text-neutral-800">— Thaynara Andrade, Fonoaudióloga</p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 text-center text-white" style={{ background: ROXO }}>
        <div className="max-w-[820px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.15] mb-4">Ya tienes el conocimiento. Ahora necesitas el plan.</h2>
          <p className="text-white/85 text-base md:text-lg mb-8">Esta condición existe solo aquí, solo ahora. Cuando salgas de esta página, desaparece.</p>
          <p className="mt-5 font-extrabold text-lg">12x de R$20,47 o R$197,90 al contado</p>
        </div>
      </section>
    </>
  );
};

export default V5Reveal;