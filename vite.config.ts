import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      REACT_APP_UNSPLASH_API_URL:'https://api.unsplash.com',
      REACT_APP_UNSPLASH_API_KEY: 'Client-ID PCjSyC-cWdp23SC0FEoc75JPJrbWo2jFni-4fONlYDk'
    }
  }
})
