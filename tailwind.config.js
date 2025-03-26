/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: '#faf9f6',
        black: '#000',
        red: {
          'light': '#ffc7c9',
          'DEFAULT': '#ff595e',
          'dark': '#e51d23'
        },
        yellow: {
          'light': '#fff2c6',
          'DEFAULT': '#ffca3a',
          'dark': '#f99707'
        },
        green: {
          'light': '#bce76f',
          'DEFAULT': '#8ac926',
          'dark': '#4d7417',
        },
        blue: {
          'light': '#4caee4',
          'DEFAULT': '#1982c4',
          'dark': '#145078',
        },
        purple: {
          'light': '#9f82ca',
          'DEFAULT': '#6a4c93',
          'dark': '#4f3a69'
        }
      }
    },
  },
  plugins: [],
}

