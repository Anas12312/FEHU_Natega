/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sansation': ['SansationRegular', 'sans-serif'],
        'Sansation-Italic': ['SansationItalic', 'sans-serif'],
        'Sansation-Bold': ['SansationBold', 'sans-serif'],
        'Sansation-Light': ['SansationLight', 'sans-serif']
      }
    },
  },
  plugins: [],
}