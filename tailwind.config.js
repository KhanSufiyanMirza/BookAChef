/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode strategy
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35", // A vibrant orange color for CTAs
        secondary: "#2B9EB3", // A teal/blue color for secondary elements
        dark: "#343A40", // Dark color for text
        light: "#F8F9FA", // Light color for backgrounds
        accent: "#44BBA4", // An accent color for highlights
        // Dark mode colors
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-text': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundColor: {
        'dark-gradient-start': '#1a1a1a',
        'dark-gradient-end': '#2d2d2d',
      },
    },
  },
  plugins: [],
} 