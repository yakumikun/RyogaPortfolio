import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        amatica: ["Amatic SC", "cursive"],
        inter: ["Inter", "sans-serif"]
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1) translate(0, 0)'},
          '100%': { transform: 'scale(100) translate(0, 0)'},
        },
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        },
        top: {
          '0%': { transform: 'translate(0, 0)'},
          '100%': { transform: 'translate(0, -800%)'},
        },
        right: {
          '0%': { transform: 'translate(0, 0)'},
          '100%': { transform: 'translate(800%, 0)'},
        },
        bottom: {
          '0%': { transform: 'translate(0, 0)'},
          '100%': { transform: 'translate(0, 800%)'},
        },
        left: {
          '0%': { transform: 'translate(0, 0)'},
          '100%': { transform: 'translate(-800%, 0)'},
        },
      },
      animation: {
        'scaleTop': 'scale 2s infinite, top 1s 3s 1 forwards',
        'scaleRight': 'scale 2s infinite, right 1s 3s 1 forwards',
        'scaleBottom': 'scale 2s infinite, bottom 1s 3s 1 forwards',
        'scaleLeft': 'scale 2s infinite, left 1s 3s 1 forwards',
        'zoomIn': 'zoomIn 3s 3s 1 forwards',
        'appear': 'appear 3s 1 forwards, zoomIn 3s 3s 1 forwards',
        'top': 'top 3s 3s 1 forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
