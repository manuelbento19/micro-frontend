import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "products-app",
      remotes: {
        "product-components": "http://localhost:4173/assets/remoteEntry.js",
        "product-app-footer": "http://localhost:4174/assets/remoteEntry.js",
      }
    })
  ],
})
