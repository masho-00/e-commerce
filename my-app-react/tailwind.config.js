/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundvdeos:{
        'hero': "url('https://cdn.pixabay.com/video/2024/09/09/230471_tiny.mp4')",
      },
      }
  },
  plugins: [],
}