module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '80':'80px'
      },
      height:{
        '80':'80px'
      },
      
      fontFamily:{
        "pacifico":['"Pacifico"','cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
