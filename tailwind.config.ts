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
        background: "#FAF9F6",
        surface: "#F4F4F0",
        foreground: "#0A0A0A",
        muted: "#666666",
        subtle: "#E5E5E0",
        electric: {
          blue: "#0066FF",
          violet: "#7C3AED",
          magenta: "#EC4899",
          orange: "#FF5722",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
