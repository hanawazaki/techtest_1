module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: 'rgba(139, 172, 62, 1)',
        light1: 'rgba(117, 117, 117, 1)',
      },
      fontFamily: {
        sans: ["'Rubik', sans-serif"],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
