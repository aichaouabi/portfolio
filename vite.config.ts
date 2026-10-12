import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative asset URLs support GitHub Pages repository subdirectories.
  base: "./",
  plugins: [react(), tailwindcss()],
});
