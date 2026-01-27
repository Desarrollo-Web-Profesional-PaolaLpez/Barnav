import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // <--- Esto es clave para que los assets funcionen en cualquier ruta
  plugins: [react(), tailwindcss()],
})
