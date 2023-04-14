/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#F4EBBE',
      'dark-green': '#5F5B40',
      'light-green': '#C9CC65',
      'menu': '#fff9d6',
      'light-hover': '#fff7c9',
      'dark-hover': '#75704a'
    },
    extend: {
      animation: {
        rotateText: 'rotateText 10s linear infinite'
      },
      keyframes: {
        rotateText: {
          '0%': { 'transform': 'rotate(360deg)' },
          '100%': { 'transform': 'rotate(0deg)' }
        }
      }
    },
  },
  plugins: [],
}