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
        navy: {
          50: '#F2F5F8',
          100: '#E1E8EE',
          200: '#C2D1DD',
          300: '#9BB3C6',
          400: '#6B8EA8',
          500: '#476D88',
          600: '#34526B',
          700: '#23394D',
          800: '#1C2E40',
          900: '#12202E', // Deep ink navy
          950: '#0B141E',
        },
        ivory: {
          DEFAULT: '#F7F4EE', // Warm ivory
          light: '#FCFAF6',
          dark: '#EFEAE0',
        },
        stone: {
          DEFAULT: '#E8E4DC', // Soft stone
          light: '#F2EFF8',
          dark: '#D5CFC3',
        },
        sage: {
          DEFAULT: '#AAB8AA', // Muted sage
          light: '#C8D3C8',
          dark: '#8B9C8B',
        },
        teal: {
          DEFAULT: '#296C6B', // Refined teal
          light: '#368988',
          dark: '#1D4F4E',
          glow: '#4EA6A5',
        },
        brass: {
          DEFAULT: '#B79762', // Warm brass accent
          light: '#E5C384',
          dark: '#967845',
          glow: '#F0D49B',
        },
        charcoal: {
          DEFAULT: '#22272B', // Charcoal text
          light: '#373F45',
          muted: '#5A6570',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-navy-teal': 'linear-gradient(135deg, #0B141E 0%, #12202E 40%, #1D4F4E 100%)',
        'gradient-brass-metallic': 'linear-gradient(135deg, #B79762 0%, #E5C384 50%, #967845 100%)',
        'gradient-teal-aurora': 'linear-gradient(135deg, #296C6B 0%, #1D4F4E 50%, #12202E 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(183, 151, 98, 0.25) 0%, rgba(41, 108, 107, 0.15) 50%, transparent 70%)',
        'gradient-card': 'linear-gradient(145deg, rgba(28, 46, 64, 0.95) 0%, rgba(18, 32, 46, 0.98) 100%)',
        'gradient-card-light': 'linear-gradient(145deg, #FFFFFF 0%, #F7F4EE 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 32, 46, 0.06)',
        'medium': '0 10px 30px -4px rgba(18, 32, 46, 0.12)',
        'elevated': '0 20px 40px -10px rgba(18, 32, 46, 0.25)',
        'glow-brass': '0 0 30px -4px rgba(183, 151, 98, 0.45)',
        'glow-teal': '0 0 30px -4px rgba(41, 108, 107, 0.45)',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.95)' },
          '50%': { opacity: '0.9', transform: 'scale(1.12)' },
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
