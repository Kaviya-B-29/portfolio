/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#374151'
      }
    },
    container: {
      center: true,
      padding: '1rem',
    }
  },
  plugins: [],
}
