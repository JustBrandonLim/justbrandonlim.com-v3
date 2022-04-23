const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif", ...defaultTheme.fontFamily.sans],
        inter: ["'Inter', sans-serif", ...defaultTheme.fontFamily.sans],
        roboto: ["'Roboto', sans-serif", ...defaultTheme.fontFamily.sans],
        lexend: ["'Lexend', sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
