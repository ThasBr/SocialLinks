/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green': 'hsl(75, 94%, 57%)',
        'white': 'hsl(0, 0%, 100%)',   
        'grey-700': 'hsl(0, 0%, 20%)', 
        'grey-800': 'hsl(0, 0%, 12%)', 
        'grey-900': 'hsl(0, 0%, 8%)',  
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

