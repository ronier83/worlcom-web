/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Ensure hero layout classes are always generated (not purged by JIT); 4K hero width so 3840x2160 isn't tiny
  safelist: [
    'xl:flex-row', 'xl:ml-8', 'xl:max-w-[380px]', 'z-20', 'font-google-sans',
    'hero-calculator-col', 'hero-headline-block',
    'min-[3840px]:max-w-[2240px]', 'min-[3840px]:px-10', 'min-[3840px]:px-6',
  ],
  theme: {
    extend: {
      // Extra breakpoints: 1512px (small desktop), 4K UHD so hero headline doesn't sit behind calculator
      screens: {
        '1512': '1512px',
        '4k': '3840px',
      },
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
