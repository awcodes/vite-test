import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";
import { detectServerConfig } from "./vite-valet";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/filament.css"],
            refresh: true,
        }),
    ],
    server: detectServerConfig("vitest.test"),
    css: {
        postcss: {
            plugins: [
                require("tailwindcss")({
                    config: "./tailwind-filament.config.js",
                }),
                require("autoprefixer"),
            ],
        },
    },
    build: {
        outDir: "./public/build/filament",
    },
});
