module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blue1:"#0E0E38",
        blue2:"#2C3E50",
        grayUi:"#EFF0F1",
        gray2:"#E5E5E5"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merriweather:["Merriweather", "sans-serif"]
      },
      backgroundImage: {
        hero: "url('./../images/banner.png')"
      },
      container: {
        padding: "2rem"
      },
      
    }
  },
  plugins: []
};
