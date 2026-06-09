
CREATE TABLE IF NOT EXISTS public.form_comunidade_aula (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  idade_filho text NOT NULL,
  genero_filho text NOT NULL,
  nome_mae text NOT NULL,
  nome_filho text NOT NULL,
  palavra_momento text,
  habilidades_atuais text[] NOT NULL,
  tempo_percebe text NOT NULL,
  ja_fez_avaliacao text NOT NULL,
  maior_angustia text NOT NULL,
  reacao_interacao text,
  exposicao_telas text NOT NULL,
  ja_tentou text,
  desejo_principal text NOT NULL,
  dias_disponiveis text[] NOT NULL,
  horario_pref text NOT NULL,
  plataforma_pref text NOT NULL,
  gancho_priorizacao text,
  whatsapp text NOT NULL,
  email text,
  fbp text,
  fbc text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  session_id text,
  user_agent text,
  lead_score int GENERATED ALWAYS AS (
    (CASE WHEN ja_fez_avaliacao = 'Ainda não' THEN 30 ELSE 10 END) +
    (CASE WHEN tempo_percebe IN ('Mais de 1 ano', 'Sempre desconfiei desde bebê') THEN 25 ELSE 10 END) +
    (CASE WHEN array_length(habilidades_atuais, 1) <= 2 THEN 20 ELSE 5 END)
  ) STORED
);

GRANT INSERT ON public.form_comunidade_aula TO anon;
GRANT INSERT, SELECT ON public.form_comunidade_aula TO authenticated;
GRANT ALL ON public.form_comunidade_aula TO service_role;

ALTER TABLE public.form_comunidade_aula ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone_insert" ON public.form_comunidade_aula
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "admin_read" ON public.form_comunidade_aula
  FOR SELECT TO authenticated
  USING (true);
