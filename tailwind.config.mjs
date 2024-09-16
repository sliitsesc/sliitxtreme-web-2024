/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // container: {
      //   padding: "1rem",
      // },
      // colors: {
      //   black: "#212b36",
      //   "dark-700": "#090e34b3",
      //   dark: {
      //     DEFAULT: "#111928",
      //     2: "#1F2A37",
      //     3: "#374151",
      //     4: "#4B5563",
      //     5: "#6B7280",
      //     6: "#9CA3AF",
      //     7: "#D1D5DB",
      //     8: "#E5E7EB",
      //   },
      //   primary: "#3758F9",
      //   "blue-dark": "#1B44C8",
      //   secondary: "#13C296",
      //   "body-color": "#637381",
      //   "body-secondary": "#8899A8",
      //   warning: "#FBBF24",
      //   stroke: "#DFE4EA",
      //   "gray-1": "#F9FAFB",
      //   "gray-2": "#F3F4F6",
      //   "gray-7": "#CED4DA",
      // },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
