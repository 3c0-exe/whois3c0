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
        background: '#F2EDE4',
        surface: '#E8E3D9',
        ink: '#111111',
        primary: '#111111',
        'bauhaus-red': '#C8391D',
        'bauhaus-yellow': '#F5C800',
        'bauhaus-blue': '#1B4FBE',
        muted: '#9B9486',
        dark: '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-hanken)', 'sans-serif'],
        display: ['var(--font-hanken)', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['9rem', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['4rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'label': ['0.65rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
export default config
