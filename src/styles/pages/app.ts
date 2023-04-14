import { styled } from '..'

export const Container = styled('div', {
  minHeight: '100vh',
  margin: '0 auto',
  paddingLeft: 250,

  '@bp1': {
    margin: '0',
    padding: 0,
  },
})
