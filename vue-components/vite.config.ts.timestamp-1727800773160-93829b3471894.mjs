// vite.config.ts
import { defineConfig } from "file:///home/manuel/Desktop/DevSkills/micro-frontend/vue-components/node_modules/vite/dist/node/index.js";
import vue from "file:///home/manuel/Desktop/DevSkills/micro-frontend/vue-components/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import federation from "file:///home/manuel/Desktop/DevSkills/micro-frontend/vue-components/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    port: 3002
  },
  preview: {
    port: 3002
  },
  plugins: [
    vue(),
    federation({
      name: "vue-components",
      filename: "remoteEntry.js",
      exposes: {
        "./footer": "./src/components/footer.vue"
      },
      shared: ["vue"]
    })
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tYW51ZWwvRGVza3RvcC9EZXZTa2lsbHMvbWljcm8tZnJvbnRlbmQvdnVlLWNvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL21hbnVlbC9EZXNrdG9wL0RldlNraWxscy9taWNyby1mcm9udGVuZC92dWUtY29tcG9uZW50cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9tYW51ZWwvRGVza3RvcC9EZXZTa2lsbHMvbWljcm8tZnJvbnRlbmQvdnVlLWNvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbic7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAyLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogMzAwMixcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgbmFtZTogXCJ2dWUtY29tcG9uZW50c1wiLFxuICAgICAgZmlsZW5hbWU6IFwicmVtb3RlRW50cnkuanNcIixcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgXCIuL2Zvb3RlclwiOiBcIi4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnZ1ZVwiXG4gICAgICB9LFxuICAgICAgc2hhcmVkOltcInZ1ZVwiXVxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVyxTQUFTLG9CQUFvQjtBQUNuWSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFHdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsUUFBTyxDQUFDLEtBQUs7QUFBQSxJQUNmLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
