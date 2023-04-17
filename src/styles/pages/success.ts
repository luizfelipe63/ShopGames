import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  '@bp1': {
    h2: {
      textAlign: 'center',
    },
  },

  h2: {
    marginTop: '1rem',
  },

  p: {
    fontSize: '$md',
    color: '$gray100',
    maxWidth: 580,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$white',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$Purple',
    },
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',

  'div + div': {
    marginLeft: 'calc(-140px / 2)',
  },
})

export const ImageContent = styled('div', {
  width: 140,
  height: 140,
  borderRadius: '9999px',
  padding: '0.25rem',
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp1': {
    width: 100,
    height: 100,
  },
})
