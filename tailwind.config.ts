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
      colors: {
        border: "hsl(var(--border))",
        background: {
          DEFAULT: "#FFFFFF",
          secondary: "#F8F9FA",
        },
        foreground: {
          DEFAULT: "#000000",
          secondary: "#4A4A4A",
        },
        primary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
          accent: "#007AFF",
          light: "#E8F2FF",
          dark: "#003366",
        },
        secondary: {
          DEFAULT: "#F8F9FA",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#FF3B30",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#4A4A4A",
        },
        accent: {
          DEFAULT: "#007AFF",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        text: {
          DEFAULT: "#000000",
          muted: "#4A4A4A",
        },
        status: {
          success: "#34C759",
          warning: "#FF9500",
          error: "#FF3B30",
        },
      },
      fontFamily: {
        sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        button: "0.75rem",
        card: "1rem",
        input: "0.75rem",
      },
      fontSize: {
        "heading-desktop": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "subheading-desktop": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "heading-mobile": ["2rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "subheading-mobile": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        body: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        caption: ["0.875rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;