import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const FB_PIXEL_ID = "763712916051534";
const FB_API_VERSION = "v18.0";
const MATCH_KEYS = ["fbp", "fbc", "em", "ph", "external_id", "client_ip_address"] as const;

const cleanObject = (value: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== undefined && item !== null && item !== "")
  );

const hasSufficientUserData = (userData: Record<string, unknown>) => {
  const hasMatchKey = MATCH_KEYS.some((key) => Boolean(userData[key]));
  return Boolean(userData.client_user_agent) && hasMatchKey;
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const FB_TOKEN = Deno.env.get("FB_CONVERSIONS_API_TOKEN");
    if (!FB_TOKEN) {
      throw new Error("FB_CONVERSIONS_API_TOKEN is not configured");
    }

    const { event_name, event_time, event_source_url, event_id, user_data, custom_data } = await req.json();

    if (!event_name) {
      return new Response(JSON.stringify({ error: "event_name is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const normalizedUserData = cleanObject({
      ...(user_data ?? {}),
      client_user_agent: user_data?.client_user_agent ?? req.headers.get("user-agent"),
      client_ip_address:
        user_data?.client_ip_address ??
        forwardedFor ??
        req.headers.get("x-real-ip") ??
        req.headers.get("cf-connecting-ip"),
    });

    if (!hasSufficientUserData(normalizedUserData)) {
      return new Response(
        JSON.stringify({
          success: true,
          skipped: true,
          reason: "insufficient_user_data",
          message: "Meta requires client_user_agent plus at least one strong matching identifier such as fbp, fbc, email, phone, external_id, or client_ip_address.",
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const payload = {
      data: [
        cleanObject({
          event_name,
          event_time: event_time || Math.floor(Date.now() / 1000),
          event_source_url,
          event_id,
          action_source: "website",
          user_data: normalizedUserData,
          custom_data: custom_data || {},
        }),
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/${FB_API_VERSION}/${FB_PIXEL_ID}/events?access_token=${FB_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      const isInsufficientUserData =
        response.status === 400 &&
        data?.error?.code === 100 &&
        data?.error?.error_subcode === 2804050;

      if (isInsufficientUserData) {
        return new Response(
          JSON.stringify({
            success: true,
            skipped: true,
            reason: "insufficient_user_data",
            meta: data,
          }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      throw new Error(`Facebook API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("FB Conversions API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
