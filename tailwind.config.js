module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        sky950: '#093454',
        creamL:'#FCEFE4'
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
        playfair: ['Playfair Display', 'serif'],
        inter:['Inter','sans-serif'],
        montserrat:['Montserrat', 'sans-serif'],
        raleway:['Raleway', 'sans-serif']
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
}
