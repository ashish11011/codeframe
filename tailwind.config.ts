import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#101010',
      },
      backgroundImage: {
        'radial-grad':
          'radial-gradient(circle, #233D3D, #1f3e3e, #142f2f, #0a0a0a)',
        'radial-grad-blue':
          'radial-gradient(circle, #0c5b62, #1f3e3e, #142f2f, #0a0a0a)',
      },
      fontFamily: {
        lato: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
