export type QuizLatamAnswers = {
  hijo_edad?: string;
  hijo_nombre?: string;
  hijo_etapa?: string;
  hijo_reaccion?: string;
  mama_emocion?: string;
  mama_miedo?: string;
  hijo_pantalla?: string;
  mama_intentos?: string[];
  hijo_logopeda?: string;
  mama_tiempo?: string;
  mama_aspiracion?: string;
  mama_compromiso?: string;
  completed_at?: string;
};

const KEY = "tiathay_quiz_latam_answers";

export const saveQuizLatamAnswers = (a: QuizLatamAnswers) => {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(a));
  } catch {}
};

export const loadQuizLatamAnswers = (): QuizLatamAnswers => {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export type EtapaLatam =
  | "INICIAL"
  | "CRÍTICA"
  | "AVANZADA DE RIESGO"
  | "URGENTE"
  | "AVANZADA";

export const calcularEtapaLatam = (edad?: string, etapa?: string): EtapaLatam => {
  if (etapa === "habla bien") return "AVANZADA";
  if (edad === "Más de 5 años" && etapa && etapa !== "habla bien") return "URGENTE";
  if (edad === "1 a 2 años") return "INICIAL";
  if (edad === "2 a 3 años" && (etapa === "no dice palabras" || etapa === "poquitas palabras"))
    return "INICIAL";
  if (edad === "2 a 3 años" && (etapa === "difícil entender" || etapa === "cambia letras"))
    return "CRÍTICA";
  if (edad === "3 a 4 años" && (etapa === "no dice palabras" || etapa === "poquitas palabras"))
    return "CRÍTICA";
  if (edad === "3 a 4 años" && (etapa === "difícil entender" || etapa === "cambia letras"))
    return "AVANZADA DE RIESGO";
  if (edad === "4 a 5 años" && etapa === "no dice palabras") return "URGENTE";
  if (edad === "4 a 5 años" && etapa === "poquitas palabras") return "URGENTE";
  if (edad === "4 a 5 años" && etapa !== "habla bien") return "AVANZADA DE RIESGO";
  return "CRÍTICA";
};
