import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      width: {
        '400': '400px',
        '704': '704px',
<<<<<<< HEAD
=======
        '750': '750px'
>>>>>>> eebe22337e94f7dbacd6f186d66e037e668003cf
      },
      colors: {
        'yellow cream': '#FFE2B4',
        'yellow mostard': '#FBB03B',
<<<<<<< HEAD
      },
      fontFamily: {
        sans: ['sans-serif'],
        roboto: ['Roboto'],
        varela: ['Varela Round']
=======
        'smoke gray': '#F3F3F3',
>>>>>>> eebe22337e94f7dbacd6f186d66e037e668003cf
      },
    },
  },
  plugins: [],
} satisfies Config

