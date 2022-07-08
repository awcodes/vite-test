const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/**/*.blade.php", "./vendor/filament/**/*.blade.php"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                gray: colors.slate,
                danger: colors.rose,
                primary: colors.sky,
                success: colors.emerald,
                warning: colors.orange,
            },
            borderRadius: {
                none: "0px",
                sm: "0.0625rem",
                DEFAULT: "0.125rem",
                md: "0.25rem",
                lg: "0.375rem",
                xl: "0.5rem",
                "2xl": ".75rem",
                "3xl": "1.25rem",
                full: "9999px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
