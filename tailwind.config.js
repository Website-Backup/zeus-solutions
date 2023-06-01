/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'textGrey': '#62656C',
        'textOrange': '#FE0000',
        'backgroundGrey':'#62656C',
        'footerBlack':'#232323',
        'bgGrey':	'#6A6D77',
        'bgOrange':'#F3AA5F',
        'bgOrange2':'#E97000',
        'bgBrown':'#5a2d03',
        'bgWhite':"#F1F1F1",
        'bgGrey2':"#3f3E3D",
        'bgGrey3': "#EEEEEE",
      }
    },
    backgroundImage: {
      'HomepageLanding': "url('/components/assets/Homepage.webp')",
    },
    fontFamily: {
      dmserif: ['DM Serif Display', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
      jost: ['jost','serif'],
      anton: ['anton','sans-serif'],
      montserrat:['Montserrat','sans-serif']
      
    }
  },
  plugins: [],
}