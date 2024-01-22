import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light': '#750E21',
      'primary': '#6440fb',
      'seconde': '#f4f1fe',
      'primary-dark': '#2B1C55',
      'dark': '#140342',
      'primary-gray': '#4f547b',
      'seconde-gray': '#f7f8fb',
      ...colors
    },
    fontFamily: {
      'poppins': ['poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
        "800px": "800px",
        "400px": "400px",
      }
    },
  },
  plugins: [],
}
export default config
