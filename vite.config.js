import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "services.html"),
        apparel: resolve(__dirname, "apparel.html"),
        supplements: resolve(__dirname, "supplements.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
