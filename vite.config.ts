import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { checker } from "vite-plugin-checker";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    checker({
      overlay: false,
      typescript: true,
    }),
  ],
  server: {
    port: 3000,
    open: true,
    host: true,
  },
});
