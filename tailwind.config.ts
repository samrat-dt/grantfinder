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
          secondary: "#F8FAFC",
        },
        foreground: {
          DEFAULT: "#1A1F2C",
          secondary: "#4A5568",
        },
        primary: {
          DEFAULT: "#1A1F2C",
          foreground: "#FFFFFF",
          accent: "#8B5CF6",
          light: "#EEF2FF",
          dark: "#312E81",
        },
        secondary: {
          DEFAULT: "#F8FAFC",
          foreground: "#1A1F2C",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1F2C",
        },
        text: {
          DEFAULT: "#1A1F2C",
          muted: "#64748B",
        },
        status: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
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
      fontSize: {
        "heading-desktop": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "subheading-desktop": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "heading-mobile": ["2rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "subheading-mobile": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        body: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        caption: ["0.875rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)',
        'gradient-secondary': 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;