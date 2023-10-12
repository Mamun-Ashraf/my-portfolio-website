/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        portfoliotheme: {
          primary: "#3F5afe",
          secondary: "#d343f5",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {
    },
  },
  plugins: [require("daisyui")],
}

