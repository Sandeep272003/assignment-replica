/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        card: '#ffffff',
        bg: '#f4f6fb',
        accent: '#ff715b',
        accent2: '#ffb4a2',
        subtle: '#eef2ff'
      },
      boxShadow: {
        card: '0 12px 30px rgba(2,6,23,0.08)',
        soft: '0 6px 18px rgba(15,23,42,0.06)'
      }
    }
  },
  plugins: []
}
