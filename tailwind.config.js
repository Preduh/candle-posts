module.exports = {
  mode: "jit",
  content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D",
        secondary: "#171717",
        "dark-gray": "#272727",
        "light-gray": "#B6B6B6",
        "light-orange": "#f3aa41",
        "primary-orange": "#ff8800",
        "dark-orange": "#F77C00",
      },
      fontFamily: {
        hammersmith: ["Hammersmith One", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
