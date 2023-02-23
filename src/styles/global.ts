import { globalCss } from '.'

export const GlobalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100'
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
    overflowX: 'hidden'
  }
})
