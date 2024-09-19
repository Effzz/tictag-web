import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

const devServerPort = Number(process.env.VITE_DEV_SERVER_PORT) || 3000;

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: devServerPort
    },
    resolve: {
        alias: {
            src: '/src'
        }
    },
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()]
        }
    }
});
