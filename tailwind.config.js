/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Ensure hero layout classes are always generated (not purged by JIT)
  safelist: [
    'xl:flex-row', 'xl:ml-8', 'xl:max-w-[380px]', 'z-20', 'font-google-sans',
    'hero-calculator-col', 'hero-headline-block',
  ],
  theme: {
    extend: {
      // Worldcom Finance brand colors
      colors: {
        primary: '#3482F1',
        accent: '#F48F47',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Modern geometric sans for collapsible section headers (Outfit)
        display: ['Outfit', 'system-ui', 'sans-serif'],
        // Google Sans for hero headline and elsewhere (https://fonts.google.com/specimen/Google+Sans)
        'google-sans': ['Google Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(52, 130, 241, 0.15)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
