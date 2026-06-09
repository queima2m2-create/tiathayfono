export const N8N_WEBHOOK_AULA =
  "https://n8n.mq2m2.com/webhook/form-comunidade-tiathay";

export const COLORS = {
  primary: "#FF8FA3",
  bg: "#FFE5EC",
  text: "#4A1B2A",
  cta: "#FF6B35",
  gray: "#3A3540",
};

export const IDADES = [
  "Menos de 1 ano",
  "1 ano",
  "2 anos",
  "3 anos",
  "4 anos",
  "5 anos ou mais",
];

export const HABILIDADES = [
  "Balbucia sons (mamã, papá, dadá)",
  "Fala palavras isoladas (água, mamãe, papai)",
  "Junta 2 palavras (quer água, dá bola)",
  "Forma frases curtas (eu quero comer)",
  "Fala muito, mas ninguém entende",
  "Quase não emite som",
  "Só aponta e faz gesto",
];

export const TEMPO_PERCEBE = [
  "Faz menos de 3 meses",
  "Entre 3 e 6 meses",
  "Entre 6 meses e 1 ano",
  "Mais de 1 ano",
  "Sempre desconfiei desde bebê",
];

export const JA_AVALIACAO = [
  "Ainda não",
  "Sim, e está em terapia",
  "Sim, mas paramos",
  "Estou tentando conseguir uma vaga",
];

export const ANGUSTIAS = [
  "Comparar com outras crianças da mesma idade",
  "Não saber se é só 'questão de tempo' ou problema real",
  "Não saber o que fazer em casa pra ajudar",
  "Ouvir comentários de familiares ('vai falar quando quiser')",
  "Medo de [nomeFilho] sofrer bullying na escola",
  "Custo / falta de acesso a fonoaudiólogo",
  "Sentir que estou falhando como mãe",
];

export const REACAO_INTERACAO = [
  "Ele(a) se interessa e participa",
  "Ele(a) ignora ou foge da interação",
  "Eu não sei o que fazer / o que falar",
  "Não tenho tempo no dia a dia",
];

export const EXPOSICAO_TELAS = [
  "Pouco tempo, vídeos educativos em português",
  "Algumas horas, conteúdo variado",
  "Boa parte do dia, é o que acalma",
  "Honestamente, não sei medir",
];

export const DESEJO_PRINCIPAL = [
  "Saber exatamente o que falar com ele(a) no dia a dia",
  "Entender se é atraso ou desenvolvimento normal",
  "Ter um plano prático de 30 dias",
  "Parar de me sentir perdida e culpada",
  "Ouvir uma profissional confiável",
];

export const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export const HORARIOS = [
  "Manhã (após levar pra escola/creche)",
  "Hora do almoço (12h–13h30)",
  "Tarde durante a soneca",
  "Noite (após 20h, com ele(a) dormindo)",
  "Madrugada (depois das 22h)",
];

export const PLATAFORMAS = [
  "📱 WhatsApp (mais prático)",
  "📸 Instagram (já sigo a Tia Thay)",
  "📺 YouTube (assisto na TV)",
  "💻 Zoom (consigo interagir)",
  "✨ Tanto faz, vou onde for",
];

export const GANCHOS = [
  "Saber que vai ter material gratuito pra baixar",
  "Saber que a Tia Thay vai responder perguntas ao vivo",
  "Saber que tem desconto exclusivo no Guia",
  "Ter um lembrete bem em cima da hora",
];

export type AulaFormData = {
  idade_filho: string;
  genero_filho: string;
  nome_mae: string;
  nome_filho: string;
  palavra_momento: string;
  habilidades_atuais: string[];
  tempo_percebe: string;
  ja_fez_avaliacao: string;
  maior_angustia: string;
  reacao_interacao: string;
  exposicao_telas: string;
  ja_tentou: string;
  desejo_principal: string;
  dias_disponiveis: string[];
  horario_pref: string;
  plataforma_pref: string;
  gancho_priorizacao: string;
  whatsapp: string;
  email: string;
};

export const initialFormData: AulaFormData = {
  idade_filho: "",
  genero_filho: "",
  nome_mae: "",
  nome_filho: "",
  palavra_momento: "",
  habilidades_atuais: [],
  tempo_percebe: "",
  ja_fez_avaliacao: "",
  maior_angustia: "",
  reacao_interacao: "",
  exposicao_telas: "",
  ja_tentou: "",
  desejo_principal: "",
  dias_disponiveis: [],
  horario_pref: "",
  plataforma_pref: "",
  gancho_priorizacao: "",
  whatsapp: "",
  email: "",
};

export const STORAGE_KEY = "aula_ao_vivo_progress";
