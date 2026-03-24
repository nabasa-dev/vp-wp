import { defineConfig } from "vite-plus";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Icons from "unplugin-icons/vite";
import { wordpress } from "@nabasa/vp-wp";

export default defineConfig({
  plugins: [
    svelte(),
    Icons({
      compiler: "svelte",
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
