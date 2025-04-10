import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bla: ["bla", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"]
      },
      colors: {
        white: "#ffff",
        dark: "#1C1B19",
        beige: "#F5F5ED",
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
