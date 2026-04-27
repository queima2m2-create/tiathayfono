import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Hide the static "instant hero" overlay (rendered directly in index.html)
// once React has painted. requestAnimationFrame runs AFTER the first React paint,
// so the handoff is visually seamless — the active variant matches what React
// renders for the current route, so no content flash.
//
// We hide ALL .instant-hero variants (not just one id) because index.html now
// has three: instant-hero-pt, instant-hero-v4, instant-hero-es. Only the one
// matching the current route is data-active, but we clean up all of them.
requestAnimationFrame(() => {
  const heroes = document.querySelectorAll<HTMLElement>(".instant-hero");
  heroes.forEach((el) => {
    el.classList.add("instant-hero--hidden");
    // Remove from DOM after fade-out so it doesn't affect scrolling/layout
    setTimeout(() => el.remove(), 250);
  });
});
