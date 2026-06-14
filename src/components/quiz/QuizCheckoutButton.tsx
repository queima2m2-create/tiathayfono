import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { buildKiwifyCheckoutUrl } from "@/lib/kiwifyUrl";
import { applyTrackingToUrl } from "@/lib/tracking";
import { KIWIFY_URL } from "@/lib/quizConfig";

const QuizCheckoutButton = ({
  children = "QUERO DESTRAVAR A FALA DO MEU FILHO →",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [href, setHref] = useState<string>(KIWIFY_URL);

  useEffect(() => {
    setHref(applyTrackingToUrl(buildKiwifyCheckoutUrl(KIWIFY_URL)));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const finalHref = applyTrackingToUrl(buildKiwifyCheckoutUrl(KIWIFY_URL));
    const w = window as any;
    if (typeof w.fbq === "function") {
      w.fbq("track", "InitiateCheckout", {
        content_name: "Meu Filho Vai Falar",
        currency: "BRL",
        value: 57,
      });
    }
    setTimeout(() => {
      window.location.href = finalHref;
    }, 300);
  };

  return (
    <Button
      asChild
      className={
        "bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-extrabold uppercase tracking-wide rounded-xl shadow-lg shadow-[#FF6B35]/30 px-6 py-5 md:py-6 text-[0.9rem] md:text-[1.05rem] w-full leading-tight whitespace-normal h-auto " +
        className
      }
    >
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    </Button>
  );
};

export default QuizCheckoutButton;
