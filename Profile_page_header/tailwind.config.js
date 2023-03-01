module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        grayUi: "#E5E5E5",
        whiteUi:"#FFFAF2",
        orangeUi:"#F17A37",
        violetUi:"#13143C"
      },
      
      backgroundImage: {
        hero: "url('./../images/banner.png')"
      },
      container: {
        padding: "2rem"
      }
    }
  },
  plugins: []
};
