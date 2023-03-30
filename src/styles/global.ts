import { globalCss } from '.'

export const GlobalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$black800',
    color: '$gray100'
  },

  'body, input, textarea, button': {
    fontFamily: 'Poppins',
    fontWeight: 400,
    overflowX: 'hidden'
  }
})
