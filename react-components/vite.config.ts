import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  plugins: [
    react(),
    federation({
      name: "react-components",
      filename: "remoteEntry.js",
      exposes: {
        "./list": "./src/productList"
      },
      shared: ["react","react-dom"]
    })
  ],
  build: {
    modulePreload: true,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
