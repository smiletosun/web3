import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import pages from "vite-plugin-react-pages";
import theme from "./vite-plugins/theme";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages(),
    theme({
      theme: "@semi-bot/semi-theme-tuxsemi",
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
