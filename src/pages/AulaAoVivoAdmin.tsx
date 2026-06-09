import { useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import Papa from "papaparse";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ANGUSTIAS, DIAS, HORARIOS } from "@/lib/aulaConfig";

type Row = {
  id: string;
  created_at: string;
  idade_filho: string;
  genero_filho: string;
  nome_mae: string;
  nome_filho: string;
  palavra_momento: string | null;
  habilidades_atuais: string[];
  tempo_percebe: string;
  ja_fez_avaliacao: string;
  maior_angustia: string;
  reacao_interacao: string | null;
  exposicao_telas: string;
  ja_tentou: string | null;
  desejo_principal: string;
  dias_disponiveis: string[];
  horario_pref: string;
  plataforma_pref: string;
  gancho_priorizacao: string | null;
  whatsapp: string;
  email: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  lead_score: number;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const send = async () => {
    setLoading(true);
    setErr("");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin + "/aula-ao-vivo/admin" },
    });
    setLoading(false);
    if (error) setErr(error.message);
    else setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FFE5EC] flex items-center justify-center px-4" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl shadow-[#FF8FA3]/20">
        <h1 className="text-2xl font-extrabold text-[#4A1B2A] text-center">Painel Tia Thay 💛</h1>
        {sent ? (
          <p className="mt-6 text-center text-[#3A3540]">
            Te enviei um link mágico no e-mail. Abre lá pra entrar 💌
          </p>
        ) : (
          <>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-6 rounded-xl border-2 border-[#FFE5EC] focus:border-[#FF8FA3] outline-none px-4 py-3"
            />
            {err && <p className="text-sm text-red-600 mt-2">{err}</p>}
            <button
              disabled={loading || !email}
              onClick={send}
              className="w-full mt-4 bg-[#FF6B35] text-white font-bold py-3 rounded-xl disabled:opacity-40"
            >
              {loading ? "Enviando..." : "ENTRAR COM MAGIC LINK"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const MetricCard = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm shadow-[#FF8FA3]/20">
    <p className="text-xs uppercase tracking-wide text-[#3A3540]/70">{label}</p>
    <p className="mt-2 text-3xl font-extrabold text-[#4A1B2A]">{value}</p>
  </div>
);

const WordCloud = ({ words }: { words: { text: string; count: number }[] }) => {
  if (!words.length) return <p className="text-sm text-[#3A3540]/60">Sem palavras ainda.</p>;
  const max = Math.max(...words.map((w) => w.count));
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center p-4">
      {words.map((w) => {
        const size = 14 + (w.count / max) * 36;
        const opacity = 0.4 + (w.count / max) * 0.6;
        return (
          <span
            key={w.text}
            style={{
              fontSize: `${size}px`,
              color: "#FF6B35",
              opacity,
              fontWeight: 700,
            }}
          >
            {w.text}
          </span>
        );
      })}
    </div>
  );
};

const Heatmap = ({ rows }: { rows: Row[] }) => {
  const grid: Record<string, Record<string, number>> = {};
  let max = 0;
  HORARIOS.forEach((h) => {
    grid[h] = {};
    DIAS.forEach((d) => (grid[h][d] = 0));
  });
  rows.forEach((r) => {
    if (!grid[r.horario_pref]) return;
    r.dias_disponiveis.forEach((d) => {
      if (grid[r.horario_pref][d] !== undefined) {
        grid[r.horario_pref][d]++;
        if (grid[r.horario_pref][d] > max) max = grid[r.horario_pref][d];
      }
    });
  });
  let bestCell = { d: "", h: "", v: 0 };
  HORARIOS.forEach((h) => DIAS.forEach((d) => {
    if (grid[h][d] > bestCell.v) bestCell = { d, h, v: grid[h][d] };
  }));

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left p-2 text-[#3A3540]/70 font-medium"></th>
            {DIAS.map((d) => (
              <th key={d} className="p-2 text-[#4A1B2A] font-bold text-center">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {HORARIOS.map((h) => (
            <tr key={h}>
              <td className="p-2 text-[#4A1B2A] font-semibold">{h.split(" ")[0]}</td>
              {DIAS.map((d) => {
                const v = grid[h][d];
                const intensity = max ? v / max : 0;
                const isBest = bestCell.d === d && bestCell.h === h && v > 0;
                return (
                  <td key={d} className="p-1">
                    <div
                      className="rounded-lg text-center py-2 text-xs font-bold relative"
                      style={{
                        background: `rgba(255,107,53,${0.1 + intensity * 0.8})`,
                        color: intensity > 0.5 ? "white" : "#4A1B2A",
                      }}
                    >
                      {v}
                      {isBest && <span className="absolute -top-1 -right-1 text-xs">🏆</span>}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Dashboard = ({ rows }: { rows: Row[] }) => {
  const total = rows.length;
  const hoje = rows.filter((r) => Date.now() - new Date(r.created_at).getTime() < 86400000).length;
  const avgScore = total ? Math.round(rows.reduce((a, r) => a + (r.lead_score || 0), 0) / total) : 0;

  const angustiaCount = ANGUSTIAS.reduce<Record<string, number>>((acc, a) => {
    acc[a] = 0;
    return acc;
  }, {});
  rows.forEach((r) => {
    const normalized = ANGUSTIAS.find((a) => a.replace("[nomeFilho]", r.nome_filho) === r.maior_angustia) || r.maior_angustia;
    angustiaCount[normalized] = (angustiaCount[normalized] || 0) + 1;
  });
  const angustiaData = Object.entries(angustiaCount)
    .map(([name, value]) => ({ name: name.length > 38 ? name.slice(0, 38) + "…" : name, value, pct: total ? Math.round((value / total) * 100) : 0 }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 7);

  const words = useMemo(() => {
    const map: Record<string, number> = {};
    rows.forEach((r) => {
      if (r.palavra_momento) {
        const w = r.palavra_momento.trim().toLowerCase();
        if (w) map[w] = (map[w] || 0) + 1;
      }
    });
    return Object.entries(map).map(([text, count]) => ({ text, count })).sort((a, b) => b.count - a.count).slice(0, 30);
  }, [rows]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="Total de respostas" value={total} />
        <MetricCard label="Hoje (24h)" value={hoje} />
        <MetricCard label="Lead Score médio" value={avgScore} />
        <MetricCard label="Concluídas" value={total} />
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm shadow-[#FF8FA3]/20">
        <h3 className="font-bold text-[#4A1B2A] mb-4">Maiores angústias (top 7)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={angustiaData} layout="vertical" margin={{ left: 100 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#FFE5EC" />
            <XAxis type="number" stroke="#4A1B2A" />
            <YAxis dataKey="name" type="category" stroke="#4A1B2A" width={180} fontSize={11} />
            <Tooltip formatter={(v: any, _n, p: any) => [`${v} (${p.payload.pct}%)`, "respostas"]} />
            <Bar dataKey="value" fill="#FF6B35" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm shadow-[#FF8FA3]/20">
        <h3 className="font-bold text-[#4A1B2A] mb-4">Palavra do momento</h3>
        <WordCloud words={words} />
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm shadow-[#FF8FA3]/20">
        <h3 className="font-bold text-[#4A1B2A] mb-4">Heatmap: dia × horário</h3>
        <Heatmap rows={rows} />
      </div>
    </div>
  );
};

const Respostas = ({ rows }: { rows: Row[] }) => {
  const [q, setQ] = useState("");
  const [idade, setIdade] = useState("");
  const [angustia, setAngustia] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [scoreFilter, setScoreFilter] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = rows.filter((r) => {
    if (q && !`${r.nome_mae} ${r.nome_filho}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (idade && r.idade_filho !== idade) return false;
    if (angustia && r.maior_angustia !== angustia) return false;
    if (avaliacao && r.ja_fez_avaliacao !== avaliacao) return false;
    if (scoreFilter === "alto" && r.lead_score < 60) return false;
    if (scoreFilter === "medio" && (r.lead_score < 40 || r.lead_score >= 60)) return false;
    if (scoreFilter === "baixo" && r.lead_score >= 40) return false;
    return true;
  });

  const exportCsv = () => {
    const csv = Papa.unparse(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `respostas-aula-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const idades = Array.from(new Set(rows.map((r) => r.idade_filho)));
  const angustias = Array.from(new Set(rows.map((r) => r.maior_angustia)));
  const avals = Array.from(new Set(rows.map((r) => r.ja_fez_avaliacao)));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 items-center">
        <input
          placeholder="Buscar nome..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="rounded-lg border-2 border-[#FFE5EC] px-3 py-2 text-sm"
        />
        <select value={idade} onChange={(e) => setIdade(e.target.value)} className="rounded-lg border-2 border-[#FFE5EC] px-2 py-2 text-sm">
          <option value="">Idade (todas)</option>
          {idades.map((i) => <option key={i}>{i}</option>)}
        </select>
        <select value={angustia} onChange={(e) => setAngustia(e.target.value)} className="rounded-lg border-2 border-[#FFE5EC] px-2 py-2 text-sm max-w-[200px]">
          <option value="">Angústia (todas)</option>
          {angustias.map((i) => <option key={i}>{i.slice(0, 40)}</option>)}
        </select>
        <select value={avaliacao} onChange={(e) => setAvaliacao(e.target.value)} className="rounded-lg border-2 border-[#FFE5EC] px-2 py-2 text-sm">
          <option value="">Avaliação fono (todas)</option>
          {avals.map((i) => <option key={i}>{i}</option>)}
        </select>
        <select value={scoreFilter} onChange={(e) => setScoreFilter(e.target.value)} className="rounded-lg border-2 border-[#FFE5EC] px-2 py-2 text-sm">
          <option value="">Score (todos)</option>
          <option value="alto">Alto (60+)</option>
          <option value="medio">Médio (40-59)</option>
          <option value="baixo">Baixo (&lt;40)</option>
        </select>
        <button onClick={exportCsv} className="ml-auto bg-[#FF6B35] text-white font-bold px-4 py-2 rounded-lg text-sm">
          EXPORTAR CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm shadow-[#FF8FA3]/20">
        <table className="w-full text-sm">
          <thead className="bg-[#FFE5EC]">
            <tr className="text-left text-[#4A1B2A]">
              <th className="p-3">Data</th>
              <th className="p-3">Nome</th>
              <th className="p-3">Filho</th>
              <th className="p-3">Idade</th>
              <th className="p-3">Angústia</th>
              <th className="p-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <>
                <tr
                  key={r.id}
                  onClick={() => setExpanded(expanded === r.id ? null : r.id)}
                  className="border-t border-[#FFE5EC] cursor-pointer hover:bg-[#FFE5EC]/30"
                >
                  <td className="p-3 text-xs">{new Date(r.created_at).toLocaleString("pt-BR")}</td>
                  <td className="p-3 font-semibold">{r.nome_mae}</td>
                  <td className="p-3">{r.nome_filho}</td>
                  <td className="p-3">{r.idade_filho}</td>
                  <td className="p-3 text-xs">{r.maior_angustia.slice(0, 40)}</td>
                  <td className="p-3">
                    <span
                      className="px-2 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: r.lead_score >= 60 ? "#FF6B35" : r.lead_score >= 40 ? "#FF8FA3" : "#3A3540" }}
                    >
                      {r.lead_score}
                    </span>
                  </td>
                </tr>
                {expanded === r.id && (
                  <tr className="border-t border-[#FFE5EC] bg-[#FFE5EC]/20">
                    <td colSpan={6} className="p-4">
                      <div className="grid md:grid-cols-2 gap-3 text-xs">
                        {Object.entries(r).map(([k, v]) => (
                          <div key={k}>
                            <span className="font-bold text-[#4A1B2A]">{k}:</span>{" "}
                            <span className="text-[#3A3540]">{Array.isArray(v) ? v.join(", ") : String(v ?? "—")}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
            {!filtered.length && (
              <tr><td colSpan={6} className="p-8 text-center text-[#3A3540]/60">Nenhuma resposta encontrada.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Insights = ({ rows }: { rows: Row[] }) => {
  const perfis: Record<string, number> = {};
  rows.forEach((r) => {
    const k = `${r.idade_filho} • ${r.habilidades_atuais[0] || "—"} • ${r.maior_angustia.slice(0, 30)}`;
    perfis[k] = (perfis[k] || 0) + 1;
  });
  const top3Perfis = Object.entries(perfis).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const quentes = rows.filter((r) => r.lead_score > 60);
  const critico = rows.filter((r) => /Boa parte do dia|Honestamente/.test(r.exposicao_telas) && r.ja_fez_avaliacao === "Ainda não");
  const aspirCount: Record<string, number> = {};
  rows.forEach((r) => { aspirCount[r.desejo_principal] = (aspirCount[r.desejo_principal] || 0) + 1; });
  const topAspir = Object.entries(aspirCount).sort((a, b) => b[1] - a[1])[0];
  const tentativas: Record<string, number> = {};
  rows.forEach((r) => {
    if (!r.ja_tentou) return;
    r.ja_tentou.toLowerCase().split(/[\s,;.]+/).forEach((w) => {
      if (w.length > 4) tentativas[w] = (tentativas[w] || 0) + 1;
    });
  });
  const topTent = Object.entries(tentativas).sort((a, b) => b[1] - a[1]).slice(0, 8);

  const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm shadow-[#FF8FA3]/20">
      <h3 className="font-bold text-[#4A1B2A] mb-3">{title}</h3>
      <div className="text-sm text-[#3A3540] space-y-2">{children}</div>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card title="🎯 Top 3 perfis">
        {top3Perfis.length ? top3Perfis.map(([k, v]) => (
          <p key={k}><b>{v}×</b> {k}</p>
        )) : <p>Sem dados.</p>}
      </Card>
      <Card title="🔥 Lead score quente (>60)">
        <p className="text-3xl font-extrabold text-[#FF6B35]">{quentes.length}</p>
        <p className="text-xs">pessoas com alto potencial</p>
      </Card>
      <Card title="📺 Tela alta + sem avaliação (Plano 30 Dias)">
        <p className="text-3xl font-extrabold text-[#FF6B35]">{critico.length}</p>
        <p className="text-xs">segmento crítico ideal pro Plano 30 Dias</p>
      </Card>
      <Card title="💛 Aspiração mais comum">
        {topAspir ? <p><b>{topAspir[1]}×</b> "{topAspir[0]}"</p> : <p>Sem dados.</p>}
      </Card>
      <Card title="🧪 Tentativas frustradas (palavras-chave)">
        {topTent.length ? (
          <div className="flex flex-wrap gap-2">
            {topTent.map(([w, c]) => (
              <span key={w} className="px-2 py-1 rounded-full bg-[#FFE5EC] text-[#4A1B2A] text-xs">
                {w} ({c})
              </span>
            ))}
          </div>
        ) : <p>Sem dados.</p>}
      </Card>
    </div>
  );
};

export default function AulaAoVivoAdmin() {
  const [session, setSession] = useState<Session | null>(null);
  const [tab, setTab] = useState<"dashboard" | "respostas" | "insights">("dashboard");
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return;
    setLoading(true);
    supabase
      .from("form_comunidade_aula")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setRows((data as any) || []);
        setLoading(false);
      });
  }, [session]);

  if (!session) return <Login />;

  return (
    <div className="min-h-screen bg-[#FFE5EC] flex" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
      <aside className="w-56 bg-white border-r border-[#FFE5EC] hidden md:flex flex-col p-4">
        <div className="font-extrabold text-[#4A1B2A] mb-6">💛 Tia Thay</div>
        {[
          { k: "dashboard", l: "📊 Dashboard" },
          { k: "respostas", l: "📋 Respostas" },
          { k: "insights", l: "💡 Insights" },
        ].map((it) => (
          <button
            key={it.k}
            onClick={() => setTab(it.k as any)}
            className={`text-left px-3 py-2 rounded-lg mb-1 font-medium ${
              tab === it.k ? "bg-[#FFE5EC] text-[#FF6B35]" : "text-[#4A1B2A] hover:bg-[#FFE5EC]/50"
            }`}
          >
            {it.l}
          </button>
        ))}
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-[#FFE5EC] px-4 py-3 flex items-center justify-between">
          <div className="md:hidden flex gap-2">
            {["dashboard", "respostas", "insights"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t as any)}
                className={`px-2 py-1 text-xs rounded ${tab === t ? "bg-[#FFE5EC] text-[#FF6B35] font-bold" : "text-[#4A1B2A]"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="h-8 w-8 rounded-full bg-[#FF8FA3] text-white flex items-center justify-center font-bold">
              {session.user.email?.[0]?.toUpperCase()}
            </div>
            <span className="text-sm text-[#4A1B2A] hidden sm:inline">{session.user.email}</span>
            <button
              onClick={() => supabase.auth.signOut()}
              className="text-sm text-[#FF6B35] font-semibold"
            >
              Sair
            </button>
          </div>
        </header>

        <main className="p-4 md:p-6 overflow-auto">
          {loading ? (
            <p className="text-[#4A1B2A]">Carregando...</p>
          ) : tab === "dashboard" ? (
            <Dashboard rows={rows} />
          ) : tab === "respostas" ? (
            <Respostas rows={rows} />
          ) : (
            <Insights rows={rows} />
          )}
        </main>
      </div>
    </div>
  );
}
