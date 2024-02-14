/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/*.js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '500px',
        'sm': '600px',
        'md': '960px',
        'lg': '1280px',
        'xl': '1920px'
      },
      colors: {
        black: {
          200: '#282727',
          DEFAULT: '#202020',
          400: '#151515'
        },
        gray: {
          DEFAULT: '#E0E0E2',
          400: '#B2B2B4'
        },
        pink: {
          200: '#E9A5C5',
          DEFAULT: '#F64293',
          400: "#D44283"
        },
        white: {
          DEFAULT: '#FDFCFA',
          300: '#fbf9f5',
          400: '#eee9df'
        }
      },
      backgroundColor: {
        pink: {
          200: '#E9A5C5',
          DEFAULT: '#F64293'
        },
        black: {
          200: '#282727',
          DEFAULT: '#202020',
          400: '#151515'
        },
        white: {
          DEFAULT: '#FDFCFA',
          300: '#fbf9f5',
          400: '#eee9df'
        }
      },
      lineHeight: {
        '12': '3.5rem'
      },
      gridTemplateColumns: {
        '2': '160px 1fr'
      },
      backgroundImage: {
        'profile-pic-dark': "linear-gradient(rgb(32 32 32 / 80%), rgb(32 32 32 / 80%)), url(/public/Profile.png)",
        'profile-pic': "linear-gradient(rgb(251 249 245 / 80%), rgb(251 249 245 / 80%)), url(/public/Profile.png)"
      },
      backgroundPosition: {
        'right-bottom': 'right -3rem bottom -3rem'
      }
    }
  },
  plugins: [],
}

