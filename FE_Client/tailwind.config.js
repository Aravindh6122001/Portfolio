/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 1s linear infinite",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        // Add additional spacing sizes if needed
        18: "4.5rem", // Example size for gaps
      },
      screens: {
        xs: "350px",
        sm: "640px",
        md: "720px",
        lg: "960px", // Optional, for larger screens
      },
      colors: {
        bgDark: "#242424",
        bgLight: "#fff",
        textDark: "#242424",
        textLight: "#fff",
      },
    },
  },
  plugins: [],
};
