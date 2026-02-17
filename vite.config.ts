import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Guard against accidental dev JSX output in server bundles.
  esbuild: command === "build" ? { jsxDev: false } : undefined,
  ssr: {
    noExternal: ["react-helmet-async", "lucide-react"],
  },
}));
