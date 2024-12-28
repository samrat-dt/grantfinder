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
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
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
          DEFAULT: "#FFFFFF",
          secondary: "#F8F9FA",
        },
        foreground: {
          DEFAULT: "#000000",
          secondary: "#666666",
        },
        primary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
          accent: "#222222",
          light: "#34C759",
          dark: "#ea384c",
        },
        secondary: {
          DEFAULT: "#F8F9FA",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#ea384c",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
          hover: "#222222",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        text: {
          DEFAULT: "#000000",
          muted: "#666666",
        },
        status: {
          success: "#34C759",
          warning: "#0EA5E9",
          error: "#ea384c",
        },
      },
      spacing: {
        'section': '6rem',
        'component': '2rem',
        'element': '1rem',
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
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'elevated': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;