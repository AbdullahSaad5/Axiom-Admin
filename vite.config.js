import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import reactRefresh from "@vitejs/plugin-react-refresh";
// import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // Split by package names
          }
        },
      },
    },
  },
  plugins: [react()],
});
