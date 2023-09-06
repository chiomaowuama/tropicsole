/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "firstred": "#CD081D",
        "productsred": "#840303 ",
        "verydarkred": "#410E0E ",
        "darkishash": " #312D32",
        "redishbtn": "#B40D0D",
        "textred":"#FF001B",
        "detailred":"#C9011B",
        "whitebgs": "#DCF7FB66",
        "shoesbg": "#CA021C",
        "colorings": "#FFFFFF",
        "sidenav":"#760909",
        "line":"#F22626",
        "orangebtn":"#FF5C01"
       
        
      },
      keyframes: {
        slide: {
          '0% , 100%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        bounce:  {
          '0%, 100%':  {
            transform:'translateY(-5%)',
            timingfunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform:'translateY(0)',
            timingfunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
    
        
      },
     
    },
    animation: {
      'slide': 'slide 10s ease-in-out infinite ',
      'animation-play-state':'paused',
      'bounce': 'bounce 1s infinite',
    },
    fontFamily: {
      inter:["inter"],
    },
    container: {
      padding:"1rem",
    },
    screens: { 
      sm:"640px",
      md:"768px",
      lg:"976px",
      xl:"1440px",
    }
    
  },
  plugins: [require('tailwind-scrollbar')],
}

