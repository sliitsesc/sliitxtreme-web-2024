/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "#EF7226",
          blue: "#11A3D6",
        },
      },
      dropShadow: {
        "orange-glow": "0px 0px 10px #EF722690",
        "white-glow": "0px 0px 10px #FFFFFF60",
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
