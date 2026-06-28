/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f5f0ff',
            100: '#ede5ff',
            200: '#dccdff',
            300: '#c4aaff',
            400: '#a882ff',
            500: '#8a5cff',
            600: '#6C3CE1',
            700: '#5a2fc7',
            800: '#4a26a8',
            900: '#3a1e85',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'float-delay': 'float 6s ease-in-out 2s infinite',
          'float-delay-2': 'float 6s ease-in-out 4s infinite',
          'fade-up': 'fadeUp 0.8s ease-out forwards',
          'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-12px)' },
          },
          fadeUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          pulseSoft: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.6' },
          },
        },
      },
    },
    plugins: [],
  }