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
        natural: {},
        pink: {
          100: '#E3CDD9',
          200: '#E6B9CF',
          DEFAULT: '#F64293',
          400: "#D44283"
        }
      },
      backgroundColor: {
        natural: {
          DEFAULT: '#fbf9f5',
          dark: '#eee9df',
        },
        pink: {
          DEFAULT: '#F64293'
        },
        black: {
          light: '#282727',
          DEFAULT: '#202020',
          dark: '#151515'
        }
      }
    }
  },
  plugins: [],
}

