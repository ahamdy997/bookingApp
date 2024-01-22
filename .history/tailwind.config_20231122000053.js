/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        17: "4.25rem",
      },
      width: {
        86: "86.11111%",
      },
      padding: {
        4.5: "1.125rem",
      },fontSize{
        d:"18px"
      }
    },
  },
  plugins: [],
};
