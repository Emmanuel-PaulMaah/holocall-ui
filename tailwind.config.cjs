/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#5b8cff",   // primary
          600: "#3e6de8",
          700: "#2f52b8",
          800: "#223c89",
          900: "#1a2e6b",
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "InterVariable", "Inter", "system-ui", "sans-serif"],
        display: ['"Space Grotesk Variable"', "Space Grotesk", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,.35)",
        glow: "0 0 0 1px rgba(129,140,248,.25), 0 8px 40px rgba(90,125,255,.28)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(80% 60% at 90% -10%, rgba(91,140,255,.14), transparent 60%), radial-gradient(70% 60% at 10% 110%, rgba(91,140,255,.12), transparent 60%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
