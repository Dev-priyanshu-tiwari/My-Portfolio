import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = repo name, GitHub Pages isi path pe serve karta hai
export default defineConfig({
  base: '/My-Portfolio/',
  plugins: [react()],
})
