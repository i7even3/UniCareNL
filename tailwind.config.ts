/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        unicare: {
          light: '#E6F0FF',
          DEFAULT: '#A0C4FF',
          dark: '#2C3E50',
        },
        accent: '#C3B1E1',
        secondary: '#B8E8C2',
      },
    },
  },
  plugins: [],
}

