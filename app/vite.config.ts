import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        "react-components": "http://localhost:3001/assets/remoteEntry.js",
        "vue-components": "http://localhost:3002/assets/remoteEntry.js",
      }
    })
  ],
})
