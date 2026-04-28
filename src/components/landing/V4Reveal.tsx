import { Shield, Lock, ShieldCheck } from "lucide-react";
import imgPlano from "@/assets/v4-plano30dias.jpeg";
import imgCaderno from "@/assets/v4-caderno.jpeg";
import imgCards from "@/assets/v4-cards.jpeg";
import imgGuia from "@/assets/v4-guia-situacoes.jpeg";
import imgChecklist from "@/assets/v4-checklist.jpeg";
import imgTagarelar from "@/assets/v4-tagarelar.jpeg";

const produtos = [
  { nome: "Plano 30 Dias com a Tia Thay", desc: "Roteiro diário passo a passo para destravar a fala do seu filho.", valor: "R$297,00", dataProduct: "plano30dias", img: imgPlano },
  { nome: "Caderno de Acompanhamento", desc: "Registre cada palavra nova e veja a evolução em tempo real.", valor: "R$47,00", dataProduct: "caderno", img: imgCaderno },
  { nome: "50 Cards para Imprimir", desc: "Estímulos visuais prontos para usar todos os dias.", valor: "R$47,00", dataProduct: "cards", img: imgCards },
  { nome: "Guia de Respostas para Situações Difíceis", desc: "O que fazer quando ele se recusa, chora ou ignora.", valor: "R$57,00", dataProduct: "guia-situacoes", img: imgGuia },
  { nome: "Checklist de Marcos por Faixa Etária", desc: "Saiba exatamente o que esperar em cada idade.", valor: "R$52,00", dataProduct: "checklist", img: imgChecklist },
  { nome: "App Tagarelar", desc: "Acesso ao app com jogos de estímulo de linguagem.", valor: "R$97,00", dataProduct: "tagarelar", img: imgTagarelar },
];

const depoimentos = [
  {
    nome: "Ana Paula",
    texto:
      "Thaynara preciso te contar. O Miguel falou 'agua' hoje na hora do banho. Ele nunca tinha pedido nada antes. Eu fiz exatamente o que você ensinou, fiquei esperando ele me olhar. Obrigada por me mostrar que eu era capaz de fazer isso por ele ❤️",
  },
  {
    nome: "Jéssica",
    texto:
      "TIAAA o guto falou mamãe!! MAMÃEEE!! minha mãe tava aqui e as duas entramos em parafuso kkkkkkk eu tava fazendo aquela pausa que vc falou ne ai ele veio e falou. to tremendo ate agora kkk vc é incrível demais 🙏",
  },
  {
    nome: "Rosangela",
    texto:
      "boa tarde thaynara. queria te avisar que o pedro disse 'nao' hoje quando eu fui tirar o brinquedo dele. pode parecer pouco mas ele tinha quase 2 anos e meio sem falar nada. sua metodo funcionou mesmo. Deus abençoe voce",
  },
];

const ROXO = "#6B2D8B";
const ROXO_CLARO = "#F3E8FA";
const VERDE = "#1A7A3A";
const VERDE_CLARO = "#E8F5ED";
const CINZA_CLARO = "#F8F8F8";

const V4Reveal = () => {
  return (
    <>
      <section className="px-4 pb-10 md:pb-16" style={{ background: CINZA_CLARO }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl font-extrabold leading-[1.15]"
            style={{ color: ROXO }}
          >
            Você tem o conhecimento. Agora precisa do roteiro.
          </h1>

          <div className="mt-10">
            <div className="flex justify-center">
              <div
                style={{ textAlign: "center" }}
                id="kiwify-upsell-cXCgv1m"
                data-upsell-url=""
                data-downsell-url="https://www.tiathayfono.com.br/downsell"
              >
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
                  Sim, QUERO O PLANO DA TIA THAY
                </button>
                <div
                  id="kiwify-upsell-cancel-trigger-cXCgv1m"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "#F5F5F5";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "#FFFFFF";
                  }}
                  style={{
                    marginTop: "16px",
                    cursor: "pointer",
                    fontSize: "16px",
                    color: "#666666",
                    fontWeight: 400,
                    textDecoration: "none",
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #D4D4D4",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                    transition: "background-color 0.15s ease",
                  }}
                >
                  Agora não, obrigada
                </div>
              </div>
            </div>

            <p className="font-extrabold mt-5 text-lg" style={{ color: ROXO }}>
              12x de R$20,47
            </p>
            <p className="text-neutral-500 text-sm mt-1">
              ou R$197,90 à vista — acesso imediato e vitalício
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-neutral-500 text-xs md:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-4 h-4" /> Compra 100% segura
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> 7 dias de garantia
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
            Tudo que você leva hoje:
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
              Valor total: <span className="line-through text-red-600 font-semibold">R$597,00</span>
            </p>
            <p className="mt-2 text-lg md:text-2xl font-extrabold" style={{ color: ROXO }}>
              Hoje: 12x de R$20,47 ou R$197,90 à vista
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <h2
            className="text-2xl md:text-4xl font-extrabold text-center mb-10"
            style={{ color: ROXO }}
          >
            O que as mães estão dizendo:
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
            Garantia de 7 Dias
          </h2>
          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            Aplica o plano por 7 dias. Se você não enxergar nenhuma mudança na forma como o seu filho
            interage com você, me manda uma mensagem e eu devolvo cada centavo. Sem perguntas. Sem
            burocracia.
          </p>
          <p className="mt-5 font-bold text-neutral-800">— Thaynara Andrade, Fonoaudióloga</p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 text-center text-white" style={{ background: ROXO }}>
        <div className="max-w-[820px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.15] mb-4">
            Você tem o conhecimento. Agora precisa do roteiro.
          </h2>
          <p className="text-white/85 text-base md:text-lg mb-8">
            Essa condição existe só aqui, só agora. Quando você sair essa página ela some.
          </p>
          <p className="mt-5 font-extrabold text-lg">12x de R$20,47 ou R$197,90 à vista</p>
        </div>
      </section>
    </>
  );
};

export default V4Reveal;
