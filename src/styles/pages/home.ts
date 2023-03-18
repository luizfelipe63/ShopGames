import Link from 'next/link'
import { styled } from '..'
import bg from '../../assets/readdead.jpg'
import bgbatman from '../../assets/batman.jpg'

export const HomeContainer = styled('main', {
  padding: '2rem',

  h1: {
    marginBottom: '2rem'
  }
})

export const BackgroundPresetation = styled('div', {
  backgroundImg: bg.src,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: 400,
  width: '100%'
})

export const HomeContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1rem'
})

export const Products = styled('div', {
  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    borderRadius: '0px 0px 8px 8px',
    background: '$black600',
    padding: '1rem',

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
  backgroundImg: bgbatman.src,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // width: 230,
  height: 150
})
