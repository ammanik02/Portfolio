import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#8B5CF6",
          orange: "#F97316",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #8B5CF6 0%, #F97316 100%)",
      },
    },
  },
  plugins: [],
};
export default config;



