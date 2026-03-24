import { defineConfig } from "vite-plus";
import solid from "vite-plugin-solid";
import Icons from "unplugin-icons/vite";
import { wordpress } from "@nabasa/vp-wp";

export default defineConfig({
  plugins: [
    solid(),
    Icons({
      compiler: "solid",
      autoInstall: true,
    }),
    wordpress({
      entry: {
        app: "resources/main.jsx",
      },
      outDir: "assets/dist",
    }),
  ],
});
