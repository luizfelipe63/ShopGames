import { GlobalStyle } from '../styles/global'
import { Container } from '../styles/pages/app'
import type { AppProps } from 'next/app'

import { ProductContextProvider } from '../context/productContext'
import { Navigation } from '../components/Navigation'


GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ProductContextProvider>
      <Container>
          <Navigation/>
          <Component {...pageProps} />
      </Container>
    </ProductContextProvider>
  )
}

  
