export async function firePageViewWithDedup() {
  const eventID =
    "pv_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);

  const fbclid =
    new URLSearchParams(window.location.search).get("fbclid") ||
    localStorage.getItem("_fbclid") ||
    "";

  const fbcMatch = document.cookie.match(/_fbc=([^;]+)/);
  const fbpMatch = document.cookie.match(/_fbp=([^;]+)/);
  const fbc = fbcMatch ? decodeURIComponent(fbcMatch[1]) : "";
  const fbp = fbpMatch ? decodeURIComponent(fbpMatch[1]) : "";

  const w = window as unknown as { fbq?: (...args: unknown[]) => void };
  if (typeof w.fbq !== "undefined") {
    w.fbq("track", "PageView", {}, { eventID });
  }

  try {
    await fetch("https://n8n.mq2m2.com/webhook/pageview-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventID,
        fbc,
        fbp,
        fbclid,
        userAgent: navigator.userAgent,
        url: window.location.href,
        referrer: document.referrer || "",
      }),
      keepalive: true,
    });
  } catch (e) {
    console.warn("PageView server-side falhou:", e);
  }

  return eventID;
}
