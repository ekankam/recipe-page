/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          100: "var(--color-stone-100)",
          150: "var(--color-stone-150)",
          600: "var(--color-stone-600)",
          900: "var(--color-stone-900)",
        },
        brown: {
          800: "var(--color-brown-800)",
        },
        rose: {
          50: "var(--color-rose-50)",
          800: "var(--color-rose-800)",
        },
        "cc-white": "var(--color-white)",
      },
      fontFamily: {
        serif: ["var(--ff-young-serif)"],
        outfit: ["var(--ff-outfit)"],
      },
    },
  },
  plugins: [],
};
