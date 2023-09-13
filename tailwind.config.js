/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        droite: {
          "0%": {transform: "translateX(100%)"},
          "50%": {transform: "translateX(-20%)"},
          "75%": {transform: "translateX(7%)"},
          "100%": {transform: "translateX(0%)"},
        },
        gauche: {
          "0%": {transform: "translateX(-100%)"},
          "50%": {transform: "translateX(+20%)"},
          "75%": {transform: "translateX(-7%)"},
          "100%": {transform: "translateX(0%)"},
        },
        reveal: {
          "0%": {opacity: "0%"},
          "100%": {opacity: "100%"},
        },
      },
      animation: {
        "right": "droite 1s ease-in",
        "left": "gauche 1s ease-in",
        "reveal-fast": "reveal 0.5s linear",
        "reveal-slow": "reveal 1s linear",
      },
    },
  },
  plugins: [],
}

