import { Shield, Lock, ShieldCheck } from "lucide-react";
import imgPlano from "@/assets/v6-plano30dias.jpeg";
import imgCaderno from "@/assets/v6-caderno.jpeg";
import imgCards from "@/assets/v6-cards.jpeg";
import imgGuia from "@/assets/v6-guia.jpeg";
import imgChecklist from "@/assets/v6-checklist.jpeg";
import imgTagarelar from "@/assets/v6-tagarelar.jpeg";

const produtos = [
  { nome: "Plan 30 Días con la Tía Thay", desc: "Guion diario paso a paso para desbloquear el habla de tu hijo.", valor: "$137,00", dataProduct: "plano30dias", img: imgPlano },
  { nome: "Cuaderno de Acompañamiento", desc: "Registra cada palabra nueva y mira la evolución en tiempo real.", valor: "$10,00", dataProduct: "caderno", img: imgCaderno },
  { nome: "50 Tarjetas para Imprimir", desc: "Estímulos visuales listos para usar todos los días.", valor: "$10,00", dataProduct: "cards", img: imgCards },
  { nome: "Guía de Respuestas para Situaciones Difíciles", desc: "Qué hacer cuando se niega, llora o ignora.", valor: "$12,00", dataProduct: "guia-situacoes", img: imgGuia },
  { nome: "Checklist de Hitos por Edad", desc: "Sabe exactamente qué esperar en cada edad.", valor: "$10,00", dataProduct: "checklist", img: imgChecklist },
  { nome: "App Tagarelar", desc: "Acceso a la app con juegos de estímulo del lenguaje.", valor: "$19,00", dataProduct: "tagarelar", img: imgTagarelar },
];

const depoimentos = [
  {
    nome: "Ana Paula",
    texto:
      "Thaynara necesito contarte. Miguel dijo 'agua' hoy a la hora del baño. Nunca había pedido nada antes. Hice exactamente lo que enseñaste, esperé que me mirara. Gracias por mostrarme que era capaz de hacer esto por él ❤️",
  },
  {
    nome: "Jéssica",
    texto:
      "TIAAA ¡Guto dijo mamá!! ¡¡MAMÁ!! mi mamá estaba aquí y las dos nos volvimos locas jajaja yo estaba haciendo aquella pausa que dijiste y él vino y la dijo. todavía estoy temblando jaja eres increíble 🙏",
  },
  {
    nome: "Rosangela",
    texto:
      "buenas tardes thaynara. quería avisarte que pedro dijo 'no' hoy cuando le iba a quitar el juguete. puede parecer poco pero tenía casi 2 años y medio sin decir nada. tu método funcionó de verdad. Dios te bendiga",
  },
];

const ROXO = "#6B2D8B";
const ROXO_CLARO = "#F3E8FA";
const VERDE = "#1A7A3A";
const VERDE_CLARO = "#E8F5ED";
const CINZA_CLARO = "#F8F8F8";

const V6EsReveal = () => {
  return (
    <>
      <section className="px-4 pb-10 md:pb-16" style={{ background: CINZA_CLARO }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl font-extrabold leading-[1.15]"
            style={{ color: ROXO }}
          >
            Tienes el conocimiento. Ahora necesitas el guion.
          </h1>

          <div className="mt-10">
            <div className="flex justify-center">
              <div
                style={{ textAlign: "center" }}
                id="kiwify-upsell-M0yny2u"
                data-upsell-url=""
                data-downsell-url="https://www.tiathayfono.com.br/downsell-es"
              >
                <button
                  id="kiwify-upsell-trigger-M0yny2u"
                  className="kiwify-cta-button"
                  onClick={() => {
                    if (typeof (window as any).fbq !== "undefined") {
                      (window as any).fbq("track", "InitiateCheckout", {
                        value: 39.99,
                        currency: "USD",
                        content_name: "Plan 30 Días Tía Thay",
                        content_type: "product",
                      });
                    }
                  }}
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
                    boxShadow:
                      "0 10px 24px -8px rgba(31,143,78,0.55), 0 4px 0 0 #1F8F4E, inset 0 1px 0 rgba(255,255,255,0.35)",
                    transition: "transform 120ms ease, box-shadow 120ms ease, filter 120ms ease",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    textShadow: "0 1px 1px rgba(0,0,0,0.15)",
                  }}
                >
                  <span aria-hidden="true">🛒</span>
                  Sí, QUIERO EL PLAN DE LA TÍA THAY
                </button>
                <div
                  id="kiwify-upsell-cancel-trigger-M0yny2u"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "#5A6268";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "#6C757D";
                  }}
                  style={{
                    marginTop: "12px",
                    cursor: "pointer",
                    backgroundColor: "#6C757D",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "18px",
                    textTransform: "uppercase",
                    padding: "20px 32px",
                    border: "none",
                    borderRadius: "16px",
                    width: "100%",
                    maxWidth: "520px",
                    letterSpacing: "0.3px",
                    boxShadow: "0 6px 14px -6px rgba(108,117,125,0.45), 0 2px 0 0 #5A6268",
                    textAlign: "center",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                    transition: "background-color 0.15s ease",
                  }}
                >
                  Ahora no, gracias
                </div>
              </div>
            </div>

            <p className="text-neutral-500 text-sm line-through text-red-600 font-semibold">
              De $137 USD
            </p>
            <p className="text-neutral-500 text-xs mt-1">Por solo</p>
            <p className="font-extrabold mt-1 text-2xl" style={{ color: VERDE }}>
              $39,99 USD
            </p>
            <p className="text-neutral-500 text-xs mt-1">al contado</p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-neutral-500 text-xs md:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-4 h-4" /> Compra 100% segura
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> 7 días de garantía
              </span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: "60px" }} />

      <section className="px-4 py-14 md:py-20" style={{ background: ROXO_CLARO }}>
        <div className="max-w-[1100px] mx-auto">
          <h2
            className="text-2xl md:text-4xl font-extrabold text-center mb-10"
            style={{ color: ROXO }}
          >
            Todo lo que te llevas hoy:
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {produtos.map((p) => (
              <div
                key={p.nome}
                className="bg-white rounded-2xl shadow-[0_8px_20px_-12px_rgba(107,45,139,0.25)] flex flex-col overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.nome}
                  data-product={p.dataProduct}
                  loading="lazy"
                  decoding="async"
                  className="w-full bg-neutral-100"
                  style={{ height: "260px", objectFit: "contain", padding: "12px" }}
                />
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-sm md:text-base mb-1" style={{ color: ROXO }}>
                    {p.nome}
                  </h3>
                  <p className="text-neutral-500 text-xs md:text-sm mb-3 flex-1">{p.desc}</p>
                  <p className="text-red-600 line-through text-sm font-semibold">{p.valor}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-10 border-purple-200" />
          <div className="text-center">
            <p className="text-neutral-700 text-base md:text-lg">
              Valor total: <span className="line-through text-red-600 font-semibold">$198,00 USD</span>
            </p>
            <p className="mt-2 text-lg md:text-2xl font-extrabold" style={{ color: VERDE }}>
              Por solo $39,99 USD
            </p>
            <p className="text-neutral-500 text-sm mt-1">al contado</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <h2
            className="text-2xl md:text-4xl font-extrabold text-center mb-10"
            style={{ color: ROXO }}
          >
            Lo que dicen las mamás:
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {depoimentos.map((d) => (
              <div
                key={d.nome}
                className="bg-neutral-50 rounded-xl p-5 border-l-4 shadow-sm"
                style={{ borderLeftColor: ROXO }}
              >
                <p className="text-neutral-700 text-sm md:text-[15px] leading-relaxed whitespace-pre-line">
                  {d.texto}
                </p>
                <p className="font-bold mt-4" style={{ color: ROXO }}>
                  — {d.nome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20" style={{ background: VERDE_CLARO }}>
        <div className="max-w-[720px] mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" style={{ color: VERDE }} strokeWidth={2.2} />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4" style={{ color: VERDE }}>
            Garantía de 7 Días
          </h2>
          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            Aplica el plan durante 7 días. Si no ves ningún cambio en la forma en que tu hijo
            interactúa contigo, mándame un mensaje y te devuelvo cada centavo. Sin preguntas. Sin
            burocracia.
          </p>
          <p className="mt-5 font-bold text-neutral-800">— Thaynara Andrade, Fonoaudióloga</p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 text-center text-white" style={{ background: ROXO }}>
        <div className="max-w-[820px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.15] mb-4">
            Tienes el conocimiento. Ahora necesitas el guion.
          </h2>
          <p className="text-white/85 text-base md:text-lg mb-8">
            Esta condición existe solo aquí, solo ahora. Cuando salgas de esta página desaparece.
          </p>
          <p className="mt-5 font-extrabold text-2xl" style={{ color: "#2ED66F" }}>Por solo $39,99 USD</p>
          <p className="text-white/70 text-sm mt-1">al contado</p>
        </div>
      </section>
    </>
  );
};

export default V6EsReveal;
