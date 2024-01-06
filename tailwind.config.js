/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0E3663',
        'secondary-blue': '#5978A9',
        'info-green': '#6CA589',
        'succes-green': '#0B5D37',
        'pigore-gray': '#798190',
        'pigore-red': '#bd0113'
      },
      backgroundImage: {
        'close-menu':  "url('../images/icon-close.svg')",
        'open-menu': "url('../images/icon-hamburger.svg')",
      },
      fontFamily: {
        'kanit': ['Kanit',],
      }
    },
  },
  plugins: [],
}

