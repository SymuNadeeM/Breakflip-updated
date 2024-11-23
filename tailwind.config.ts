import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px", // default: 1280
        "2xl": "1240px", // default: 1536
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "on-primary": "var(--on-primary)",
        header: "var(--header)",
        page: "var(--page)",
        "page-alt": "var(--page-alt)",
        card: "var(--card)",
      },
    },
  },
  plugins: [],
};
export default config;
