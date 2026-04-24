/**
 * Meta Pixel events (client-side only).
 *
 * Previous version dual-fired each event: once via the browser pixel (window.fbq)
 * and once to a Supabase edge function that forwarded to Meta's server-side
 * Conversions API. The edge function was returning 4xx for every call, so the
 * server-side leg never actually reached Meta. It also pulled in the entire
 * @supabase/supabase-js SDK (~60 KiB gzipped) and ran heavy work on the main
 * thread right during the critical paint window.
 *
 * We now just fire the client-side pixel, which is what the Meta Pixel snippet
 * in index.html sets up. The browser pixel alone is enough to drive ad
 * optimization — CAPI can be added back later via a server that actually works
 * if attribution gaps become visible.
 */

type FbqFn = (...args: unknown[]) => void;

const fbq = (): FbqFn | null => {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { fbq?: FbqFn };
  return typeof w.fbq === "function" ? w.fbq : null;
};

const track = (eventName: string, customData?: Record<string, unknown>) => {
  const f = fbq();
  if (!f) return;
  if (customData) f("track", eventName, customData);
  else f("track", eventName);
};

export const fbEvents = {
  pageView: () => {
    // The inline pixel in index.html already fires PageView on load; keep this
    // for parity with the previous API but make it a no-op to avoid double-counting.
    return null;
  },

  initiateCheckout: () =>
    track("InitiateCheckout", {
      content_name: "Guia Meu Filho Vai Falar",
      value: 67,
      currency: "BRL",
    }),

  purchase: () =>
    track("Purchase", {
      content_name: "Guia Meu Filho Vai Falar",
      value: 67,
      currency: "BRL",
    }),

  lead: () => track("Lead"),

  viewContent: () =>
    track("ViewContent", {
      content_name: "Guia Meu Filho Vai Falar",
    }),
};
