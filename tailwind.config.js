module.exports = {
  purge: ['./public/index.html', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      colors: {
        cyan: {
          light: '#4BCBD2',
          dark: '#299DA3',
          DEFAULT: '#2EB1B9',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
