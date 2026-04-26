// Same logic as socialProofCount but formatted for es-LatAm
const BASE_DATE = new Date("2026-04-12");
const BASE_COUNT = 1873;

export function getSocialProofCountEs(): string {
  const now = new Date();
  const days = Math.floor((now.getTime() - BASE_DATE.getTime()) / 86400000);
  if (days <= 0) return BASE_COUNT.toLocaleString("es-MX");

  let total = BASE_COUNT;
  for (let d = 1; d <= days; d++) {
    const inc = 3 + ((d * 7 + 13) % 5);
    total += inc;
  }

  if (total % 10 === 0) total += 3;

  return total.toLocaleString("es-MX");
}
