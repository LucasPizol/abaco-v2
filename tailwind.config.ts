import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      width: {
        '400': '400px',
        '704': '704px',
        '750': '750px'
      },
      colors: {
        'yellow cream': '#FFE2B4',
        'yellow mostard': '#FBB03B',
        'smoke gray': '#F3F3F3',
      },
    },
  },
  plugins: [],
} satisfies Config

