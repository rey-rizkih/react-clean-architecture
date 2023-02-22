import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@common": path.resolve(__dirname, "./src/adapter/common"),
      "@infrastructures": path.resolve(
        __dirname,
        "./src/adapter/infrastructures",
      ),
      "@repositories": path.resolve(__dirname, "./src/adapter/repositories"),
      "@di": path.resolve(__dirname, "./src/di"),
      "@dtos": path.resolve(__dirname, "./src/domain/dtos"),
      "@entities": path.resolve(__dirname, "./src/domain/entities"),
      "@usecases": path.resolve(__dirname, "./src/domain/usecases"),
      "@routes": path.resolve(__dirname, "./src/main/routes"),
      "@utils": path.resolve(__dirname, "./src/main/utils"),
      "@ui": path.resolve(__dirname, "./src/ui"),
    },
  },
});
