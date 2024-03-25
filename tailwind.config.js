/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ScribbleChild: "ScribbleChild",
        ScribbleHand: "ScribbleHand",
        MonaSans: "Mona Sans",
      },

      colors: {
        "keng-red": "hsl(0, 67%, 47%)",
        "keng-brown": "hsl(36, 37%, 52%)",
        "keng-gold": "hsl(50, 69%, 60%)",
        "keng-gold-light": "hsl(50, 100%, 85%)",
        "keng-gold-dark": "hsl(51, 74%, 54%)",
        "keng-text": "hsl(34, 59%, 88%)",
      },
    },
  },
  plugins: [],
};
