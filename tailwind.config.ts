import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        'heading-desktop': ['48px', '1.1'],
        'heading-mobile': ['32px', '1.2'],
        'subheading-desktop': ['32px', '1.2'],
        'subheading-mobile': ['24px', '1.3'],
        'body': ['16px', '1.5'],
      },
      colors: {
        border: "hsl(var(--border))",
        background: {
          DEFAULT: "#000000",
          secondary: "#111111",
        },
        foreground: {
          DEFAULT: "#FFFFFF",
          secondary: "#CCCCCC",
        },
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
          accent: "#007AFF",
          light: "#34C759",
          dark: "#ea384c",
        },
        secondary: {
          DEFAULT: "#111111",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#ea384c",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#A3A3A3",
        },
        accent: {
          DEFAULT: "#007AFF",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#111111",
          foreground: "#FFFFFF",
        },
        text: {
          DEFAULT: "#FFFFFF",
          muted: "#A3A3A3",
        },
        status: {
          success: "#34C759",
          warning: "#007AFF",
          error: "#ea384c",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        button: "0.75rem",
        card: "1rem",
        input: "0.75rem",
      },
      boxShadow: {
        'card': '0 4px 12px rgba(255, 255, 255, 0.1)',
        'hover': '0 8px 24px rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;