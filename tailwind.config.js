module.exports = {
  
  purge: 
  ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html',
  "./pages/**/*.vue", 
    "./components/**/*.vue", 
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./store/**/*.vue"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.cyan,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.amber,
      red: colors.red,
      green: colors.lime,
    },
  },
}

