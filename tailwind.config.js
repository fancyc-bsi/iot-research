// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Catppuccin Mocha
        base: '#1e1e2e',
        mantle: '#181825',
        crust: '#11111b',
        text: '#cdd6f4',
        subtext1: '#bac2de',
        subtext0: '#a6adc8',
        overlay2: '#9399b2',
        overlay1: '#7f849c',
        overlay0: '#6c7086',
        surface2: '#585b70',
        surface1: '#45475a',
        surface0: '#313244',
        flamingo: '#f2cdcd',
        pink: '#f5c2e7',
        mauve: '#cba6f7',
        red: '#f38ba8',
        maroon: '#eba0ac',
        peach: '#fab387',
        yellow: '#f9e2af',
        green: '#a6e3a1',
        teal: '#94e2d5',
        sky: '#89dceb',
        sapphire: '#74c7ec',
        blue: '#89b4fa',
        lavender: '#b4befe',
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-headings': theme('colors.text'),
            '--tw-prose-links': theme('colors.blue'),
            '--tw-prose-links-hover': theme('colors.sapphire'),
            '--tw-prose-underline': theme('colors.blue'),
            '--tw-prose-underline-hover': theme('colors.sapphire'),
            '--tw-prose-bold': theme('colors.text'),
            '--tw-prose-counters': theme('colors.subtext1'),
            '--tw-prose-bullets': theme('colors.surface2'),
            '--tw-prose-hr': theme('colors.surface0'),
            '--tw-prose-quote-borders': theme('colors.surface0'),
            '--tw-prose-captions': theme('colors.subtext0'),
            '--tw-prose-code': theme('colors.text'),
            '--tw-prose-pre-code': theme('colors.text'),
            '--tw-prose-pre-bg': theme('colors.mantle'),
            '--tw-prose-pre-border': theme('colors.surface0'),
            '--tw-prose-th-borders': theme('colors.surface0'),
            '--tw-prose-td-borders': theme('colors.surface0'),
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}