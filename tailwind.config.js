/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'lightbg': 'rgba(248, 147, 31, 0.05)',
      'navhover': '#9A9999',
      'navbg': '#B7B7B7',
      'hero-head': '#4D4D4D',
      'hero-hd': '#4F4F4F',
      'yell-brd': '#FDEE21',
      'hero-prg': '#6F6F6F',
      'orange': '#F8931F',
      'orange-lh': '#FFEFDD',
      'sec-parg': '#565454',
      'pagebg': '#F5F5F5',
      'black': '#000000',
      'light-orng': 'rgba(253, 218, 33, 0)',
      'ic1bg': '#FFFBC0',
      'ic2bg': '#FEE0D7',
      'ic3bg': '#F0FFC2',
      'ic4bg': '#C8E8FF',
      'ic1-text': '#77331F',
      'ic2-text': '#CF1256',
      'ic3-text': '#5B760C',
      'ic4-text': '#0A4E7E',
      'ic2': '#FEE0D7',
      'ic3': '#6C8D0C',
      'smal': 'rgb(245, 101, 101)',
      'card1': 'rgb(157, 157, 157)',
      'card2': 'rgb(7, 121, 228)',
      'card3': 'rgb(255, 199, 41)',
      'white': '#fff'
    },
    fontFamily: {
      'poppins': ['Poppins, sans-serif']
    },
    extend: {
      lineHeight: {
        'lh': '102px'
      },
      width: {
        'imgw': '647px',
        'aw': '100px',
        'aw1': '80px',
        'aw2': '60px',
        'cardw': '375px',
        'txtw': '602px',
        'brdw': '112px',
        'brdw1': '212px',
        'subw': '819px',
        'imw': '619px',
        'mdw': '500px',
      },
      maxWidth: {
        '3.5xl': '800px',
        '550': '550px',
        '500': '500px',
        '850': '850px',
        '650': '650px',
        '1150': '1150px',
        '200': '200%',
        '100': '100%',
        'vh': '100vh',
      },
      height: {
        'imgh': '321px',
        'ah': '99px',
        'ah1': '79px',
        'ah2': '59px',
        'cardh': '375px',
        'ic-card': '350px',
        'ic-fd': '314px',
        'txth': '159px',
        'subh': '102px',
      },
      padding: {
        '5.5': '1.4rem',
        '17': '5rem',
        '2.25': '0.9rem',
        '6.5': '1.7rem',
        '2.5': '2.5rem',
        '4.5': '1.2rem'
      },
      margin: {
        'fm': '644px',
        'bm': '124px',
        'txm': '424px',
      },
      backgroundColor: {
        'grtext': '#4D4D4D', 
        'coltext': '#565454', 
        'sec': '#F5F5F5', 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
