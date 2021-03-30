module.exports = {
  purge: ['./index.html', './src/*/.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      colors: {
        cyan: {
          light: '#67E6EE',
          DEFAULT: '#39C7D0',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
