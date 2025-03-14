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
        red: '#ff595e',
        yellow: '#ffca3a',
        green: '#8ac926',
        blue: '#1982c4',
        purple: '#6a4c93',
      }
    },
  },
  plugins: [],
}

