export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        term: {
          bg: '#050b08',
          window: '#0a1410',
          header: '#0f1f18',
          green: '#00ff66',
          dimGreen: '#10b981',
          cyan: '#00f0ff',
          amber: '#ffb700',
          purple: '#c084fc',
          red: '#ff4d4d'
        }
      },
      fontFamily: {
        sans: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
        heading: ['Fira Code', 'monospace'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'terminal': '0 0 0 1px rgba(0, 255, 102, 0.2), 0 20px 40px -15px rgba(0, 0, 0, 0.8)',
        'terminal-glow': '0 0 25px -5px rgba(0, 255, 102, 0.3)',
      }
    },
  },
  plugins: [],
}
