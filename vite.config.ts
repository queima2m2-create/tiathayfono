import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  // Target modern browsers only — removes ~28 KiB of ES5 polyfills from the bundle.
  // All browsers released since 2022 support this (Safari 15+, Chrome 96+, Firefox 95+).
  build: {
    target: "es2022",
    cssTarget: "chrome96",
  },
  esbuild: {
    target: "es2022",
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
