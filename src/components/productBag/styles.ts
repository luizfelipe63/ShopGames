import { styled } from '../../styles'

export const CardContainer = styled('div', {
  display: 'flex',
  gap: '1.125rem',
  padding: '1rem',
  borderRadius: 8,
  background: '$gray300'
})

export const Card = styled('div', {
  width: 90,
  height: '100%',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const CardDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '.5rem',

  span: {
    color: '$grayScale'
  },

  button: {
    display: 'flex',
    background: 'transparent',
    color: '$white',
    border: 0,

    cursor: 'pointer'
  }
})
