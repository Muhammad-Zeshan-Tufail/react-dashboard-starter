/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        success: {
          400: "#72CDA9",
          600: "#62C89F",
        },
        black: "#202224",
        light_gray: "#F5F6FA",
        dark_gray: "#A6A6A6",
        danger: {
          400: "#F57C7C",
          600: "#EA0234",
        },
      },
    },
  },
  plugins: [],
};
