/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "nebula": {
          100: "#FFF2FE",
          200: "#FEB8FE",
          300: "#F27CF8",
          400: "#D540E7",
          500: "#A70AC7",
          600: "#7C039F",
          700: "#550177",
          800: "#34004E",
          900: "#34004E"
        },
        "celestialGreen": {
          100: "#F2FEFF",
          200: "#C0FEFE",
          300: "#8CFAF4",
          400: "#56EDDC",
          500: "#24D4B6",
          600: "#0CA885",
          700: "#037D5A",
          800: "#005236",
          900: "#002617"
        }
      }
    },
  },
  plugins: [],
}

