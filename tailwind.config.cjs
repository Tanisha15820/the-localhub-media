/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
      // colors: {
      //   primary:       "#D97757",
      //   bgMain:        "#F5F0E8",
      //   bgSoft:        "#EDE8D9",
      //   card:          "#F0EBE1",
      //   textPrimary:   "#1A1A1A",
      //   textSecondary: "#8C8C8C",
      // },
         colors: {
        primary: "#FFFFFF",   // White
        secondary: "#2096F3", // Blue
        accent: "#110429",    // Dark Purple
      },
      animation: {
        fadeUp:        "fadeUp 0.8s ease both",
        fadeUpDelay:   "fadeUp 0.9s 0.2s ease both",
        scrollPulse:   "scrollPulse 2s ease infinite",
        scroll:        "scroll 10s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.25" },
          "50%":      { opacity: "0.7" },
        },
        scroll: {
          "0%":   { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
    },
  },
  plugins: [],
};



