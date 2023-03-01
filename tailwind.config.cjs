/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        quiz: 'url("../background.png")',
      },
    },
    fontFamily: {
      poppins: "Poppins",
    },
    colors: {
      yellow: {
        500: "#F9A826",
      },
      blue: {
        500: "#2F527B",
      },
      purple: {
        500: "#6066D0CC",
      },
      cian: {
        500: "#6FCF97",
      },
    },
  },
  plugins: [],
};
