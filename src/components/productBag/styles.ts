import { styled } from '../../styles'

export const CardContainer = styled('div', {
  display: 'flex',
  gap: '1.125rem'
})

export const Card = styled('div', {
  width: 90,
  height: 90,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
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
  flexDirection: 'column'
})
