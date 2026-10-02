/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      colors: {
        canvas: '#FBFBF9',
        canvasMuted: '#F4F4F1',
        borderSubtle: '#E5E5E0',
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
      }
    },
  },
  plugins: [],
}