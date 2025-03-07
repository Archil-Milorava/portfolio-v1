import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Prata: ["Prata", "serif"],
        Italiana: ["Italiana", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
        Garamond: ["Garamond", "serif"],
        Dance: ["Moon Dance", "cursive"],
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        white: "#ffff",
        dark: "#1C1B19",
        beige: "#EDE7DB",
        yellow: "#FFEA9E",
        orange: "#FF8863",
        silver: "#9BBBDC",
        purple: "#959EFF",
        blue: "#5ca1ec",
      },
      backgroundImage: {
        f1: "url('/public/f1.jpg)",
      },
    },
  },
  plugins: [daisyui],
};
