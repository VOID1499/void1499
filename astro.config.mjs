import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site:"https://VOID1499.github.io",
    base:"/void1499",
    integrations:[tailwind()],
});
