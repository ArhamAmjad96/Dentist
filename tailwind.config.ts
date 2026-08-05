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
        cyan: {
          50: '#F0FCFF',
          100: '#E0F7FA',
          200: '#B2EBF2',
          300: '#80DEEA',
          400: '#26C6DA',
          500: '#00BCD4',
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
          950: '#051C2C', // Deep cyan navy
          glow: '#00E5FF', // Luminous cyan
        },
        navy: {
          50: '#F0FCFF',
          100: '#E0F7FA',
          200: '#B2EBF2',
          300: '#80DEEA',
          400: '#26C6DA',
          500: '#00BCD4',
          600: '#00ACC1',
          700: '#0097A7',
          800: '#006064',
          900: '#051C2C',
          950: '#03121E',
        },
        brass: {
          DEFAULT: '#00ACC1',
          light: '#26C6DA',
          dark: '#00838F',
          glow: '#00E5FF',
        },
        teal: {
          DEFAULT: '#0097A7',
          light: '#00BCD4',
          dark: '#006064',
          glow: '#00E5FF',
        },
        ivory: {
          DEFAULT: '#FFFFFF',
          light: '#FFFFFF',
          dark: '#F8FDFF',
        },
        sage: {
          DEFAULT: '#475569',
          light: '#64748B',
          dark: '#334155',
        },
        slate: {
          DEFAULT: '#0F172A',
          light: '#334155',
          dark: '#020617',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cyan-white': 'linear-gradient(135deg, #FFFFFF 0%, #E0F7FA 50%, #B2EBF2 100%)',
        'gradient-cyan-glow': 'linear-gradient(135deg, #0097A7 0%, #00BCD4 50%, #00E5FF 100%)',
        'gradient-cyan-dark': 'linear-gradient(135deg, #051C2C 0%, #006064 50%, #00838F 100%)',
        'gradient-card-white': 'linear-gradient(145deg, #FFFFFF 0%, #F0FCFF 100%)',
      },
      boxShadow: {
        'soft-cyan': '0 4px 20px -2px rgba(0, 188, 212, 0.12)',
        'medium-cyan': '0 10px 30px -4px rgba(0, 188, 212, 0.2)',
        'glow-cyan': '0 0 35px -4px rgba(0, 229, 255, 0.5)',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.95)' },
          '50%': { opacity: '0.9', transform: 'scale(1.1)' },
        },
      },
      animation: {
        'gradient-shift': 'gradientShift 4s ease infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
