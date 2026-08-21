/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        honda: {
          red: '#CC0000',
          dark: '#111111',
        }
      }
    },
  },
  plugins: [],
}