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
          DEFAULT: '#184435', // Dark green from the logo
          light: '#245c49',   // Lighter variant for hover states
          dark: '#123629'     // Darker variant
        }
      },
      fontFamily: {
        'sans': ['Proxima Nova', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'heading': ['Proxima Nova', 'Arial', 'sans-serif'],
        'body': ['Proxima Nova', 'Arial', 'sans-serif'],
        'merriweather': ['Merriweather', 'Georgia', 'serif'],
        'cormorant': ['Cormorant Garamond', 'Times New Roman', 'serif'],
      },
      transform: {
        'translate-z-0': 'translateZ(0)',
      },
      animation: {
        'pulse-slow': 'pulse 11s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
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
    // Aspect ratio classes
    'aspect-w-16',
    'aspect-h-9',
    // Hover transform classes
    'transition-transform',
    'duration-300',
    'hover:-translate-y-2',
    // Animation classes
    'animate-pulse-slow',
    'animate-pulse-slower',
    'rounded-full',
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
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 