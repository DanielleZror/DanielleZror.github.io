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
          DEFAULT: '#E0E0E2',
          400: '#B2B2B4'
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
      },
      lineHeight: {
        '12': '3.5rem'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "50%": {
            width: "100%"
          }
        },
        blink: {
          "0%": {
            borderColor: "white"
          },
          "48%": {
            borderColor: "transparent"
          },
          "58%": {
            borderColor: "white"
          },
          "68%": {
            borderColor: "transparent"
          },
          "82%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(24) infinite alternate, blink 4s infinite linear"
      }
    }
  },
  plugins: [],
}

