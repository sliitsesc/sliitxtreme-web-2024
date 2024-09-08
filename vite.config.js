import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  const base = isProduction ? "/sliitxtreme-web-2024/" : "/";

  return {
    base,
    plugins: [react()],
  };
});
