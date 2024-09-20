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
        "orange-glow-bright": "0px 0px 25px #EF722690",
        "white-glow": "0px 0px 10px #FFFFFF60",
      },
      boxShadow: {
        'white-glow': '0 0 5px #fff, 0 0 3px #fff',
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
