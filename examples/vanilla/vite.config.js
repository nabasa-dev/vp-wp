import { defineConfig } from "vite-plus";
import Icons from "unplugin-icons/vite";
import { wordpress } from "@nabasa/vp-wp";

export default defineConfig({
  plugins: [
    Icons({
      autoInstall: true,
    }),
    wordpress({
      entry: {
        app: "resources/main.js",
      },
      outDir: "assets/dist",
    }),
  ],
});
