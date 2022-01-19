module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'border-raidus': 'border-radius',
        ringWidth: {
          'DEFAULT': '1px',
          '1': '6px'
        }
      },
      fontFamily: {
        roboto: "'roboto', serif",
        ZenKaku: "'ZenKaku', mono"
      },
      colors: {
        'pallet-yellow': {
          400: '#E7C23E',
          800: '#82795a'
        },
        'pallet-white': {
          400: '#EDEDED'
        }
      }
    },
    keyframes: {
      "fadeIn": {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(1.25)',
          opacity: 0
        }
      }
    },
    animation: {
      'fadeIn': 'fadeIn .7s ease-in',
      ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
    }
  },
}
