/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f1b14',
        brand: {
          50: '#eefdf3',
          100: '#d6f8e1',
          200: '#aeefc7',
          300: '#78e1a6',
          400: '#43cb82',
          500: '#22b568',
          600: '#169454',
          700: '#147645',
          800: '#145d39',
          900: '#124d31',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
      },
    },
  },
  plugins: [],
}
