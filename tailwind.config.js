/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.md",
    "./src/**/*.njk",
    "./src/js/**/*.js"
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
        'sans': ['Fira Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'heading': ['Fira Sans', 'Arial', 'sans-serif'],
        'body': ['Fira Sans', 'Arial', 'sans-serif'],
        'merriweather': ['Merriweather', 'Georgia', 'serif'],
        'cormorant': ['Cormorant Garamond', 'Times New Roman', 'serif'],
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
    'transition-opacity',
    'duration-1000',
    'ease-in-out',
    'opacity-0',
    'opacity-100',
    'z-0',
    'z-10',
    // Classes below are now defined directly in custom.css using @apply
    // 'transition-opacity',
    // 'duration-1000',
    // 'ease-in-out',
    // 'opacity-0',
    // 'opacity-100',
    // 'z-0',
    // 'z-10',
    // 'duration-500',
    // 'h-0',
    // 'overflow-hidden',
    // 'bg-yellow-100',
    // 'border-yellow-400',
    // 'text-yellow-800'
  ],
  plugins: [],
} 