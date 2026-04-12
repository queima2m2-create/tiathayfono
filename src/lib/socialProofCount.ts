// Base: 1873 on 2026-04-12. Grows ~3-7/day with non-round numbers.
const BASE_DATE = new Date("2026-04-12");
const BASE_COUNT = 1873;

export function getSocialProofCount(): string {
  const now = new Date();
  const days = Math.floor((now.getTime() - BASE_DATE.getTime()) / 86400000);
  if (days <= 0) return BASE_COUNT.toLocaleString("pt-BR");

  let total = BASE_COUNT;
  for (let d = 1; d <= days; d++) {
    const inc = 3 + ((d * 7 + 13) % 5);
    total += inc;
  }

  if (total % 10 === 0) total += 3;

  return total.toLocaleString("pt-BR");
}
