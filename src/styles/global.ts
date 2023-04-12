import { globalCss } from '.'

export const GlobalStyle = globalCss({
  '.swiper-pagination-bullet-active': {
    backgroundColor: ' #7209B7 !important'
  },

  '.swiper-button-prev': {
    color: '$Purple !important'
  },

  '.swiper-button-next': {
    color: '$Purple !important'
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$black800',
    color: '$gray100',

    '@bp3': {
      html: {
        fontSize: '87.5%'
      }
    }
  },

  'body, input, textarea, button': {
    fontFamily: 'Poppins',
    fontWeight: 400,
    overflowX: 'hidden'
  }
})
