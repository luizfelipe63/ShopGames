import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  lineHeight: 0,
  cursor: 'pointer',

  color: '$grayScale',

  top: '1.5rem',
  right: '1.5rem',
})

export const Title = styled(Dialog.Title, {
  fontSize: '1rem',
  marginBottom: '2rem',
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  padding: '3rem',
  width: 420,
  background: '$black600',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,

  '@bp1': {
    width: '80%',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
})

export const ContentProduct = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginBottom: '2rem',
  overflowX: 'hidden',
  overflowY: 'auto',
})

export const QuantityOfItems = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
})

export const TotalValue = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '3rem',
})

export const ContentInfos = styled('div', {
  marginTop: 'auto',
})

export const CheckoutButton = styled('button', {
  background: '$Purple',
  color: '$white',
  fontWeight: 'bold',
  fontSize: '$normal',
  border: 0,
  borderRadius: 6,
  width: '100%',
  padding: '1.25rem 2rem',
  cursor: 'pointer',
  transition: 'background .2s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$Purple100',
  },
})
