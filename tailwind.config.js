/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "avenir": ['Avenir', 'system-ui', 'arial'],
        "souvenir": ['souvenir', 'arial']
      }
    },
  },
  plugins: [],
}

