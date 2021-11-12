module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '80':'80px',
        '400':'400px'
      },
      height:{
        '80':'80px',
        '50':'50px',
        '400':'300px'
      },
      
      fontFamily:{
        "pacifico":['"Pacifico"','cursive']
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'med':{'max':'768px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
