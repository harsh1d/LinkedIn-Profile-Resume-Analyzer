import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkedin: {
          blue: "#0077B5",
          dark: "#000000",
          light: "#FFFFFF",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              50: "#e6f3f8",
              100: "#cce7f1",
              200: "#99cfe3",
              300: "#66b7d5",
              400: "#339fc7",
              500: "#0077B5",
              600: "#006291",
              700: "#00496d",
              800: "#003148",
              900: "#001824",
              DEFAULT: "#0077B5",
              foreground: "#fff"
            }
          }
        },
        dark: {
          colors: {
            primary: {
              50: "#001824",
              100: "#003148",
              200: "#00496d",
              300: "#006291",
              400: "#0077B5",
              500: "#339fc7",
              600: "#66b7d5",
              700: "#99cfe3",
              800: "#cce7f1",
              900: "#e6f3f8",
              DEFAULT: "#0077B5",
              foreground: "#fff"
            }
          }
        }
      }
    })
  ]
}
