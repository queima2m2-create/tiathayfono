import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);

if (typeof window !== "undefined") {
  const loadStyles = () => void import("./index.css");
  window.requestAnimationFrame(() => window.setTimeout(loadStyles, 0));
} else {
  void import("./index.css");
}
