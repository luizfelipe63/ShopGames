import { styled } from '..'

export const HomeContainer = styled('main', {
  padding: '2rem',

  h1: {
    marginBottom: '2rem',
  },

  '@bp1': {
    padding: '1rem',
  },
})

export const HeaderContent = styled('header', {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  listStyle: 'none',
  padding: 0,
  zIndex: '-99999',
  display: 'block',
})

export const LoadPresetation = styled('div', {
  width: '100%',
  height: 400,
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',

  h3: {
    color: '$white',
    fontSize: '$2xl',
  },

  '@bp1': {
    padding: '1rem',
  },
})

export const HomeContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2rem',

  '@bp1': {
    gridTemplateColumns: '1fr',
  },
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
      textDecoration: 'none',
    },

    h2: {
      fontSize: '$md',

      '&:hover': {
        transition: 'opacity 0.2s',
        opacity: 0.6,
      },
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
          color: '$Purple',
        },
      },
    },
  },
})

export const BgImgProduct = styled('div', {
  borderRadius: '8px 8px 0px 0px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 150,
})
