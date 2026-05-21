// @ts-check
import { defineConfig } from "astro/config";
import taildwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        Plugins: [taildwindcss()],
    },
});