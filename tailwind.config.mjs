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
      backgroundImage: {
        "timeline-gradient":
          "linear-gradient(0deg, #000000 5%, #EF7226 10%, #EF7226 90%, #000000 95%)",
        "timeline-bg-black-gradient":
          "linear-gradient(0deg, #000000, #00000000 20%, #00000000 80%, #000000 100%)",
        "hero-grids": "url('/images/Grid.svg')",
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
