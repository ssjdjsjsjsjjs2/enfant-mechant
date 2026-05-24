/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        neon: {
          blue: "#00d4ff",
          violet: "#7c3aed",
        },
      },
      fontFamily: {
        geist: ["Geist Sans", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%)",
        "gradient-dark": "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
      },
      boxShadow: {
        "neon-glow": "0 0 20px rgba(0, 212, 255, 0.5)",
        "dark-elevation": "0 4px 20px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
}
