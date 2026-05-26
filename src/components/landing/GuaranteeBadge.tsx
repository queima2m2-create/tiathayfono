const GuaranteeBadge = ({ className = "" }: { className?: string }) => (
  <div
    className={`inline-flex items-center gap-2 bg-verde/10 text-verde border border-verde/30 rounded-full px-4 py-2 text-[0.78rem] md:text-[0.85rem] font-bold ${className}`}
  >
    🛡️ GARANTIA INCONDICIONAL 30 DIAS — RISCO ZERO
  </div>
);

export default GuaranteeBadge;
