module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'robotoslab': ['"Roboto Slab"', 'sans-serif'],
      'sansita': ['"Sansita Swashed"', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/custom-forms')
  ],
}
