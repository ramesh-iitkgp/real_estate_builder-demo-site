export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria'],
      },
      colors: {
        primary: '#1a1a1a',
        secondary: '#f5f5f0',
        accent: '#c4a47c',
      },
    },
  },
  plugins: [],
};
