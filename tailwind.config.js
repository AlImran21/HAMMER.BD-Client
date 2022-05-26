module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        hammertheme: {

          "primary": "#333",

          "secondary": "#FF7300",

          "accent": "#635BFF",

          "neutral": "#191A3E",

          "base-100": "#E4E5E9",

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
