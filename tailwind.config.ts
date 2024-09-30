import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      width: {
        '400': '400px',
        '704': '704px',
      },
      colors: {
        'yellow cream': '#FFE2B4',
        'yellow mostard': '#FBB03B',
        'light gray': '#FFFFFFF2',
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

