import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import {
  ANGUSTIAS,
  AulaFormData,
  COLORS,
  DESEJO_PRINCIPAL,
  DIAS,
  EXPOSICAO_TELAS,
  GANCHOS,
  HABILIDADES,
  HORARIOS,
  IDADES,
  JA_AVALIACAO,
  N8N_WEBHOOK_AULA,
  PLATAFORMAS,
  REACAO_INTERACAO,
  STORAGE_KEY,
  TEMPO_PERCEBE,
  initialFormData,
} from "@/lib/aulaConfig";

const fbq = (...args: any[]) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq(...args);
  }
};

const getCookie = (name: string) => {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : "";
};

const maskPhone = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const Header = ({ step }: { step: number }) => {
  const pct = step === 0 ? 0 : step === 1 ? 33 : step === 2 ? 66 : 100;
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#FFE5EC]">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="font-extrabold text-[#4A1B2A]">💛 Tia Thay</div>
        {step > 0 && (
          <div className="flex-1 max-w-xs">
            <div className="text-xs text-[#3A3540] mb-1 text-right">
              Etapa {step} de 3 • {pct}%
            </div>
            <div className="h-2 bg-[#FFE5EC] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-[400ms]"
                style={{
                  width: `${pct}%`,
                  background:
                    "linear-gradient(90deg, #FF8FA3 0%, #FF6B35 100%)",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const RadioCards = ({
  options,
  value,
  onChange,
  cols = 1,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  cols?: number;
}) => (
  <div className={`grid gap-3 ${cols === 2 ? "grid-cols-2" : cols === 3 ? "grid-cols-3 sm:grid-cols-6" : "grid-cols-1"}`}>
    {options.map((opt) => {
      const sel = value === opt;
      return (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`text-left p-4 rounded-2xl border-[3px] transition-all ${
            sel
              ? "border-[#FF8FA3] bg-[#FFE5EC]"
              : "border-transparent bg-white hover:border-[#FF8FA3]/40"
          } shadow-sm`}
        >
          <span className="text-[#4A1B2A] font-medium">{opt}</span>
        </button>
      );
    })}
  </div>
);

const CheckboxCards = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
}) => (
  <div className="grid gap-3">
    {options.map((opt) => {
      const sel = value.includes(opt);
      return (
        <button
          key={opt}
          type="button"
          onClick={() =>
            onChange(sel ? value.filter((v) => v !== opt) : [...value, opt])
          }
          className={`text-left p-4 rounded-2xl border-[3px] transition-all flex items-center gap-3 ${
            sel
              ? "border-[#FF8FA3] bg-[#FFE5EC]"
              : "border-transparent bg-white hover:border-[#FF8FA3]/40"
          } shadow-sm`}
        >
          <span
            className={`h-5 w-5 rounded-md border-2 flex items-center justify-center text-white text-xs ${
              sel ? "bg-[#FF8FA3] border-[#FF8FA3]" : "border-[#FF8FA3]/40"
            }`}
          >
            {sel ? "✓" : ""}
          </span>
          <span className="text-[#4A1B2A] font-medium">{opt}</span>
        </button>
      );
    })}
  </div>
);

const Pills = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
}) => (
  <div className="flex flex-wrap gap-2">
    {options.map((opt) => {
      const sel = value.includes(opt);
      return (
        <button
          key={opt}
          type="button"
          onClick={() =>
            onChange(sel ? value.filter((v) => v !== opt) : [...value, opt])
          }
          className={`px-5 py-2 rounded-full font-semibold transition-all border-2 ${
            sel
              ? "bg-[#FF8FA3] text-white border-[#FF8FA3]"
              : "bg-white text-[#4A1B2A] border-[#FFE5EC]"
          }`}
        >
          {opt}
        </button>
      );
    })}
  </div>
);

const Field = ({
  label,
  children,
  hint,
  required,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <label className="block text-base font-semibold text-[#4A1B2A]">
      {label}{" "}
      {!required && (
        <span className="text-xs text-[#3A3540]/60 font-normal">(opcional)</span>
      )}
    </label>
    {children}
    {hint && <p className="text-xs text-[#3A3540]/70">{hint}</p>}
  </div>
);

const CTAButton = ({
  children,
  disabled,
  onClick,
  loading,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled || loading}
    className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold text-lg py-4 rounded-2xl shadow-lg shadow-[#FF6B35]/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all uppercase tracking-wide"
  >
    {loading ? "Garantindo sua vaga..." : children}
  </button>
);

export default function AulaAoVivo() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<AulaFormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  // Load saved progress + tracking + pixel
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const { step: s, data: d } = JSON.parse(raw);
        if (d) setData({ ...initialFormData, ...d });
        if (typeof s === "number") setStep(s);
      }
    } catch {}
    fbq("track", "PageView");
  }, []);

  // Persist progress
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, data }));
    } catch {}
  }, [step, data]);

  // Scroll top + focus on step change
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const el = document.querySelector<HTMLElement>(
        "[data-autofocus] input, [data-autofocus] textarea, [data-autofocus] button",
      );
      el?.focus();
    }, 250);
  }, [step]);

  const set = <K extends keyof AulaFormData>(k: K, v: AulaFormData[K]) =>
    setData((p) => ({ ...p, [k]: v }));

  const filho = data.nome_filho || "seu filho";

  const step1Valid =
    data.idade_filho &&
    data.genero_filho &&
    data.nome_mae.trim().length >= 2 &&
    data.nome_filho.trim().length >= 2;

  const step2Valid =
    data.habilidades_atuais.length > 0 &&
    data.tempo_percebe &&
    data.ja_fez_avaliacao &&
    data.maior_angustia &&
    data.exposicao_telas;

  const step3Valid =
    data.desejo_principal &&
    data.dias_disponiveis.length > 0 &&
    data.horario_pref &&
    data.plataforma_pref &&
    data.whatsapp.replace(/\D/g, "").length >= 10;

  const submit = async () => {
    setLoading(true);
    setError("");
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const payload = {
        ...data,
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        session_id:
          (window.crypto as any)?.randomUUID?.() || String(Date.now()),
        user_agent: navigator.userAgent,
      };

      const { data: inserted, error: insErr } = await supabase
        .from("form_comunidade_aula")
        .insert(payload as any)
        .select("id, lead_score")
        .single();

      if (insErr) throw insErr;

      fbq("track", "Lead", {
        value: (inserted as any)?.lead_score || 0,
        currency: "BRL",
      });

      try {
        await fetch(N8N_WEBHOOK_AULA, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body: JSON.stringify({ id: (inserted as any)?.id, ...payload }),
        });
      } catch {}

      localStorage.removeItem(STORAGE_KEY);
      navigate("/aula-ao-vivo/sucesso", {
        state: { nomeMae: data.nome_mae },
      });
    } catch (e: any) {
      console.error(e);
      setError("Ops, manda de novo? 💛");
      setLoading(false);
    }
  };

  const angustiaOptions = useMemo(
    () => ANGUSTIAS.map((a) => a.replace("[nomeFilho]", filho)),
    [filho],
  );

  return (
    <div className="min-h-screen bg-[#FFE5EC]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
      />
      <Header step={step} />
      <div ref={topRef} />
      <main className="max-w-2xl mx-auto px-4 py-8 pb-24">
        {step === 0 && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-300" data-autofocus>
            <h1 className="text-[32px] md:text-5xl font-extrabold text-[#4A1B2A] leading-tight">
              Olá, mãe! Em 3 minutinhos eu preparo uma aula sob medida pro seu filho 💛
            </h1>
            <p className="mt-4 text-lg text-[#3A3540]">
              Quanto mais real você for nas respostas, mais útil a aula vai ser pra você.
            </p>
            <div className="mt-8">
              <CTAButton onClick={() => { setStep(1); fbq("track","ViewContent"); }}>
                COMEÇAR ✨
              </CTAButton>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-200">
            <p className="text-[#FF6B35] font-semibold">Vamos te conhecer rapidinho 💛</p>

            <Field label="Quantos anos tem seu filho(a)?" required>
              <RadioCards options={IDADES} value={data.idade_filho} onChange={(v) => set("idade_filho", v)} cols={3} />
            </Field>

            <Field label="Seu filho é menino ou menina?" required>
              <RadioCards
                options={["👦 Menino", "👧 Menina"]}
                value={data.genero_filho}
                onChange={(v) => set("genero_filho", v)}
                cols={2}
              />
            </Field>

            <Field label="Como você se chama?" required>
              <div data-autofocus>
                <input
                  type="text"
                  autoCapitalize="words"
                  placeholder="Pode ser só o primeiro nome :)"
                  value={data.nome_mae}
                  onChange={(e) => set("nome_mae", e.target.value)}
                  className="w-full rounded-xl border-2 border-[#FFE5EC] focus:border-[#FF8FA3] outline-none px-4 py-3 text-[#4A1B2A] bg-white"
                />
              </div>
            </Field>

            <Field label="E o nome do(a) pequeno(a)?" required>
              <input
                type="text"
                autoCapitalize="words"
                placeholder="Vou usar pra te chamar pelo nome dele(a) na aula"
                value={data.nome_filho}
                onChange={(e) => set("nome_filho", e.target.value)}
                className="w-full rounded-xl border-2 border-[#FFE5EC] focus:border-[#FF8FA3] outline-none px-4 py-3 text-[#4A1B2A] bg-white"
              />
            </Field>

            <Field label="Em uma palavra, como você descreve o momento que vive com a fala do seu filho?">
              <input
                type="text"
                maxLength={30}
                placeholder="ansiedade, esperança, medo, pressa..."
                value={data.palavra_momento}
                onChange={(e) => set("palavra_momento", e.target.value)}
                className="w-full rounded-xl border-2 border-[#FFE5EC] focus:border-[#FF8FA3] outline-none px-4 py-3 text-[#4A1B2A] bg-white"
              />
              <button
                type="button"
                onClick={() => set("palavra_momento", "")}
                className="text-xs text-[#3A3540]/60 underline mt-1"
              >
                Pular
              </button>
            </Field>

            {!step1Valid && (
              <p className="text-sm text-[#3A3540]/70">Faltou só isso e a gente segue 😉</p>
            )}
            <CTAButton
              disabled={!step1Valid}
              onClick={() => {
                fbq("track", "InitiateCheckout");
                setStep(2);
              }}
            >
              CONTINUAR →
            </CTAButton>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-200">
            <p className="text-[#FF6B35] font-semibold">
              Essas próximas perguntas vão direcionar 100% o conteúdo da aula. Quanto mais real, melhor pra você.
            </p>

            <Field label={`O que ${filho} consegue fazer hoje? (Pode marcar várias)`} required>
              <CheckboxCards
                options={HABILIDADES}
                value={data.habilidades_atuais}
                onChange={(v) => set("habilidades_atuais", v)}
              />
            </Field>

            <Field label='Há quanto tempo você percebe que algo está "diferente"?' required>
              <RadioCards options={TEMPO_PERCEBE} value={data.tempo_percebe} onChange={(v) => set("tempo_percebe", v)} />
            </Field>

            <Field label={`${filho} já passou por avaliação fonoaudiológica?`} required>
              <RadioCards options={JA_AVALIACAO} value={data.ja_fez_avaliacao} onChange={(v) => set("ja_fez_avaliacao", v)} />
            </Field>

            <Field label="O que mais te angustia hoje? (escolha UMA)" required hint="Pode ser sincera. Quanto mais real, mais a aula vai te ajudar.">
              <RadioCards
                options={angustiaOptions}
                value={data.maior_angustia}
                onChange={(v) => set("maior_angustia", v)}
              />
            </Field>

            <Field label="Quando você tenta brincar/interagir pra estimular a fala, o que acontece?">
              <RadioCards
                options={REACAO_INTERACAO}
                value={data.reacao_interacao}
                onChange={(v) => set("reacao_interacao", v)}
              />
            </Field>

            <div className="rounded-2xl bg-white p-4 border-2 border-[#FF8FA3]/30">
              <p className="text-sm text-[#FF6B35] font-semibold mb-3">
                💛 Aqui é zona livre de julgamento — só preciso entender o contexto pra te ajudar melhor.
              </p>
              <Field label="Como é a rotina de exposição a telas hoje?" required>
                <RadioCards
                  options={EXPOSICAO_TELAS}
                  value={data.exposicao_telas}
                  onChange={(v) => set("exposicao_telas", v)}
                />
              </Field>
            </div>

            <Field label="Você já tentou alguma coisa pra estimular a fala? O quê?">
              <textarea
                maxLength={200}
                rows={3}
                placeholder="flashcards, vídeos no YouTube, levou no fono, comprou livro..."
                value={data.ja_tentou}
                onChange={(e) => set("ja_tentou", e.target.value)}
                className="w-full rounded-xl border-2 border-[#FFE5EC] focus:border-[#FF8FA3] outline-none px-4 py-3 text-[#4A1B2A] bg-white"
              />
            </Field>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-4 rounded-2xl bg-white border-2 border-[#FFE5EC] text-[#4A1B2A] font-semibold"
              >
                ← Voltar
              </button>
              <div className="flex-1">
                <CTAButton
                  disabled={!step2Valid}
                  onClick={() => {
                    fbq("track", "AddPaymentInfo");
                    setStep(3);
                  }}
                >
                  QUASE LÁ →
                </CTAButton>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-200">
            <p className="text-[#FF6B35] font-semibold">
              Última parte! Vou usar essas infos pra escolher o melhor dia e te mandar a aula.
            </p>

            <Field label="Se você pudesse resolver UMA coisa com a aula, qual seria?" required>
              <RadioCards options={DESEJO_PRINCIPAL} value={data.desejo_principal} onChange={(v) => set("desejo_principal", v)} />
            </Field>

            <Field label="Qual o melhor dia da semana pra assistir uma aula ao vivo? (Pode marcar mais de um)" required>
              <Pills options={DIAS} value={data.dias_disponiveis} onChange={(v) => set("dias_disponiveis", v)} />
            </Field>

            <Field label="E o melhor horário?" required>
              <RadioCards options={HORARIOS} value={data.horario_pref} onChange={(v) => set("horario_pref", v)} />
            </Field>

            <Field label="Onde você prefere assistir?" required>
              <RadioCards options={PLATAFORMAS} value={data.plataforma_pref} onChange={(v) => set("plataforma_pref", v)} />
            </Field>

            <Field label="O que faria você priorizar essa aula no seu dia?">
              <RadioCards options={GANCHOS} value={data.gancho_priorizacao} onChange={(v) => set("gancho_priorizacao", v)} />
            </Field>

            <Field label="Seu WhatsApp com DDD" required hint="Só pra te avisar 30 min antes da aula. Sem spam 💛">
              <input
                type="tel"
                inputMode="tel"
                placeholder="(11) 99999-9999"
                value={data.whatsapp}
                onChange={(e) => set("whatsapp", maskPhone(e.target.value))}
                className="w-full rounded-xl border-2 border-[#FFE5EC] focus:border-[#FF8FA3] outline-none px-4 py-3 text-[#4A1B2A] bg-white"
              />
            </Field>

            <Field label="E qual seu e-mail?" hint="Caso eu perca seu WhatsApp, te aviso por aqui também.">
              <input
                type="email"
                inputMode="email"
                placeholder="voce@email.com"
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
                className="w-full rounded-xl border-2 border-[#FFE5EC] focus:border-[#FF8FA3] outline-none px-4 py-3 text-[#4A1B2A] bg-white"
              />
            </Field>

            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-4 rounded-2xl bg-white border-2 border-[#FFE5EC] text-[#4A1B2A] font-semibold"
              >
                ← Voltar
              </button>
              <div className="flex-1">
                <CTAButton disabled={!step3Valid} loading={loading} onClick={submit}>
                  GARANTIR MINHA VAGA 💛
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
