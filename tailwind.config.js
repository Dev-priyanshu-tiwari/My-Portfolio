const c = (n) => `rgb(var(--${n}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: c('bg'), ink: c('ink'), muted: c('muted'),
        line: c('line'), card: c('card'), accent: c('accent'),
        board: '#0F2238', cell: '#18304D', amber: '#FFB938',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        flip: { '0%': { transform: 'scaleY(.15)' }, '100%': { transform: 'scaleY(1)' } },
      },
      animation: { flip: 'flip .07s linear' },
    },
  },
}
