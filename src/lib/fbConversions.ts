import { supabase } from "@/integrations/supabase/client";

interface FBEventData {
  event_name: string;
  event_source_url?: string;
  user_data?: Record<string, string>;
  custom_data?: Record<string, unknown>;
}

export async function sendFBConversionEvent(eventData: FBEventData) {
  try {
    const { data, error } = await supabase.functions.invoke('fb-conversions', {
      body: {
        ...eventData,
        event_source_url: eventData.event_source_url || window.location.href,
        event_time: Math.floor(Date.now() / 1000),
      },
    });

    if (error) {
      console.error('FB Conversion event error:', error);
      return null;
    }

    return data;
  } catch (err) {
    console.error('Failed to send FB conversion event:', err);
    return null;
  }
}

// Helper para eventos comuns
export const fbEvents = {
  pageView: () => sendFBConversionEvent({ event_name: 'PageView' }),
  
  initiateCheckout: () => sendFBConversionEvent({
    event_name: 'InitiateCheckout',
    custom_data: { content_name: 'Guia Meu Filho Vai Falar', value: 67, currency: 'BRL' },
  }),

  purchase: () => sendFBConversionEvent({
    event_name: 'Purchase',
    custom_data: { content_name: 'Guia Meu Filho Vai Falar', value: 67, currency: 'BRL' },
  }),

  lead: () => sendFBConversionEvent({ event_name: 'Lead' }),

  viewContent: () => sendFBConversionEvent({
    event_name: 'ViewContent',
    custom_data: { content_name: 'Guia Meu Filho Vai Falar' },
  }),
};
