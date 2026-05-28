import { useEffect, useState } from "react";
import { loadQuizLatamAnswers } from "@/lib/quizStateLatam";

const StickyLeadBarLatam = ({ onClick }: { onClick: () => void }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const sent = localStorage.getItem("tiathay_quiz_latam_lead_sent");
    const purchased = localStorage.getItem("tiathay_quiz_latam_purchase_clicked");
    const closed = parseInt(localStorage.getItem("tiathay_quiz_latam_sticky_closed") || "0");
    if (sent || purchased || closed >= 3) return;
    const onScroll = () => {
      if (window.scrollY > 300) setShow(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-[#FF6B35] text-white px-3 py-3 flex items-center gap-2 shadow-2xl">
      <button onClick={onClick} className="flex-1 text-left font-bold text-[0.9rem]">
        💬 ¿Quieres el diagnóstico de {(loadQuizLatamAnswers().hijo_nombre || "tu hijo").trim()} en WhatsApp? Toca aquí
      </button>
      <button
        onClick={() => {
          const n = parseInt(localStorage.getItem("tiathay_quiz_latam_sticky_closed") || "0") + 1;
          localStorage.setItem("tiathay_quiz_latam_sticky_closed", String(n));
          setShow(false);
        }}
        aria-label="Cerrar"
        className="text-white/80 text-xl px-2"
      >
        ×
      </button>
    </div>
  );
};

export default StickyLeadBarLatam;
