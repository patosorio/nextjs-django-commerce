import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8DC63F",
        "primary-dark": "#7AB32E",
        "primary-light": "#9ED150",
        secondary: "#333333",
        "secondary-light": "#4D4D4D",
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#F5F5F5"
        },
        text: {
          DEFAULT: "#333333",
          light: "#666666",
          dark: "#1A1A1A"
        }
      },
      fontFamily: {
        freeman: ['Freeman', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif']
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }]
      },
      spacing: {
        container: "1rem",
        "container-lg": "2.5rem",
      },
      maxWidth: {
        container: "80rem",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      }
    },
  },
  plugins: [],
};

export default config; 