/**
 * Builds a Kiwify checkout URL with Meta tracking parameters
 * (fbclid, fbc, fbp) and UTMs propagated from the current page.
 */
export function buildKiwifyCheckoutUrl(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;

  const url = new URL(baseUrl);
  const currentParams = new URLSearchParams(window.location.search);

  // fbclid (URL atual ou localStorage)
  const fbclid =
    currentParams.get("fbclid") ||
    localStorage.getItem("_fbclid") ||
    "";
  if (fbclid) url.searchParams.set("fbclid", fbclid);

  // _fbc cookie
  const fbcMatch = document.cookie.match(/_fbc=([^;]+)/);
  if (fbcMatch) url.searchParams.set("fbc", decodeURIComponent(fbcMatch[1]));

  // _fbp cookie
  const fbpMatch = document.cookie.match(/_fbp=([^;]+)/);
  if (fbpMatch) url.searchParams.set("fbp", decodeURIComponent(fbpMatch[1]));

  // UTMs e src
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src"].forEach((p) => {
    const v = currentParams.get(p);
    if (v) url.searchParams.set(p, v);
  });

  return url.toString();
}
