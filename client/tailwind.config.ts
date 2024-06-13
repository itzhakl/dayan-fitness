/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DFEFFF',
        secondary: '#003162',
        background: '#FF8E2B33',
        highlight: '#FF8E2B',
        'highlight-opacity': '#FF8E2B',
        'strong-highlight': '#FF7700',
        'primary-text': '#FCFCFC',
        'secondary-text': '#00316280',
        accent: '#2FA757',
      },
      fontFamily: {
        myfont: ['myfont', 'sans-serif'],
      },
      content: {
        evolvetext: "url('./assets/images/EvolveText.png')",
        abstractwaves: "url('./assets/images/AbstractWaves.png')",
        sparkles: "url('./assets/images/Sparkles.png')",
        circles: "url('./assets/images/Circles.png')",
      },
    },
    screens: {
      xs: '300px',
      sm: '640px',
      md: '768px',
      lg: '1060px',
      xl: '1280px',
    },
  },
  plugins: [],
};
