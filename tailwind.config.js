/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#4A90E2',
        'brand-primary-dark': '#357ABD',
        'brand-secondary': '#F5A623',
        'brand-dark': '#4A4A4A',
        'brand-off-white': '#F8F8F8',
      },
    },
  },
  plugins: [],
}