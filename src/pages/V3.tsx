import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, CheckCircle2, Heart, Download } from "lucide-react";
import { fbEvents } from "@/lib/fbConversions";
import thaynaraImg from "@/assets/thaynara.png";

const V3 = () => {
  useEffect(() => {
    fbEvents.pageView();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rosa-light/60 via-bege2 to-rosa-light/40">
      {/* Top pink accent bar */}
      <div className="h-2 bg-gradient-to-r from-rosa to-rosa-light" />

      <div className="flex flex-col items-center px-4 py-10 md:py-16 max-w-2xl mx-auto">
        {/* Photo */}
        <div className="relative mb-8">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-rosa/30 shadow-xl">
            <img
              src={thaynaraImg}
              alt="Thaynara Andrade - Fonoaudióloga"
              className="w-full h-full object-cover object-top scale-125"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-verde flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-5 h-5 text-background" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center leading-tight mb-2">
          Parabéns, mamãe! <Heart className="inline w-5 h-5 text-rosa fill-rosa" />
        </h1>
        <p className="text-base md:text-lg text-muted-foreground text-center mb-8">
          Você deu o primeiro passo mais importante para destravar a fala do seu filho.
        </p>

        {/* Main card */}
        <div className="w-full bg-card rounded-3xl shadow-lg border border-border/60 overflow-hidden">
          {/* Email section */}
          <div className="p-6 md:p-8 text-center space-y-4 border-b border-border/60">
            <div className="w-14 h-14 rounded-2xl bg-rosa/10 flex items-center justify-center mx-auto">
              <Mail className="w-7 h-7 text-rosa" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              Seu material já chegou!
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Enviamos tudo para o <strong className="text-foreground">e-mail que você cadastrou</strong>. Confira sua caixa de entrada e também a pasta de spam, tá? 😉
            </p>
            <div className="bg-rosa/5 rounded-2xl p-4 space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground flex items-center justify-center gap-1">
                <Download className="w-4 h-4 text-rosa" /> Dica: baixe o app da Kiwify!
              </p>
              <p className="leading-relaxed">
                Para acessar seu material de forma mais fácil e rápida, baixe o <strong className="text-foreground">aplicativo da Kiwify</strong> no seu celular. Assim você tem tudo na palma da mão! 📱
              </p>
            </div>
          </div>

          {/* WhatsApp section */}
          <div className="p-6 md:p-8 text-center space-y-5 bg-verde/[0.03]">
            <p className="text-foreground font-medium text-sm md:text-base">
              Não recebeu o acesso ou ficou com alguma dúvida? Fale comigo! 💬
            </p>
            <Button
              variant="cta"
              size="lg"
              className="text-[0.85rem] md:text-[1rem] px-8 py-5 md:py-6 w-full max-w-sm mx-auto leading-tight whitespace-normal h-auto"
              asChild
            >
              <a
                href="https://wa.me/message/PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-1" />
                FALAR COM TIA THAY
              </a>
            </Button>
            <p className="text-muted-foreground text-xs">
              Respondo o mais rápido possível ❤️
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-muted-foreground text-center max-w-xs leading-relaxed">
          Vamos juntas nessa jornada! Estou aqui para te ajudar em cada passo. 💕
        </p>
        <p className="mt-2 text-[0.65rem] text-muted-foreground/60">
          Thaynara Andrade · Fonoaudióloga
        </p>
      </div>
    </main>
  );
};

export default V3;
