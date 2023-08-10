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
        "whitebgs": "#DCF7FB66",
        "shoesbg": "#CA021C",
        "colorings": "#FFFFFF",
      }
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
  plugins: [],
}

