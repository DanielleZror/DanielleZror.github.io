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
        },
        image: {
          "0%": {
            "background-image": "linear-gradient(rgb(32 32 32 / 80%), rgb(32 32 32 / 80%)), url(/public/Profile.png)"
          },
          "10%": {
            "background-image": "linear-gradient(rgb(32 32 32 / 82%), rgb(32 32 32 / 82%)), url(/public/Profile.png)"
          },
          "20%": {
            "background-image": "linear-gradient(rgb(32 32 32 / 84%), rgb(32 32 32 / 84%)), url(/public/Profile.png)"
          },
          "30%": {
            "background-image": "linear-gradient(rgb(32 32 32 / 86%), rgb(32 32 32 / 86%)), url(/public/Profile.png)"
          },
          "40%": {
            "background-image": "linear-gradient(rgb(32 32 32 / 88%), rgb(32 32 32 / 88%)), url(/public/Profile.png)"
          },
          "50%": {
            "background-image": "linear-gradient(rgb(32 32 32 / 90%), rgb(32 32 32 / 90%)), url(/public/Profile.png)"
          },
          "60%": {
            "background-image": "linear-gradient(rgb(32 32 32 / 92%), rgb(32 32 32 / 92%)), url(/public/Profile.png)"
          },
          "70%": {
            "background-image": "linear-gradient(rgb(32 32 32 / 94%), rgb(32 32 32 / 94%)), url(/public/Profile.png)"
          },
          "80%": {
            "background-image": "linear-gradient(rgb(32 32 32 / 96%), rgb(32 32 32 / 96%)), url(/public/Profile.png)"
          },
          "90%": {
            "background-image": "linear-gradient(rgb(32 32 32 / 98%), rgb(32 32 32 / 98%)), url(/public/Profile.png)"
          },
          "100%": {
            "background-image": "none"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(24) infinite alternate, blink 4s infinite linear",
        image: "image 0.3s alternate",
        "image-reverse": "image 0.8s reverse"
      },
      gridTemplateColumns: {
        '2': '160px 1fr'
      },
      backgroundImage: {
        'profile-pic': "linear-gradient(rgb(32 32 32 / 80%), rgb(32 32 32 / 80%)), url(/public/Profile.png)"
      },
      backgroundPosition: {
        'right-bottom': 'right -5rem bottom -5rem'
      }
    }
  },
  plugins: [],
}

