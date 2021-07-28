module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '384': '72rem',
       
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
