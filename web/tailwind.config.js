/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      ivory: "#E2E2E2",
      asphalt: "#191815",
      hampton: "#E3D4AA",
      eucalyptus: "#7C9B9C",
      backdrop: "#efefef",
      muted: "#999999",
      cambridge: "#21463E",
      ash: "#686868",
      gulf: "#87BBAD",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
