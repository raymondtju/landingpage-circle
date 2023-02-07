/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        textSecond: "#9D9D9D",
      },
      maxWidth: {
        1440: "1440px",
      },
      backgroundImage: {
        "bg-2": "url('/images/bg-2.png')",
        // moon: "url('/icons/moon.svg')",
      },
      screens: {
        "144w": "1440px",
        mini: "100px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("prettier-plugin-tailwindcss")],
};
