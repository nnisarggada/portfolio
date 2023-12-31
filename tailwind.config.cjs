/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        accent: "#818cf8",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#ffffff",
            a: {
              color: "#818cf8",
              "&:hover": {
                color: "#cad5ff",
              },
            },
            strong: {
              color: "#818cf8",
            },
            h1: {
              color: "#ffffff",
            },
            h2: {
              color: "#ffffff",
            },
            h3: {
              color: "#ffffff",
            },
            em: {
              color: "#ffffff",
            },
            code: {
              color: "#ffffff",
              backgroundColor: "#2f2f2f",
              padding: "2px",
            },
            img: {
              maxWidth: "100%",
              height: "auto",
              margin: "0 auto",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
