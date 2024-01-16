/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "sm": "560px",
      "md": "700px",
      "lg": "922px",
      "xl": "1150px"
    }
  },
  plugins: [],
}

