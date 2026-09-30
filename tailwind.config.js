/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0033a5',
        ocean: '#223dd6',
        mint: '#eef2ff',
        ink: '#172033',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(18, 51, 95, 0.10)',
      },
    },
  },
  plugins: [],
};
