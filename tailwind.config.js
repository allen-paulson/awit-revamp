/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                anton: ["Anton", "sans-serif"],
            },
            colors: {
                "background-black": "#151515",
                "white-color": "#F1F1F1",
            },
        },
    },
    plugins: [],
};
