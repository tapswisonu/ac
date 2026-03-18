import type { Config } from "tailwindcss";

export const theme: Config["theme"] = {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      primary: {
        50: '#eef6ff',
        100: '#dcebfa',
        200: '#c5def8',
        300: '#9ecdf5',
        400: '#67aeee',
        500: '#034697',
        600: '#2373d5',
        700: '#1a5bb4',
        800: '#194d93',
        900: '#034697',
        950: '#0e2960',
        DEFAULT: '#034697',
      },
      secondary: {
        50: '#fff6ea',
        100: '#ffebd5',
        200: '#ffd2a8',
        300: '#ffb370',
        400: '#ff8c37',
        500: '#f07025',
        600: '#f05706',
        700: '#c73f07',
        800: '#9e310e',
        900: '#7f2a0f',
        950: '#451205',
        DEFAULT: '#f07025',
      },
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
