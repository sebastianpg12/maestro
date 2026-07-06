/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f1b14',
        // Verde tomado directamente del logo de Maestro Animal (#39bba2).
        brand: {
          50: '#effaf8',
          100: '#dcf4f0',
          200: '#b5e8de',
          300: '#82d9c8',
          400: '#5bcdb7',
          500: '#39bba2',
          600: '#2d9581',
          700: '#247566',
          800: '#1d5e51',
          900: '#15463d',
          950: '#0f332c',
        },
        // Naranja del slogan del logo, para acentos puntuales.
        accent: {
          50: '#fef1ec',
          100: '#fde1d6',
          400: '#f4835f',
          500: '#f16443',
          600: '#dd4726',
          700: '#b8391f',
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
