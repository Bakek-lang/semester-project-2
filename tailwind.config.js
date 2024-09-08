/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*/.{js,ts,jsx,tsx,mjs,cjs}",
    "./**/*.html",
    ".src/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
