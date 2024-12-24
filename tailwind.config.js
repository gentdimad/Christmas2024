/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        backgroundImage: {
          'wood-pattern': "url('./src/assets/background.jpg')",
        }
    }
  }
},
  plugins: [],
}

