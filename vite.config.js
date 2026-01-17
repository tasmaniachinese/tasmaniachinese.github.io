import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // If you were NOT using a custom domain, you would need base: '/repo-name/'
    // Since you HAVE a custom domain (tcsa.org.au), you leave base as '/'
    base: '/',
})