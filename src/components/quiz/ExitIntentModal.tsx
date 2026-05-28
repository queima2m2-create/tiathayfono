import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LEAD_WEBHOOK } from "@/lib/quizConfig";
import { loadQuizAnswers } from "@/lib/quizState";

const CLOSED_KEY = "tiathay_quiz_modal_closed";
const SENT_KEY = "tiathay_quiz_lead_sent";
const PURCHASED_KEY = "tiathay_quiz_purchase_clicked";

const maskPhone = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const ExitIntentModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(t);
    }
  }, [done, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) return;
    setSending(true);
    try {
      const a = loadQuizAnswers();
      await fetch(LEAD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          whatsapp: "+55" + digits,
          ...a,
          timestamp: new Date().toISOString(),
          source: "quiz_br",
        }),
        keepalive: true,
      });
      const w = window as any;
      if (typeof w.fbq === "function") {
        w.fbq("track", "Lead", {
          content_name: "Lead Quiz BR",
          value: 67,
          currency: "BRL",
        });
      }
      localStorage.setItem(SENT_KEY, "1");
      setDone(true);
    } catch {
      setDone(true);
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    const n = parseInt(localStorage.getItem(CLOSED_KEY) || "0") + 1;
    localStorage.setItem(CLOSED_KEY, String(n));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 flex items-end md:items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-background rounded-2xl w-full max-w-[440px] p-6 md:p-8 shadow-2xl relative">
        <button
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute top-3 right-4 text-marrom-dark/60 text-2xl leading-none"
        >
          ×
        </button>
        {done ? (
          <div className="text-center py-6">
            <p className="text-[1.1rem] font-bold text-marrom-dark">
              ✅ Pronto! Vou te chamar no WhatsApp em alguns minutos.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-[1.4rem] md:text-[1.55rem] font-extrabold text-marrom-dark text-center leading-tight">
              ⏸️ Espera, mãe!
            </h3>
            <p className="text-[0.95rem] md:text-[1rem] text-marrom-dark/80 text-center mt-3 leading-snug">
              Quer receber esse diagnóstico do(a) {(loadQuizAnswers().filho_nome || "seu filho").trim()} + 1 dica em vídeo da Dra. Thaynara direto no seu WhatsApp?
            </p>
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
              <input
                type="tel"
                inputMode="numeric"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(maskPhone(e.target.value))}
                className="w-full h-12 px-4 rounded-xl border-2 border-marrom-dark/15 bg-white text-marrom-dark text-[1rem] focus:outline-none focus:border-[#FF6B35]"
                required
              />
              <Button
                type="submit"
                disabled={sending}
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold uppercase tracking-wide rounded-xl py-5 h-auto text-[0.9rem]"
              >
                {sending ? "Enviando..." : "QUERO RECEBER NO WHATSAPP →"}
              </Button>
              <p className="text-[0.75rem] text-marrom-dark/60 text-center">
                Sem spam. Você pode sair quando quiser.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export const useExitIntent = (enabled: boolean) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const closed = parseInt(localStorage.getItem(CLOSED_KEY) || "0");
    const sent = localStorage.getItem(SENT_KEY);
    const purchased = localStorage.getItem(PURCHASED_KEY);
    if (sent || purchased || closed >= 3) return;

    let lastY = window.scrollY;
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) setOpen(true);
    };
    const onScroll = () => {
      const y = window.scrollY;
      if (lastY - y > 80 && y < 400) setOpen(true);
      lastY = y;
    };
    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled]);

  return { open, setOpen };
};

export default ExitIntentModal;
