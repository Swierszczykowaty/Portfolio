/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'bg': '#121422',
        'background': '#121422',
        'text': '#dbe0f8',
        'primary': '#858ee6',
        'seconary': '#4c1e91',
        'accent': '#8c38d6',
        'primary2': '#EDE34C',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}