/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens:{
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "var(--font-jetBrainsMono)",
      sans: ['var(--font-geist)', 'sans-serif'],
      mono: ['var(--font-jetBrainsMono)', 'monospace'],
    },
    extend: {
      colors: {
        primary: '#1C1C22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187'
        }
      },
      keyframes:{
        "acordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "acordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        }
      },
      animation: {
        "acordion-down": "acordion-down 0.2s ease-out",
        "acordion-up": "acordion-up 0.2s ease-out"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
