/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        quiz: 'url("./src/assets/background.png")',
      },
    },
    fontFamily: {
      poppins: "Poppins",
    },
  },
  plugins: [],
};
