/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand-light-green': '#9ECE51',
        'brand-dark-green': '#009444',
        'brand-dark-grey': '#939598',
        'brand-light-grey': '#BCBEC0',
        
        // Primary Scale (based on Light Green)
        primary: {
          50: '#f7fcf0',
          100: '#ecf7d4',
          200: '#ddf2ae',
          300: '#c8e97d',
          400: '#b5e055',
          500: '#9ECE51', // Brand Light Green
          600: '#7fb842',
          700: '#6a9937',
          800: '#567a2f',
          900: '#4a6529',
        },
        
        // Secondary Scale (based on Dark Green)
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#009444', // Brand Dark Green
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        
        // Neutral Scale (based on Brand Greys)
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#BCBEC0', // Brand Light Grey
          500: '#a3a3a3',
          600: '#939598', // Brand Dark Grey
          700: '#525252',
          800: '#404040',
          900: '#262626',
        }
      },
      fontFamily: {
        'sans': ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'primary': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'primary': '0 10px 15px -3px rgba(158, 206, 81, 0.1)',
        'secondary': '0 10px 15px -3px rgba(0, 148, 68, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #9ECE51 0%, #009444 100%)',
        'gradient-primary-light': 'linear-gradient(135deg, #b5e055 0%, #7fb842 100%)',
        'gradient-neutral': 'linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)',
      }
    },
  },
  plugins: [],
}