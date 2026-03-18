import type { Config } from "tailwindcss";

export const theme: Config["theme"] = {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      primary: {
        50: '#eef6ff',
        100: '#d9e9ff',
        200: '#b8d6ff',
        300: '#89bbff',
        400: '#5498ff',
        500: '#2b73fa',
        600: '#034697', // Target Brand Blue
        700: '#1446b8',
        800: '#153b96',
        900: '#163577',
        950: '#0f224b',
        DEFAULT: '#034697',
      },
      secondary: {
        50: '#fff7ed',
        100: '#ffefd5',
        200: '#ffdaaa',
        300: '#ffbd74',
        400: '#ff9439',
        500: '#f07025', // Target Brand Orange
        600: '#e55813',
        700: '#bf4111',
        800: '#983416',
        900: '#7a2d15',
        950: '#421308',
        DEFAULT: '#f07025',
      },
      accent: {
        50: '#f2fbf4',
        100: '#e0f6e6',
        200: '#c2ead0',
        300: '#94d6af',
        400: '#5dbd86',
        500: '#39a267',
        600: '#2e7d32', // Target Brand Green
        700: '#24652a',
        800: '#205126',
        900: '#1b4321',
        950: '#0e2412',
        DEFAULT: '#2E7D32',
      },
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
