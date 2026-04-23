import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);

const loadStyles = () => {
  void import("./index.css");
};

if (typeof window !== "undefined") {
  let stylesLoaded = false;
  const scheduleStyles = () => {
    if (stylesLoaded) return;
    stylesLoaded = true;
    loadStyles();
  };

  window.addEventListener("scroll", scheduleStyles, { once: true, passive: true });
  window.addEventListener("pointerdown", scheduleStyles, { once: true, passive: true });
  window.setTimeout(scheduleStyles, 2500);
} else {
  loadStyles();
}
