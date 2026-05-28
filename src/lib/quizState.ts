export type QuizAnswers = {
  filho_idade?: string;
  filho_nome?: string;
  filho_estagio?: string;
  filho_frustracao?: string;
  mae_emocao?: string;
  mae_medo?: string;
  filho_tela?: string;
  mae_tentativas?: string[];
  filho_avaliacao?: string;
  mae_tempo?: string;
  mae_aspiracao?: string;
  mae_commitment?: string;
  // legacy field kept for backwards compat
  filho_comunicacao?: string;
  completed_at?: string;
};

const KEY = "tiathay_quiz_answers";

export const saveQuizAnswers = (a: QuizAnswers) => {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(a));
  } catch {}
};

export const loadQuizAnswers = (): QuizAnswers => {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export type Estagio = "INICIAL" | "CRÍTICO" | "AVANÇADO DE RISCO" | "URGENTE" | "AVANÇADO";

export const calcularEstagio = (idade?: string, estagio?: string): Estagio => {
  if (estagio === "fala bem mas queria mais") return "AVANÇADO";
  if (idade === "Mais de 5 anos" && estagio && estagio !== "fala bem mas queria mais")
    return "URGENTE";
  if (idade === "1 a 2 anos") return "INICIAL";
  if (idade === "2 a 3 anos" && estagio === "não fala") return "INICIAL";
  if (idade === "2 a 3 anos" && estagio === "poucas palavras") return "CRÍTICO";
  if (idade === "3 a 4 anos" && (estagio === "não fala" || estagio === "poucas palavras"))
    return "CRÍTICO";
  if (idade === "3 a 4 anos" && (estagio === "difícil entender" || estagio === "troca letras"))
    return "AVANÇADO DE RISCO";
  if (idade === "4 a 5 anos" && estagio !== "fala bem mas queria mais")
    return "AVANÇADO DE RISCO";
  return "CRÍTICO";
};
