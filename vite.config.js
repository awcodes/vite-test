import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";
import { detectServerConfig } from "./vite-valet";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/js/push.js",
            ],
            refresh: true,
        }),
    ],
    server: detectServerConfig("vitest.test"),
    css: {
        postcss: {
            plugins: [
                require("tailwindcss")({
                    config: "./tailwind.config.js",
                }),
                require("autoprefixer"),
            ],
        },
    },
    build: {
        outDir: "./public/build/frontend",
    },
});
