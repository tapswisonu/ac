import type { Config } from "tailwindcss";

export const theme: Config["theme"] = {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      primary: {
        50: '#eef4ff',
        100: '#e0ebff',
        200: '#c7d9fe',
        300: '#a5bdfc',
        400: '#809bf8',
        500: '#034697',
        600: '#4351e7',
        700: '#323cd1',
        800: '#2933ab',
        900: '#1e4f9c',
        950: '#1a2f64',
        DEFAULT: '#1E4F9C',
      },
      secondary: "#4CAF50",
      accent: "#2E7D32",
    },
    keyframes: {
      'announcement': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      'shimmer': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(200%)' },
      },
    },
    animation: {
      'announcement': 'announcement 25s linear infinite',
      'shimmer': 'shimmer 3s ease-in-out infinite',
    },
  },
};
