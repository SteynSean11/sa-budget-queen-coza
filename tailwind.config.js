/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./{src,components}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-deep-purple': '#422C3B', // Dark Purple/Maroon from palette
        'brand-gold': '#B58E2C',       // Antique Gold from palette
        'brand-highlight-gold': '#FFD700', // Brighter Gold for CTAs & highlights
        'brand-deep-green': '#1A3B2B',  // Deep Forest Green from palette
        'brand-pink': '#E31B6D',       // Bright Pink accent (kept)
        'brand-black': '#0C0C0C',      // Near Black from palette
        'brand-off-white': '#F5F2EB', // Off-white from palette
        'brand-light-grey': '#C5C6C2',// Light Grey from palette
        'brand-beige': '#E1DCD0',     // Beige from palette
        'brand-text-primary': '#1A3B2B', // Deep Green for primary text
        'brand-text-secondary': '#422C3B', // Deep Purple for secondary/heading text

        // Original palette colors for reference or specific use if needed
        'original-brand-purple': '#4A0E60',
        'original-brand-gold': '#FFD700',
        'original-brand-green': '#008037',

        // Utility shades (can be expanded or reduced)
        'amber-50': '#FFFBEB',
        'amber-300': '#FCD34D',
        'amber-400': '#FBBF24',
        'amber-600': '#D97706',
        'emerald-50': '#ECFDF5',
        'emerald-500': '#10B981',
        'emerald-800': '#065F46',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      animation: {
        'modal-appear': 'modal-appear 0.3s ease-out forwards',
      },
      keyframes: {
        'modal-appear': {
          'from': { opacity: '0', transform: 'scale(0.95) translateY(-20px)' },
          'to': { opacity: '1', transform: 'scale(1) translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}