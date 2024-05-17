/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'lv-blue-100': '#eef0fa',
        'lv-blue-200': '#1b2987',
        'lv-orange': '#ed7e25',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
  important: true, // it will add !important to all tailwind classes
}