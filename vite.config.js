import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' lets the build work on Vercel AND GitHub Pages (any sub-path)
export default defineConfig({ plugins: [react()], base: './' })
