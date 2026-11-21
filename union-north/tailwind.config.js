/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--navy)",
          dark: "var(--navy-dark)",
          light: "var(--blue)",
        },
        navy: {
          DEFAULT: "var(--navy)",
          dark: "var(--navy-dark)",
          light: "var(--blue)",
        },
        blue: {
          DEFAULT: "var(--blue)",
          royal: "var(--blue)",
        },
        tint: "var(--tint)",
        bg: "var(--bg)",
        accent: {
          DEFAULT: "var(--accent)",
          amber: "var(--accent)",
        },
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        eyebrow: "0.12em",
      },
    },
  },
  plugins: [],
};
