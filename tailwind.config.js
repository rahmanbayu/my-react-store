const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "true-gray": colors.trueGray,
        violet: colors.violet,
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["responsive", "hover"],
    },
  },
  plugins: [],
};
