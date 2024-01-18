/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["TitilliumWeb", "sans-serif"],
      },
      colors: {
        "white-c": "#e7e4ea",
        "green-c": "#a5feaf",
        "darkgray-c": "#25232a",
        "lightgray-c": "#54525a",
      },
    },
  },
  plugins: [],
};
