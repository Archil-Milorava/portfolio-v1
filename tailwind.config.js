/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Prata: ["Prata", "serif"],
        SerifDisplay: ["DM Serif Display", "serif"],
        Cormorant: ["Cormorant Garamond", "serif"],
        Italiana: ["Italiana", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        dark: "#1C1B19",
        beige: "#EDE7DB"
      }
    },
  },
  plugins: [],
};
