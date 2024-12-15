import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/index.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        modernbold: ["var(--font-modern-bold)", "sans-serif"],
        modernmono: ["var(--font-modern-mono)", "sans-serif"],
        modernreg: ["var(--font-modern-reg)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-1": "#afafaf",
        "dark-2": "#dbdbdb",
      },
    },
    variants: {
      extend: {
        boxShadow: ["hover", "group-hover"],
      },
    },
  },
  plugins: [],
} satisfies Config;
