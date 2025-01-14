/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
          'Poppins': ['Poppins','sans-serif'],
          
      },
      boxShadow: {
        'text-xs': '1px 1px 2px rgba(0, 0, 0, 0.1)',
        'text-sm': '2px 2px 4px rgba(0, 0, 0, 0.1)',
        'text-lg': '3px 3px 6px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

