import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Configurar el proxy para las peticiones a la API
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // No es necesario reescribir la ruta porque ya incluye /api
      },
    },
  },
});
