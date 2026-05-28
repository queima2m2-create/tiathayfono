import { Button } from "@/components/ui/button";
import { buildKiwifyCheckoutUrl } from "@/lib/kiwifyUrl";
import { KIWIFY_URL_LATAM } from "@/lib/quizConfigLatam";

const QuizCheckoutButtonLatam = ({
  children = "QUIERO DESTRABAR EL HABLA DE MI HIJO →",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = buildKiwifyCheckoutUrl(KIWIFY_URL_LATAM);
    const w = window as any;
    if (typeof w.fbq === "function") {
      w.fbq("track", "InitiateCheckout", {
        content_name: "Mi Hijo Va a Hablar LATAM",
        currency: "USD",
        value: 14.99,
      });
    }
    setTimeout(() => {
      window.location.href = href;
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
      <a href={KIWIFY_URL_LATAM} onClick={handleClick}>
        {children}
      </a>
    </Button>
  );
};

export default QuizCheckoutButtonLatam;
