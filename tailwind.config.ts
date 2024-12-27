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
        // Primary Colors
        primary: {
          DEFAULT: "#0F172A", // Dark Navy Blue
          accent: "#2563EB", // Vivid Blue
          light: "#93C5FD", // Light Blue
          dark: "#1E293B", // Slate Gray
        },
        // Background Colors
        background: {
          DEFAULT: "#F8FAFC", // Light Grayish Blue
          secondary: "#FFFFFF", // Pure White
        },
        // Text Colors
        text: {
          DEFAULT: "#0F172A", // Dark
          muted: "#64748B", // Muted Gray
        },
        // Status Colors
        status: {
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
        // Uber Design System Colors
        uber: {
          black: "#000000",
          white: "#FFFFFF",
          blue: "#276EF1",
          purple: "#9B87F5",
          "light-gray": "#E2E2E2",
          "dark-gray": "#4A4A4A",
          error: "#FF1744",
          success: "#1AD760",
          notification: "#FEF7CD",
          "notification-text": "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Desktop
        "heading-desktop": ["3rem", { lineHeight: "1.2" }],
        "subheading-desktop": ["2rem", { lineHeight: "1.3" }],
        // Mobile
        "heading-mobile": ["2rem", { lineHeight: "1.2" }],
        "subheading-mobile": ["1.5rem", { lineHeight: "1.3" }],
        // Body and Caption
        body: ["1rem", { lineHeight: "1.5" }],
        caption: ["0.875rem", { lineHeight: "1.4" }],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        button: "0.5rem",
        card: "0.75rem",
        input: "0.5rem",
      },
      boxShadow: {
        card: "0px 4px 6px #E2E8F0",
        elevated: "0px 8px 16px rgba(0, 0, 0, 0.1)",
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