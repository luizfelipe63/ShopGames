import { styled } from '../../styles'

export const SearchContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem'
})

export const FormSearch = styled('form', {
  div: {
    position: 'relative'
  },

  svg: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translate(0, -50%)'
  },

  input: {
    width: 250,
    padding: '10px 0px 10px 40px',
    borderRadius: '8px',
    border: 0,
    transition: 'all .2s ease-in-out',
    outline: 'none',
    color: '$White',
    background: '$black600',

    '&:focus': {
      opacity: 1,
      width: '400px'
    }
  }
})

export const Buttons = styled('div', {
  display: 'flex',
  gap: '1rem'
})

export const CardButton = styled('button', {
  background: '$Purple',
  color: '$white',
  cursor: 'pointer',
  borderRadius: 8,
  border: 0,
  padding: '.5rem',
  position: 'relative',

  span: {
    position: 'absolute',
    top: '-0.5625rem',
    right: '-0.5625rem',
    padding: 6,

    fontSize: ' 0.875rem',
    fontWeight: 'bold',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: '1.25rem',
    height: '1.25rem',

    background: '$white',
    color: '$black600'
  }
})

export const LoginButton = styled('button', {
  background: '$Purple',
  color: '$white',
  cursor: 'pointer',
  borderRadius: 8,
  border: 0,
  padding: '.5rem',
  position: 'relative'
})
