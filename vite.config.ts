import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Rewrites Vite-generated <link rel="stylesheet"> tags so the stylesheet loads
 * non-render-blocking (preload → swap to stylesheet on load).
 * The static instant-hero in index.html has its own inline critical CSS, so
 * the Tailwind bundle can arrive a beat later without a flash of unstyled React.
 */
const nonBlockingCss = (): Plugin => ({
  name: "non-blocking-css",
  apply: "build",
  // Must run AFTER Vite injects the <link rel="stylesheet"> for the CSS bundle,
  // otherwise there is nothing to rewrite. "post" ordering is required here.
  transformIndexHtml: {
    order: "post",
    handler(html) {
      return html.replace(
        /<link rel="stylesheet"([^>]*href="\/assets\/[^"]+\.css"[^>]*)>/g,
        (_, attrs) =>
          `<link rel="preload" as="style"${attrs} onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet"${attrs}></noscript>`
      );
    },
  },
});

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
  plugins: [
    react(),
    nonBlockingCss(),
    mode === "development" && componentTagger(),
  ].filter(Boolean) as Plugin[],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
