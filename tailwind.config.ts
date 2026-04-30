import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        omj: {
          primary: "#C75A4D",
          "primary-dark": "#A8463B",
          accent: "#2C3E5C",
          line: "#06C755",
          "line-dark": "#05A748",
          base: "#FAF8F5",
          white: "#FFFFFF",
          text: "#2C2C2A",
          sub: "#6B6B68",
          border: "#E8E4DD",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "Noto Sans JP", "sans-serif"],
      },
      maxWidth: {
        container: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
