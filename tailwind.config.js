/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RunesLines: "AnglosaxonRunesLines",
        ScribbleChild: "ScribbleChild",
      },

      colors: {
        "keng-red": "hsl(0, 67%, 47%)",
        "keng-brown": "hsl(36, 37%, 52%)",
        "keng-gold": "hsl(50, 69%, 60%)",
      },
    },
  },
  plugins: [],
};
