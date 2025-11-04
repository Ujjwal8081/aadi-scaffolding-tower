/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
          extend: {
            colors: {
              "primary": "#0A2342", 
              "secondary": "#8D99AE",
              "accent": "#294d7b",
              "background-light": "#F4F7F9",
              "background-dark": "#05111F", 
              "text-light": "#2B2D42",
              "text-dark": "#EAEFF5"
            },
            fontFamily: {
              "display": ["Inter", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
  },
  plugins: [],
}
