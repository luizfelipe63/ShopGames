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
        opacity: 0.6
      }
    }
  }
})

export const LogoGames = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
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
      opacity: 0.6
    }
  },

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
      borderRadius: 8
    }
  }
})
