/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-base': '#ffe5bf', // Beige
        'brand-surface': '#ffffff', // Blanco
        'brand-dark': '#2c1e16', // Deep warm dark for readable text, since black wasn't provided
        'brand-accent': '#f09cb6', // Rosa
        'brand-muted': '#e48a5c', // A darker orange variant for hover/accents
        
        // Brand Manual exact codes requested:
        'brand-orange': '#ed733e',
        'brand-yellow': '#f7d031',
        'brand-pink': '#f09cb6',
        'brand-beige': '#ffe5bf',
        'brand-white': '#ffffff',
        
        // Legacy mapping to avoid breaking anything that used purple
        'brand-purple': '#ed733e', // Mapped to orange since purple was removed
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Baloo 2"', 'sans-serif'], // Usamos Baloo 2 para encabezados y acentos juguetones
      }
    },
  },
  plugins: [],
}
