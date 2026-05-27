/**
 * Quiz VTurb embeds. Each entry is the raw HTML snippet provided by VTurb
 * (custom element + loader script). VslEmbed injects the HTML and re-executes
 * the <script> tags so the player initializes.
 */
export const QUIZ_VSL_EMBEDS = {
  vsl_parte_1_embed: `<vturb-smartplayer id="vid-6a1763049315414a7b2cd1c9" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>
<script type="text/javascript">
  var s=document.createElement("script");
  s.src="https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6a1763049315414a7b2cd1c9/v4/player.js";
  s.async=!0;
  document.head.appendChild(s);
</script>`,
  vsl_parte_2_embed: `<vturb-smartplayer id="vid-6a17631928a4b279d55e8279" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>
<script type="text/javascript">
  var s=document.createElement("script");
  s.src="https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6a17631928a4b279d55e8279/v4/player.js";
  s.async=!0;
  document.head.appendChild(s);
</script>`,
  vsl_parte_3_embed: `<vturb-smartplayer id="vid-6a176310ff1f2b1157c341e2" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>
<script type="text/javascript">
  var s=document.createElement("script");
  s.src="https://scripts.converteai.net/8cb68814-a0fc-45e0-ace9-4a6b005a0cc8/players/6a176310ff1f2b1157c341e2/v4/player.js";
  s.async=!0;
  document.head.appendChild(s);
</script>`,
};

export const KIWIFY_URL = "https://pay.kiwify.com.br/uXb5s35";
export const LEAD_WEBHOOK = "https://n8n.mq2m2.com/webhook/lead-quiz-br";
