/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
      },
      ffontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'vt323': ['"VT323"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse-slow 5s infinite ease-in-out',
        'pan-background': 'pan-background 60s linear infinite',
        'scanlines': 'scanlines 1s linear infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.6 },
        },
        'pan-background': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'scanlines': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        }
      },
      boxShadow: {
        'inset-glow': 'inset 0 0 15px rgba(255,255,0,0.8), 0 0 20px rgba(255,255,0,0.5)',
      }
    },
  },
  plugins: [],
};