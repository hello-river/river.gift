import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    root: 'src',
    plugins: [svelte(), tailwindcss(),],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash].[ext]',
                entryFileNames: 'entries/[name].[hash].js'
            }
        }
    }
})