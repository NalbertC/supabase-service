/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#eff6fe",
        primary: "#023f85",
      },
      fontFamily: {
        regular: "Ubuntu_400Regular",
        medium: "Ubuntu_500Medium",
        bold: "Ubuntu_700Bold",
      },
    },
  },
  plugins: [],
};
