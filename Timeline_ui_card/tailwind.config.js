module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merriweather:["Merriweather", "sans-serif"]
      },
      backgroundImage: {
        hero: "url('./../images/banner.png')"
      },
      colors:{
        whiteUi:"#E3E5F1",
        violetUi:"#60679F",
        blackUi:"#10153E"
      },
      container: {
        padding: "2rem"
      }
    }
  },
  plugins: []
};
