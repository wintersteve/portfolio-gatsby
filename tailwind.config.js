const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    boxShadow: {
      primary: "5px 5px #111827",
      secondary: "5px 5px rgb(238 250 245)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      "4xl": "0 1rem 3rem rgba(52, 58, 64, 0.175)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    colors: {
      gray: colors.coolGray,
      white: colors.white,
      primary: {
        100: "#374151",
        200: "#1f2937",
        300: "#111827",
      },
      secondary: {
        100: "#EEFAF5",
        200: "#DFF5EC",
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
      transitionProperty: {
        "all-no-bg": "padding, shadow, translate, transform",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["dark", "responsive"],
      borderWidth: ["dark", "responsive"],
      boxShadow: ["dark"],
      brightness: ["dark"],
      invert: ["dark"],
      opacity: ["dark"],
    },
  },
  plugins: [],
};
