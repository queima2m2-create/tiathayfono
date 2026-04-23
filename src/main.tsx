import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Hide the static "instant hero" overlay (rendered directly in index.html)
// once React has painted. requestAnimationFrame runs AFTER the first React paint,
// so the handoff is visually seamless — both versions render the same hero.
requestAnimationFrame(() => {
  const instant = document.getElementById("instant-hero");
  if (instant) {
    instant.classList.add("instant-hero--hidden");
    // Remove from DOM after fade-out so it doesn't affect scrolling/layout
    setTimeout(() => instant.remove(), 250);
  }
});
