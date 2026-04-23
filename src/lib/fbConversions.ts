interface FBEventData {
  event_name: string;
  event_id?: string;
  event_source_url?: string;
  user_data?: Record<string, string>;
  custom_data?: Record<string, unknown>;
}

const MATCH_KEYS = ["fbp", "fbc", "em", "ph", "external_id", "client_ip_address"] as const;

const getCookie = (name: string) => {
  if (typeof document === "undefined") return undefined;

  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")
    .slice(1)
    .join("=");
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const waitForTrackingCookies = async (timeoutMs = 2500) => {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");

    if (fbp || fbc) return;

    await delay(250);
  }
};

const getBrowserUserData = () => {
  if (typeof window === "undefined") return {};

  const userData: Record<string, string> = {
    client_user_agent: window.navigator.userAgent,
  };

  const fbp = getCookie("_fbp");
  const fbc = getCookie("_fbc");

  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  return userData;
};

const hasSufficientUserData = (userData: Record<string, string>) => {
  const hasMatchKey = MATCH_KEYS.some((key) => Boolean(userData[key]));
  return Boolean(userData.client_user_agent) && hasMatchKey;
};

export async function sendFBConversionEvent(eventData: FBEventData) {
  try {
    if (typeof window !== "undefined") {
      await waitForTrackingCookies(eventData.event_name === "PageView" ? 2500 : 1000);
    }

    const mergedUserData = {
      ...getBrowserUserData(),
      ...(eventData.user_data ?? {}),
    };

    if (!hasSufficientUserData(mergedUserData)) {
      console.info(`Skipping FB Conversion event \"${eventData.event_name}\": insufficient user data`);
      return null;
    }

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/fb-conversions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({
        ...eventData,
        event_source_url:
          eventData.event_source_url ||
          (typeof window !== "undefined" ? window.location.href : undefined),
        event_time: Math.floor(Date.now() / 1000),
        user_data: mergedUserData,
      }),
    });

    if (!response.ok) {
      console.error("FB Conversion event error:", await response.text());
      return null;
    }

    return response.json();
  } catch (err) {
    console.error("Failed to send FB conversion event:", err);
    return null;
  }
}

export const fbEvents = {
  pageView: () => sendFBConversionEvent({ event_name: "PageView" }),

  initiateCheckout: () =>
    sendFBConversionEvent({
      event_name: "InitiateCheckout",
      custom_data: { content_name: "Guia Meu Filho Vai Falar", value: 67, currency: "BRL" },
    }),

  purchase: () =>
    sendFBConversionEvent({
      event_name: "Purchase",
      custom_data: { content_name: "Guia Meu Filho Vai Falar", value: 67, currency: "BRL" },
    }),

  lead: () => sendFBConversionEvent({ event_name: "Lead" }),

  viewContent: () =>
    sendFBConversionEvent({
      event_name: "ViewContent",
      custom_data: { content_name: "Guia Meu Filho Vai Falar" },
    }),
};
