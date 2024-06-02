import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(0, 0%, 9%)', // Adjust this to your primary foreground color
          foreground: 'hsl(0, 0%, 98%)', // primary foreground color
          // Add other shades if needed
        },
        secondary: {
          DEFAULT: 'hsl(0, 0%, 96.1%)', // secondary background color
          foreground: 'hsl(0, 0%, 9%)', // secondary foreground color
          // Add other shades if needed
        },
        muted: {
          DEFAULT: 'hsl(0, 0%, 96.1%)', // muted background color
          foreground: 'hsl(0, 0%, 45.1%)', // muted foreground color
          // Add other shades if needed
        },
        accent: {
          DEFAULT: 'hsl(0, 0%, 96.1%)', // accent background color
          foreground: 'hsl(0, 0%, 9%)', // accent foreground color
          // Add other shades if needed
        },
        destructive: {
          DEFAULT: 'hsl(0, 84.2%, 60.2%)', // destructive background color
          foreground: 'hsl(0, 0%, 98%)', // destructive foreground color
          // Add other shades if needed
        },
        border: {
          DEFAULT: 'hsl(0, 0%, 89.8%)', // border color
          // Add other shades if needed
        },
        input: {
          DEFAULT: 'hsl(0, 0%, 89.8%)', // input color
          // Add other shades if needed
        },
        ring: {
          DEFAULT: 'hsl(0, 0%, 3.9%)', // ring color
          // Add other shades if needed
        },
      },
    },
  },
  plugins: [],
}
export default config
