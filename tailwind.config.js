module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'border-raidus': 'boder-radius',
      },
      fontFamily: {
        roboto: "'roboto', serif"
      },
      colors: {
        'pallet-yellow': {
          400: '#E7C23E',
          800: '#d7ae1b'
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
