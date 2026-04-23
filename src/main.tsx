import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root")!;
const path = window.location.pathname.replace(/\/$/, "") || "/";
const shouldHydrateHome = path === "/" && rootElement.hasChildNodes();

if (shouldHydrateHome) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
