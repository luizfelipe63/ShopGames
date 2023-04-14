import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  createTheme,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black800: '#141414',
      black600: '#1F1F1F',
      gray300: '#3a3a3a',
      // gray900: '#121214',
      gray800: '#202024',

      gray100: '#e1e1e6',
      grayScale: '#8D8D99',

      Purple: '#7209B7',

      green500: '#00875f',
      green300: '#00b37e',
    },
    fontSizes: {
      md: '1.125rem',
      normal: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  utils: {
    backgroundImg: (value) => ({
      background: `url(${value})`,
    }),
  },
  media: {
    bp1: '(max-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
})
