import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // This will specify the output directory
    emptyOutDir: true, // Clear the dist folder before building
  },
});
