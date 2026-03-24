import { defineConfig } from "vite-plus";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import { wordpress } from "@nabasa/vp-wp";

export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: "vue3",
      autoInstall: true,
    }),
    wordpress({
      entry: {
        app: "resources/main.js",
      },
      outDir: "assets/dist",
    }),
  ],

  server: {
    cors: true,
    origin: "http://localhost:3000",
    port: 3000,
    // allowedHosts: true, // BrowserStackLocal
  },
});
