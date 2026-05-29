import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/build-a-bookmark-manager-app-not-an-image-processor-the-app-stores-website-bookmarks-with-title-url/",
  build: { outDir: "dist", assetsDir: "assets" },
  server: { port: 3000 },
});
