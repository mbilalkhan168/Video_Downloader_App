/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F9D27D",
          DEFAULT: "#F4B840",
          dark: "#E5A020"
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#000000",
          gray: "#F5F5F5"
        },
        text: {
          primary: "#000000",
          secondary: "#666666",
          light: "#999999"
        }
      }
    }
  },
  plugins: [],
};
