import { styled } from '../../styles'

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto'
})

export const CardButton = styled('button', {
  background: '$gray800',
  color: '$grayScale',
  cursor: 'pointer',
  borderRadius: 6,
  border: 0,
  padding: '.75rem',
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

    background: '$green500',
    color: '$white'
  }
})
