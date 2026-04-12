import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, CheckCircle2, Heart, Sparkles } from "lucide-react";
import { fbEvents } from "@/lib/fbConversions";

const V3 = () => {
  useEffect(() => {
    fbEvents.pageView();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rosa-light via-background to-bege2 flex flex-col items-center justify-center px-4 py-12">
      {/* Confetti-like decorative dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-10 left-[10%] w-3 h-3 rounded-full bg-rosa/30 animate-bounce" style={{ animationDelay: "0.2s" }} />
        <div className="absolute top-20 right-[15%] w-2 h-2 rounded-full bg-verde/30 animate-bounce" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-32 left-[25%] w-2 h-2 rounded-full bg-dourado/40 animate-bounce" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-16 right-[30%] w-3 h-3 rounded-full bg-rosa/20 animate-bounce" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center space-y-8">
        {/* Success icon */}
        <div className="mx-auto w-20 h-20 rounded-full bg-verde/15 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-verde" />
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Parabéns, mamãe! <Heart className="inline w-6 h-6 text-rosa fill-rosa" />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Seja muito bem-vinda!
          </p>
        </div>

        {/* Card */}
        <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8 space-y-5">
          <div className="flex items-center justify-center gap-2 text-rosa">
            <Mail className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wide">Verifique seu e-mail</span>
          </div>

          <p className="text-foreground leading-relaxed">
            Todo o seu material já foi enviado para o <strong>e-mail cadastrado</strong>. Confira sua caixa de entrada (e o spam, por via das dúvidas 😉).
          </p>

          <div className="w-12 h-px bg-border mx-auto" />

          <div className="space-y-2">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4 text-dourado" />
              Agora entre no nosso grupo exclusivo do WhatsApp
            </p>
            <p className="text-muted-foreground text-xs">
              Lá você vai receber dicas diárias, suporte e vai poder tirar todas as suas dúvidas!
            </p>
          </div>

          <Button
            variant="cta"
            size="lg"
            className="text-[0.9rem] md:text-[1rem] px-8 py-5 md:py-6 w-full max-w-sm mx-auto leading-tight whitespace-normal h-auto"
            asChild
          >
            <a
              href="https://wa.me/message/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-1" />
              ENTRAR NO GRUPO DO WHATSAPP
            </a>
          </Button>
        </div>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
          Qualquer dúvida, estou à disposição! Vamos juntas destravar a fala do seu filho. 💕
        </p>
      </div>
    </main>
  );
};

export default V3;
