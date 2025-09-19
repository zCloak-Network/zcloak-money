import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === "test" ? "/webpay/" : "/";

  return {
    base,
    define: {
      "import.meta.env.VITE_APP_BASE": JSON.stringify(base),
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [
      // TanStack Router plugin must be placed before React plugin
      tanstackRouter({
        target: "react",
        autoCodeSplitting: false,
      }),
      svgr(),
      react(),
      tailwindcss(),
    ],
  };
});
