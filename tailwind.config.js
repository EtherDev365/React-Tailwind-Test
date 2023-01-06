/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
