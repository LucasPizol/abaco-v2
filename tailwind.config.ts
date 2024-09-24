import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      width: {
        '504': '504px',
      },
      colors: {
        'yellow cream': '#FFE2B4',
        'orange dark': '#FBB03B',
      },
      fontFamily: {
        sans: ['sans-serif'],
        roboto: ['Roboto'],
        varela: ['Varela Round']
      },
    },
  },
  plugins: [],
} satisfies Config

