module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greenFresh: '#8BAC3E',
        light1: '#757575',
        lightGray2: '#F2F2F2',
        redHot: '#E7462D',
        dark: '#333',
        pizzaColor: '#E6F3F5',
        kebabColor: '#EAEEFA',
        salmonColor: '#F9EEF3',
        cupcakeColor: '#F0FEEB',
        doughnutColor: '#F3F7D9',

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
