module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors:{
        grayUi: "#132B50",
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
