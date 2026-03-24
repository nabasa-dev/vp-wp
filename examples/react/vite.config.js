import { defineConfig } from "vite-plus";
import react from "@vitejs/plugin-react";
import Icons from "unplugin-icons/vite";
import { wordpress, wordpressExternals } from "@nabasa/vp-wp";

export default defineConfig({
  plugins: [
    react(),
    Icons({
      compiler: "jsx",
      jsx: "react",
      autoInstall: true,
    }),
    wordpress({
      entry: {
        app: "resources/main.jsx",
      },
      outDir: "assets/dist",
    }),
    wordpressExternals(),
  ],
});
