/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: " 'Inter', sans-serif ",
      },
      colors: {
        immuna: {
          50: "#F4F9FF",
          100: "#D1D1D1",
          200: "#EFEFEF",
          300: "#999999",
          800: "#3D3D3D",
        },
        immuna2: {
          50: "#F4F9FF",
          100: "#4D4D4D",
          200: "#2C2C2C",
          300: "#383838",
          350: "#E0EEFF",
          370: "#E6F0FF",
          380: "#272727",
          400: "#CBE1FF",
          500: "#9B9B9B",
          550: "#6A6A6A",
        },
        gray: {
          150 : "#F3F3F3",
          160: "#333333",
          170: "#3D3D3D",
          180: "#D1D1D1",
          190: "#EFEFEF",
          220: "#999999",
          230: "#6C6C6C",
        },
        yellow: {
          lightYellow: "#EBFF0033",
          50: "#fdfdea",
          100: "#fdf6b2",
          200: "#fce96a",
          300: "#faca15",
          400: "#e3a008",
          500: "#c27803",
          600: "#9f580a",
          700: "#8e4b10",
          800: "#723b13",
          900: "#633112",
        },
        green: {
          darkGreen: "#5BCE48",
          lightGreen: "#28CA0D33",
          50: "#f3faf7",
          100: "#def7ec",
          200: "#bcf0da",
          300: "#84e1bc",
          400: "#31c48d",
          500: "#0e9f6e",
          600: "#057a55",
          700: "#046c4e",
          800: "#03543f",
          900: "#014737",
        },
        blue: {
          400: "#3A82E9",
        },
      },
    },
  },
  plugins: [],
};
