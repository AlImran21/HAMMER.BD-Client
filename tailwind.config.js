module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        hammertheme: {

          "primary": "#FF00F2",

          "secondary": "#FF7300",

          "accent": "#CAFC03",

          "neutral": "#191A3E",

          "base-100": "#FAFAFA",

          "info": "#3194F6",

          "success": "#5EC992",

          "warning": "#F7E02B",

          "error": "#E60400",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
