/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'lh': '102px'
      },
      color: {
        'sp': '#4D4D4D'
      },
    },
  },
  plugins: [],
}
