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
