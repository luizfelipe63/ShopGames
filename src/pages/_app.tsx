import { GlobalStyle } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Logo from '../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { Handbag } from 'phosphor-react'
import { ShoopingBag } from '../components/shoopingBag'

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <Header>
        <Image src={Logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <Handbag size={24}/>
            </button>
          </Dialog.Trigger>
          <ShoopingBag />
        </Dialog.Root>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

  
