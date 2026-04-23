import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);

const loadStyles = () => {
  void import("./index.css");
};

if (typeof window !== "undefined") {
  window.requestAnimationFrame(loadStyles);
} else {
  loadStyles();
}
