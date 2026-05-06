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
  if (fbclid) {
    url.searchParams.set("fbclid", fbclid);
    url.searchParams.set("src", "fbclid_" + fbclid);
  }

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

export async function sendTrackingEnrichment(extra?: {
  value?: number;
  contentName?: string;
}) {
  if (typeof window === "undefined") return;

  const fbclid =
    new URLSearchParams(window.location.search).get("fbclid") ||
    localStorage.getItem("_fbclid") ||
    "";

  if (!fbclid) return;

  const fbcMatch = document.cookie.match(/_fbc=([^;]+)/);
  const fbpMatch = document.cookie.match(/_fbp=([^;]+)/);
  const fbc = fbcMatch ? decodeURIComponent(fbcMatch[1]) : "";
  const fbp = fbpMatch ? decodeURIComponent(fbpMatch[1]) : "";

  const path = window.location.pathname;
  const isLatam =
    path.startsWith("/v5") ||
    path.startsWith("/v6") ||
    path.startsWith("/v5-downsell");
  const endpoint = isLatam
    ? "https://n8n.mq2m2.com/webhook/tracking-enrich-latam"
    : "https://n8n.mq2m2.com/webhook/tracking-enrich";

  try {
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fbclid,
        user_agent: navigator.userAgent,
        fbc,
        fbp,
        url: window.location.href,
        value: extra?.value || 0,
        contentName: extra?.contentName || "",
      }),
      keepalive: true,
    });
  } catch (e) {
    console.warn("Enrichment falhou:", e);
  }
}
