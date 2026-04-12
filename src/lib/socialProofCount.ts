// Base: 1873 on 2025-04-12. Grows ~3-7/day with non-round numbers.
const BASE_DATE = new Date("2025-04-12");
const BASE_COUNT = 1873;

export function getSocialProofCount(): string {
  const now = new Date();
  const days = Math.floor((now.getTime() - BASE_DATE.getTime()) / 86400000);
  if (days <= 0) return BASE_COUNT.toLocaleString("pt-BR");

  // Seeded pseudo-random per day (deterministic)
  let total = BASE_COUNT;
  for (let d = 1; d <= days; d++) {
    // Simple hash: use day number to get 3-7 increment, always odd-ish
    const inc = 3 + ((d * 7 + 13) % 5); // yields 3,4,5,6,7
    total += inc;
  }

  // Ensure it's not a round number (not divisible by 10)
  if (total % 10 === 0) total += 3;

  return total.toLocaleString("pt-BR");
}
