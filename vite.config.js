import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'React Vite PWA',
        short_name: 'ReactPWA',
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        description: 'A React app with PWA capabilities using Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
