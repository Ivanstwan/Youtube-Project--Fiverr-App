/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'fiverr-green': '#1dbf73',
        'fiverr-dark-green': '#013914',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
