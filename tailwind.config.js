/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': {
          DEFAULT: '#0A4835', // Dark green from the logo
          light: '#136b4f',   // Lighter variant for hover states
          dark: '#083a2a'     // Darker variant
        }
      },
      fontFamily: {
        'heading': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Epilogue', 'Arial', 'sans-serif'],
        'merriweather': ['Merriweather', 'Georgia', 'serif'],
        'cormorant': ['Cormorant Garamond', 'Times New Roman', 'serif'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      transform: {
        'translate-z-0': 'translateZ(0)',
      },
    },
  },
  safelist: [
    'hover:bg-brand-green',
    'hover:text-white',
    'duration-500',
    'h-full',
    'text-brand-green',
    'focus:ring-brand-green-light',
    'border-gray-300',
    'space-y-2',
    'translate-z-0',
  ],
  plugins: [],
} 