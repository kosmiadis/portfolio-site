import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    resolve: {
      alias: { 
        '@components': '/src/components',
        '@assets': '/src/assets',
        '@pages': '/src/pages',
        '@layout': '/src/components/layout',
        '@layouts': '/src/layouts',
        '@ui': '/src/components/ui',
        '@hooks': '/src/hooks',
        '@data': '/src/data',
      }
    }
})
