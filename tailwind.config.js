/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        st: '414px'
      },
      colors: {
        grad: "#8EC5FC",
      },
      backgroundImage: {
        gradient: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
      }
    },
  },

  plugins: [],
}
