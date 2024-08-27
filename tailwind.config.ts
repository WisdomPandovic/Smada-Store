import type { Config } from "tailwindcss";
import textShadow from 'tailwindcss-textshadow';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        'md': '1px 1px 2px rgba(0, 0, 0, 0.5)', // Example shadow
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Example shadow
      },
    },
    screens: {
      lg: { max: "1800px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
  },
  plugins: [
    textShadow, // Add the plugin here
  ],
};

export default config;
