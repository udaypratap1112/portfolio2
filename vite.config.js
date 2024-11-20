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
        description: 'A React app with PWA capabilities using Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
