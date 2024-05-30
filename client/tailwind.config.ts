/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000F1F',
        secondary: '#001f3f',
        'primary-text': '#40E0D0',
        'secondary-text': '#FFFFFF',
        highlight: '#83c5be',
        background: '#218389',
        'dark-blue': '#000F1F',
        accent: '#f95d24',
        'gray-100': '#a0c5dc',
        'primary-100': '#005c64',
        'primary-300': '#448cba',
      },
      backgroundImage: (theme) => ({
        'gradient-yellowred':
          'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
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
