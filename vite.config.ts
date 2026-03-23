import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin(), tailwindcss(), TanStackRouterVite()],
    server: {
        port: 56656,
    },
    base: '/',
})
