import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    RubyPlugin(),
  ],
  server: {
    origin: 'http://localhost:3000', // 👈 this is the key to fix preamble issue
  },
})
