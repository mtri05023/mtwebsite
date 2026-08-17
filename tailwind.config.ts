import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f7fb",
          100: "#dce9f5",
          500: "#235789",
          700: "#12395f",
          900: "#071d33"
        },
        accent: {
          500: "#16a3d8",
          600: "#0787ba"
        }
      },
      boxShadow: {
        soft: "0 14px 35px rgba(7, 29, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
