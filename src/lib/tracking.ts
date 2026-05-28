/**
 * Tracking parameter capture & propagation for the quiz funnels (BR + LATAM).
 *
 * Captures UTM, fbclid, gclid, msclkid, ad ids and Meta Pixel cookies
 * (_fbc / _fbp) on quiz entry and persists them so the checkout link
 * carries the original attribution all the way into Kiwify.
 */

const STORAGE_KEY = "tiathay_tracking";

const TRACKING_KEYS = [
  "fbclid",
  "gclid",
  "msclkid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "fbc",
  "fbp",
  "src",
  "ad_id",
  "adset_id",
  "campaign_id",
] as const;

export type TrackingData = Record<string, string> & { _captured_at?: number };

const readCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(name + "="));
  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : null;
};

/**
 * Reads URL params + Pixel cookies and merges with any previously stored
 * tracking (new values win). Safe to call on every quiz mount.
 */
export const captureTracking = (): TrackingData => {
  if (typeof window === "undefined") return {};

  const existing = getStoredTracking();
  const next: TrackingData = { ...existing };

  const urlParams = new URLSearchParams(window.location.search);
  TRACKING_KEYS.forEach((key) => {
    const v = urlParams.get(key);
    if (v) next[key] = v;
  });

  if (!next.fbc) {
    const fbc = readCookie("_fbc");
    if (fbc) next.fbc = fbc;
  }
  if (!next.fbp) {
    const fbp = readCookie("_fbp");
    if (fbp) next.fbp = fbp;
  }

  // Mirror fbclid to localStorage for legacy buildKiwifyCheckoutUrl reader.
  if (next.fbclid) {
    try {
      localStorage.setItem("_fbclid", next.fbclid);
    } catch {}
  }

  const meaningful = Object.keys(next).filter((k) => k !== "_captured_at");
  if (meaningful.length === 0) return {};

  next._captured_at = Date.now();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {}

  if (typeof console !== "undefined") {
    console.log("Tracking capturado:", next);
  }
  return next;
};

export const getStoredTracking = (): TrackingData => {
  if (typeof window === "undefined") return {};
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ||
      sessionStorage.getItem(STORAGE_KEY) ||
      "{}";
    return JSON.parse(raw) as TrackingData;
  } catch {
    return {};
  }
};

/**
 * Returns the given URL with all stored tracking params merged in.
 * URL-existing params (or `current` URL params) win over stored ones.
 */
export const applyTrackingToUrl = (baseUrl: string): string => {
  if (typeof window === "undefined") return baseUrl;
  let url: URL;
  try {
    url = new URL(baseUrl);
  } catch {
    return baseUrl;
  }
  const tracking = getStoredTracking();
  const currentParams = new URLSearchParams(window.location.search);

  Object.keys(tracking).forEach((key) => {
    if (key === "_captured_at") return;
    if (!url.searchParams.has(key)) {
      url.searchParams.set(key, String(tracking[key]));
    }
  });

  // Also propagate live URL params if not already set
  currentParams.forEach((value, key) => {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });

  return url.toString();
};

/**
 * Compact subset used in webhook payloads.
 */
export const getTrackingForPayload = () => {
  const t = getStoredTracking();
  return {
    fbclid: t.fbclid || null,
    gclid: t.gclid || null,
    utm_source: t.utm_source || null,
    utm_medium: t.utm_medium || null,
    utm_campaign: t.utm_campaign || null,
    utm_content: t.utm_content || null,
    utm_term: t.utm_term || null,
    fbc: t.fbc || null,
    fbp: t.fbp || null,
    ad_id: t.ad_id || null,
    adset_id: t.adset_id || null,
    campaign_id: t.campaign_id || null,
  };
};
