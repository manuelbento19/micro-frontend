import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  plugins: [
    vue(),
    federation({
      name: "vue-components",
      filename: "remoteEntry.js",
      exposes: {
        "./": "./src/components/index.vue"
      }
    })
  ],
  build: {
    modulePreload: true,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
