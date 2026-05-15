import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],

  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 4173,
    allowedHosts: ["employee-production-14d4.up.railway.app"],
  },
});