import { GlobalStyle } from '../styles/global'
import { CardButton, Container, Header } from '../styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Logo from '../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { Handbag } from 'phosphor-react'
import { ShoopingBag } from '../components/shoopingBag'
import { ProductContextProvider } from '../context/productContext'

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ProductContextProvider>
      <Container>
        <Header>
          <Image src={Logo} alt="" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <CardButton>
              <span>3</span>
                <Handbag size={24}/>
              </CardButton>
            </Dialog.Trigger>
            <ShoopingBag />
          </Dialog.Root>
        </Header>
          <Component {...pageProps} />
      </Container>
    </ProductContextProvider>
  )
}

  
