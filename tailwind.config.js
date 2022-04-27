module.exports = {
  mode: "jit",
  content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D",
        secondary: "#171717",
        "dark-gray": "#272727",
        "light-gray": "#B6B6B6",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
