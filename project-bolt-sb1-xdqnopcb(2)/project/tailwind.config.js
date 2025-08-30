/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'electric-pink': '#FF00FF',
        'azure': '#007FFF',
        'powder-blue': '#B0E0E6',
        
        // Light theme colors
        'canary-yellow': '#FFFF99',
        'lilac': '#C8A2C8',
        'off-black': '#1a1a1a',
        
        // Custom gradients
        primary: {
          50: '#fff0ff',
          100: '#ffe0ff',
          500: '#ff00ff',
          600: '#e600e6',
          700: '#cc00cc',
          800: '#b300b3',
          900: '#990099',
        },
        secondary: {
          50: '#e6f3ff',
          100: '#cce7ff',
          500: '#007fff',
          600: '#0072e6',
          700: '#0066cc',
          800: '#0059b3',
          900: '#004d99',
        }
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #FF00FF 0%, #007FFF 50%, #B0E0E6 100%)',
        'light-gradient': 'linear-gradient(135deg, #FFFF99 0%, #C8A2C8 100%)',
        'tech-pattern': 'radial-gradient(circle at 20% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 127, 255, 0.1) 0%, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      }
    },
  },
  plugins: [],
};