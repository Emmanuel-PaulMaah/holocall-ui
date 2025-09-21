import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/holocall-ui/',   // <-- IMPORTANT: your repo name
})
