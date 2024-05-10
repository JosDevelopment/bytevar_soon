/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blueScale: {
          '50': '#edf8ff',
          '100': '#d6eeff',
          '200': '#b5e2ff',
          '300': '#83d2ff',
          '400': '#48b8ff',
          '500': '#1e95ff',
          '600': '#0674ff',
          '700': '#0060ff',  //primary
          '800': '#084ac5',
          '900': '#0d429b',
          '950': '#0e295d',
        } 
      },
      screens: {
        'xxs': '200px',
        'xs': '400px',
        '4k': '2000px'
      }
    },
  },
  plugins: [],
}

