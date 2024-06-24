/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        yellow: {
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          retroGreen: "#32CD32", // Customize this hex code as needed for your retro green
        },
      },
    },
  },
  plugins: [],
};
