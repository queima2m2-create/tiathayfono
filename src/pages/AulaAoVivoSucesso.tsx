import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import confetti from "canvas-confetti";

export default function AulaAoVivoSucesso() {
  const location = useLocation();
  const nomeMae = (location.state as any)?.nomeMae || "mãe";

  useEffect(() => {
    const end = Date.now() + 2000;
    const tick = () => {
      confetti({
        particleCount: 4,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() * 0.5 },
        colors: ["#FF8FA3", "#FF6B35", "#FFE5EC", "#FFD700"],
      });
      if (Date.now() < end) requestAnimationFrame(tick);
    };
    tick();
  }, []);

  return (
    <div
      className="min-h-screen bg-[#FFE5EC] flex items-center justify-center px-4"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
      />
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl shadow-[#FF8FA3]/20 p-8 text-center">
        <h1 className="text-4xl font-extrabold text-[#4A1B2A]">
          Pronto, {nomeMae}! 🎉
        </h1>
        <p className="mt-4 text-lg text-[#3A3540]">
          Sua vaga tá garantida. Em instantes você recebe a confirmação no WhatsApp 💛
        </p>
        <p className="mt-6 text-sm text-[#3A3540]/70">
          Se não chegar em 5 minutos, manda "oi" pra (31) 93618-5541
        </p>
        <a
          href="https://instagram.com/tiathaynara"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 px-6 py-3 rounded-full border-2 border-[#FF8FA3] text-[#4A1B2A] font-semibold hover:bg-[#FFE5EC] transition-colors"
        >
          VOLTAR AO INSTAGRAM
        </a>
      </div>
    </div>
  );
}
