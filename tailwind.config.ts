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
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          secondary: "hsl(var(--foreground-secondary))",
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
      borderRadius: {
        DEFAULT: "var(--radius)",
        button: "1rem",
        card: "1.25rem",
        input: "0.75rem",
      },
      fontSize: {
        "heading-desktop": ["2.5rem", { lineHeight: "1.1" }],
        "subheading-desktop": ["1.75rem", { lineHeight: "1.2" }],
        "heading-mobile": ["2rem", { lineHeight: "1.1" }],
        "subheading-mobile": ["1.5rem", { lineHeight: "1.2" }],
        body: ["1rem", { lineHeight: "1.5" }],
        caption: ["0.875rem", { lineHeight: "1.4" }],
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        elevated: "0 8px 16px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        float: "float 3s ease-in-out infinite",
        "scale-in": "scale-in 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
