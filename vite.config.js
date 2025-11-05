// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ecommerce/',            // ensures built files expect /ecommerce/ base path
  plugins: [react()],
  server: {
    // Dev server proxy: forward any /back1 requests to your backend on 30083
    proxy: {
      '/back1': {
        target: 'http://localhost:30083',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path // keep same path
      }
    }
  }
})
