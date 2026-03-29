import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          cream: '#FAFAF8',
          warm: '#F5F0E8',
          mist: '#EDE8E0',
          sand: '#D4C5A9',
          gold: '#B8976A',
          'gold-light': '#D4B896',
          'gold-dark': '#8C6F47',
          charcoal: '#2C2C2C',
          slate: '#444444',
          muted: '#7A7A7A',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Cormorant Garamond', 'Garamond', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.25em',
        'widest-plus': '0.35em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(44, 44, 44, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(44, 44, 44, 0.18)',
        'gold': '0 0 0 1px rgba(184, 151, 106, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
