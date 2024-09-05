/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background-color': '#121212',
      'white-grey': '#e9e9e9',
      'accent': '#77C1B5',
      'light-grey': '#919493',
      'dark-grey': '#242424',
      'transparent': 'transparent',
      'tranparent-gray': "#121212e6"
    },
    screens: {
      'sm': '640px',
      'md': '860px',
      'lg': '1024px',
      'xl': '1175px',
      '2xl': '1500px',
    },
    extend: {},
  },
  plugins: [],
}

