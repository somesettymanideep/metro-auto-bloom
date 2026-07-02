import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Use GitHub Pages base only for production builds.
// Lovable preview / dev server must serve from "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/metro-auto-bloom/" : "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: { host: "::", port: 8080 },
}));
