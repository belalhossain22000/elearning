/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#309255', 
        secondary: '#212832',
        background:'#EEFBF3'
        
      },
    },
  },
  plugins: [require("daisyui")],
};
