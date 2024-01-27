/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/*.js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
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
          DEFAULT: '#E0E0E2'
        },
        pink: {
          200: '#E2D7DE',
          DEFAULT: '#F64293',
          400: "#D44283"
        }
      },
      backgroundColor: {
        pink: {
          DEFAULT: '#F64293'
        },
        black: {
          200: '#282727',
          DEFAULT: '#202020',
          400: '#151515'
        }
      }
    }
  },
  plugins: [],
}

