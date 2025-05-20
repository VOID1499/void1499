import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site:"https://VOID1499.github.io",
    base:"void1499",
    vite:{
        plugins:[tailwindcss()]
    }
});
