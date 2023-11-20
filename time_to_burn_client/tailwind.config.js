/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "nav-bar-color": "#eef2ff", "nav-text-color": "#430c0c" },
      fontFamily: {
        Noto: ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
