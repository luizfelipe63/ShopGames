import { styled } from '../../styles'

export const SearchContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem',

  '@bp1': {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '5rem',
  },
})

export const FormSearch = styled('form', {
  div: {
    position: 'relative',
  },

  svg: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translate(0, -50%)',
  },

  input: {
    width: 250,
    padding: '0.625rem 0px 0.625rem 2.5rem',
    borderRadius: '8px',
    border: 0,
    transition: 'all .2s ease-in-out',
    outline: 'none',
    color: '$White',
    background: '$black600',

    '&:focus': {
      opacity: 1,
      width: '400px',

      '@bp1': {
        width: 200,
      },
    },

    '@bp1': {
      width: 0,
    },
  },
})

export const Buttons = styled('div', {
  display: 'flex',
  gap: '1rem',
})

export const CardButton = styled('div', {
  padding: '0.5rem',
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  position: 'relative',
  background: '$Purple',
  color: '$white',
  border: 0,
  cursor: 'pointer',

  span: {
    position: 'absolute',
    top: '-0.5625rem',
    right: '-0.5625rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: '1.25rem',
    height: '1.25rem',
    color: '$black800',
    background: '$white',
  },
})

export const LoginButton = styled('button', {
  background: '$Purple',
  color: '$white',
  cursor: 'pointer',
  borderRadius: 8,
  border: 0,
  padding: '.5rem',
  position: 'relative',
})
