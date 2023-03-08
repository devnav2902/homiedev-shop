/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
