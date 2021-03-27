module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          450: "#67b4fc",
        },
      },
      fontFamily: {
        primary: ["Lato"],
        secondary: ["Beckman"],
      },
    },
    gridTemplateColumns: {
      1: "repeat(1, minmax(0, 350px))",
      2: "repeat(2, minmax(200px, 350px))",
      3: "repeat(3, minmax(0, 350px))",
    },
  },
  variants: {
    extend: {
      outline: ["active"],
    },
  },
  plugins: [],
}
