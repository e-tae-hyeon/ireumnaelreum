/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Gmarket"],
      },
      colors: {
        primary: "#2563EB",
        black: "#171717",
      },
    },
  },
  plugins: [],
};
