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
      "@di": path.resolve(__dirname, "./src/adapter/di"),
      "@repository": path.resolve(__dirname, "./src/adapter/repositories"),
      "@service": path.resolve(__dirname, "./src/adapter/services"),
      "@useCase": path.resolve(__dirname, "./src/adapter/useCases"),
      "@dto": path.resolve(__dirname, "./src/domain/dtos"),
      "@error": path.resolve(__dirname, "./src/domain/errors"),
      "@mapper": path.resolve(__dirname, "./src/domain/mappers"),
      "@model": path.resolve(__dirname, "./src/domain/models"),
      "@hook": path.resolve(__dirname, "./src/main/hooks"),
      "@infra": path.resolve(__dirname, "./src/main/infrastructures"),
      "@route": path.resolve(__dirname, "./src/main/routes"),
      "@util": path.resolve(__dirname, "./src/main/utils"),
      "@ui": path.resolve(__dirname, "./src/ui"),
    },
  },
});
