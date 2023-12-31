/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        colorAnimation: {
          "0%": {
            "background-position": "0% 100%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          "100%": {
            "background-position": "0% 100%",
          },
        },
      },
      animation: {
        colorAnimation:
          "colorAnimation 15s ease-in-out infinite alternate forwards",
      },
      dropShadow: {
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        "2xl-dark": "0 25px 25px rgb(150 150 150 / 0.15)",
      },
      colors: {
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "dark-slate-gray": "#888",
        "select-gray": "#333",
        "modal-color": "#454444",
        "dark-background": "#1a1719",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
    },
  },
  plugins: [],
};
