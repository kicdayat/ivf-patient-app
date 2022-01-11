const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#DAB96B",
          darkest: "#503F14",
          darker: "#7D611F",
          dark: "#B39959",
          light: "#EEDAA1",
          lighter: "#F2E7CD",
          lightest: "#F2E7CD",
        },
        "brand-gray": "#5F5D5D",
        primary: {
          DEFAULT: "#DAB96B",
          50: "#FBF7EE",
          100: "#F2E7CD",
          200: "#F2E7CD",
          300: "#EEDAA1",
          400: "#E2C88C",
          500: "#DAB96B",
          600: "#B39959",
          700: "#7D611F",
          800: "#503F14",
          900: "#513F14",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-radix")()],
};
