/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md : '780px',
      lg: '976px',
      xl: '1440px'
    },
    backgroundSize:{
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%' : '50%',
      '16' : '4rem'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        veryLightGray: 'hsl(88, 0%, 81%)',
        veryLightOrange: 'hsl(20, 88%, 85%)',
      },
    },
  },
  plugins: [],
}
