/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./page/**/*.html"],
  theme: {
    extend: {
      colors: {
        title: "#2A3890",
        dark_text: "#111827",
        quots: "#435DB8",
        primary: '#2A3890',
        dark: '#DEDEDE',
      },
      letterSpacing: {
        wide: ".075em",
      },
    },
  },
  plugins: [],
}