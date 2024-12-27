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
          DEFAULT: "#FBFBFD",
          secondary: "#F5F5F7",
        },
        foreground: {
          DEFAULT: "#1D1D1F",
          secondary: "#86868B",
        },
        primary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
          accent: "#0066CC",
          light: "#E8F2FF",
          dark: "#003366",
        },
        secondary: {
          DEFAULT: "#F5F5F7",
          foreground: "#1D1D1F",
        },
        destructive: {
          DEFAULT: "#FF3B30",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F5F7",
          foreground: "#86868B",
        },
        accent: {
          DEFAULT: "#0066CC",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1D1D1F",
        },
        text: {
          DEFAULT: "#1D1D1F",
          muted: "#86868B",
        },
        status: {
          success: "#34C759",
          warning: "#FF9500",
          error: "#FF3B30",
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        button: "1rem",
        card: "1.25rem",
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