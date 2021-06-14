const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      white: colors.white,
      primary: "#1f2937",
      secondary: {
        100: "#EEFAF5",
        900: "#577569",
      },
      danger: "#D62828",
    },
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    extend: {
      grayscale: {
        30: "30%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
