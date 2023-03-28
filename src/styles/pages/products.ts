import { styled } from '..'
import { Swiper, SwiperSlide } from 'swiper/react'

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  padding: '2rem',

  h2: {
    marginBottom: '1rem'
  }
})

export const ImageProducts = styled('div', {
  height: 400,
  borderRadius: 8
})

export const GameContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '5rem'
})

export const SwiperContainer = styled('div', {
  maxWidth: 700,
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  listStyle: 'none',
  padding: 0,
  zIndex: 1,
  display: 'block'
})

export const ProductsDetails = styled('div', {
  maxWidth: 300,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  h3: {
    color: '$gray300'
  },

  p: {
    fontSize: '$md',
    lineHeight: 1.6
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem'
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$Purple',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    }
  }
})

export const About = styled('div', {
  maxWidth: 649,
  p: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    lineHeight: 1.6
  }
})
