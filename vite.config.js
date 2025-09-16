import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
// 👈 Make sure the trailing slash is included
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})
