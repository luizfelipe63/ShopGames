import Link from 'next/link'
import { styled } from '..'

export const HomeContainer = styled('main', {
  padding: '2rem',

  h1: {
    marginBottom: '2rem'
  },

  header: {
    display: 'grid',
    gridTemplateColumns: ' repeat(25%, 150px)',
    // gridTemplateRows: 'repeat(3, 1fr) min-content',
    gap: '1rem'
  }
})

export const BackgroundPresetation = styled('div', {
  borderRadius: 8,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: 400,
  width: '100%',
  marginBottom: '2.5rem'
})

export const HomeContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2rem'
})

export const Products = styled('div', {
  cursor: 'pointer',

  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    borderRadius: '0px 0px 8px 8px',
    background: '$black600',
    padding: '1rem',

    a: {
      color: '$gray100',
      textDecoration: 'none'
    },

    h2: {
      '&:hover': {
        transition: 'opacity 0.2s',
        opacity: 0.6
      }
    },

    div: {
      display: 'flex',
      justifyContent: 'space-between',

      button: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        border: 0,
        cursor: 'pointer',
        background: 'transparent',
        color: '$Whith',
        transition: 'color 0.2s',

        '&:hover': {
          color: '$Purple'
        }
      }
    }
  }
})

export const BgImgProduct = styled('div', {
  borderRadius: '8px 8px 0px 0px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 150
})
