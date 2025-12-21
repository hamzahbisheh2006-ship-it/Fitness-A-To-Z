/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {

                primary: {
                    50: "var(--primary-50)",
                    100: "var(--primary-100)",
                    500: "var(--primary-500)",
                    700: "var(--primary-700)",
                    900: "var(--primary-900)",
                },


                black: "var(--black)",
                white: "var(--white)",


                "black-75": "var(--black-75)",


                "white-80": "var(--white-80)",
                "white-70": "var(--white-70)",


                error: "var(--error)",
            },
        },
    },
    plugins: [],
};
