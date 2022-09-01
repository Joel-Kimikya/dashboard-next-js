/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blck: '#FAFAFA',
        choco: '#E1D4C4',
      },
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
    },
  },
  plugins: [],
};
