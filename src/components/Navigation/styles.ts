import { styled } from '../../styles'

export const Container = styled('header', {
  width: 250,
  position: 'fixed',
  left: 0,
  height: '100vh',
  background: '$black600',

  padding: '2rem 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem',

    a: {
      textDecoration: 'none',
      color: '$gray100',
      transition: 'color 0.1s',

      '&:hover': {
        opacity: 0.6,
      },
    },

    '@bp1': {
      display: 'none',
    },
  },

  '@bp1': {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: '4rem',
    width: '100%',
    padding: '0 1rem',
    left: 0,
    top: 0,
  },
})

export const LogoGames = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const MenuButton = styled('button', {
  display: 'none',

  '@bp1': {
    display: 'flex',
    background: 'transparent',
    border: 0,
    color: '$white',
    cursor: 'pointer',
  },
})

export const NavgationContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  a: {
    color: '$white',
    textDecoration: 'none',

    '&:hover': {
      transition: 'opacity .2s',
      opacity: 0.6,
    },
  },

  variants: {
    Responsive: {
      mobile: {
        '@bp1': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          position: 'absolute',
          padding: '1.5rem',
          borderRadius: 8,
          top: 65,
          right: 12,
          background: '$black600',
          zIndex: 1,
        },
      },
    },
  },

  '@bp1': {
    display: 'none',
  },
})

export const Genres = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: 'transparent',
    color: '$white',
    fontSize: '$normal',
    border: 0,

    cursor: 'pointer',

    div: {
      background: '$gray300',
      padding: '.5rem',
      borderRadius: 8,
    },
  },
})
