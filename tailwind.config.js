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
      fontSize: {
        md: "1.075rem",
      },
      grayscale: {
        30: "30%",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
      width: {
        fit: "fit-content",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
