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
          !text-[#FF0000]: '#CC0000',
          dark: '#111111',
        }
      }
    },
  },
  plugins: [],
}