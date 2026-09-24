import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Base relativa: funciona tanto em GitHub Pages (subpasta /repo/)
// quanto localmente, sem precisar saber o nome do repositório de antemão.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
