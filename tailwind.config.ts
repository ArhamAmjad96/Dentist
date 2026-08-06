import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          bg: '#F5F2EB',         // Warm linen / cream editorial background
          teal: '#143C3A',       // Deep rich teal
          'teal-dark': '#0D2726',
          'teal-light': '#1E524F',
          charcoal: '#1B1D1D',   // Charcoal dark text & elements
          'charcoal-light': '#2D3030',
          sage: '#CCD6CF',       // Soft sage background accent & borders
          'sage-light': '#E8EEEA',
          'sage-dark': '#A3B4A7',
          beige: '#B8926A',      // Warm bronze / beige accent
          'beige-light': '#D4B38F',
          white: '#FFFFFF',
          cream: '#FAF8F5',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'clinic-soft': '0 4px 20px -2px rgba(27, 29, 29, 0.06)',
        'clinic-card': '0 10px 30px -4px rgba(20, 60, 58, 0.08)',
        'clinic-elevated': '0 20px 40px -8px rgba(20, 60, 58, 0.12)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
