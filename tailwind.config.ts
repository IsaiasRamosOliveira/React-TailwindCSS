import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary100: "var(--primary-100)",
        primary200: "var(--primary-200)",
        primary300: "var(--primary-300)",
        primary400: "var(--primary-400)",
        primary500: "var(--primary-500)",
        "label-common": "var(--label-common)",
        "label-orange": "var(--label-orange)",
        "label-green": "var(--label-green)",
      },
      border: {
        primary100: "var(--primary-100)",
        primary200: "var(--primary-200)",
        primary300: "var(--primary-300)",
        primary400: "var(--primary-400)",
        primary500: "var(--primary-500)",
      },
      backgroundColor: {
        primary: {
          100: "#5E6065",
          200: "#404146",
          300: "#2F3237",
          400: "#2D3035",
          500: "#22252A"
        },
        second: {
          100: "#316495"
        }
      },
      borderColor: {
        primary: {
          100: "#5E6065",
          200: "#404146",
          300: "#2F3237",
          400: "#2D3035",
          500: "#22252A"
        },
        second: {
          100: "#316495"
        }
      },
      textColor: {
        primary: {
          100: "#5E6065",
          200: "#404146",
          300: "#2F3237",
          400: "#2D3035",
          500: "#22252A"
        },
        second: {
          100: "#316495"
        }
      }
    },
  },
  plugins: [],
}
export default config
