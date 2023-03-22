/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translate(0,-100%)" },
          "100%": { transform: "translate(0,0)" },
        },
      },
      colors: {
        "border-color": "#e9ecef",
      },
    },
    // To center containers by default, set the center option to true
    container: {
      center: true,
      screens: {
        xl: "1200px",
      },
      padding: "15px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".hiddenScrollbar": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },

        ".scrollbar-default": {
          /* IE and Edge */
          "-ms-overflow-style": "auto",

          /* Firefox */
          "scrollbar-width": "auto",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
      });
    }),
  ],
};
