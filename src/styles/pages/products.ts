import { styled } from '..'

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  padding: '2rem',

  h2: {
    marginBottom: '1rem',
  },

  '@bp1': {
    padding: '0 1rem',
  },
})

export const ImageProducts = styled('div', {
  height: 400,
})

export const GameContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '5rem',

  '@bp1': {
    flexDirection: 'column',
  },
})

export const SwiperContainer = styled('div', {
  maxWidth: 650,
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  listStyle: 'none',
  padding: 0,
  zIndex: 1,
  display: 'block',

  '@bp1': {
    zIndex: 0,
  },
})

export const ProductsDetails = styled('div', {
  maxWidth: 300,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  h3: {
    color: '$gray300',
  },

  p: {
    fontSize: '$md',
    lineHeight: 1.6,
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem',
  },

  button: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 'auto',
    backgroundColor: '$Purple',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    span: {
      display: 'flex',
      alignItems: 'center',
      gap: '.5rem',
      fontSize: '$normal',
    },
  },
})

export const About = styled('div', {
  marginBottom: '1rem',

  button: {
    background: 'transparent',
    color: '$gray100',
    border: 0,

    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    transition: 'color .2s',

    '&:hover': {
      color: '$Purple',
    },
  },
})

export const AboutParagraph = styled('p', {
  maxWidth: 650,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  lineHeight: 1.6,
  marginBottom: '.5rem',

  variants: {
    expand: {
      visible: {
        whiteSpace: 'break-spaces',
        textOverflow: 'ellipsis',
        overflow: 'visible',
      },
    },
  },
})
