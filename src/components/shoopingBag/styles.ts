import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0
})

export const Content = styled(Dialog.Content, {
  padding: '3rem',
  background: '$gray800',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0
})
