import { GlobalStyle } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Logo from '../assets/Logo.svg'

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <Header>
        <Image src={Logo} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

  
