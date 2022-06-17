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
      width: {
        'imgw': '647px',
        'cardw': '375px'
      },
      height: {
        'imgh': '388px',
        'cardh': '375px'
      },
      color: {
        'sp': '#4D4D4D'
      },
    },
  },
  plugins: [],
}
