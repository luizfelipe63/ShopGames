import { GlobalStyle } from '../styles/global'
import { Container } from '../styles/pages/app'
import type { AppProps } from 'next/app'

import { ProductContextProvider } from '../context/productContext'
import { Navigation } from '../components/Navigation'
import { Search } from '../components/Search'


GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ProductContextProvider>
      <Container>
          <Navigation/>
          <Search/>
          <Component {...pageProps} />
      </Container>
    </ProductContextProvider>
  )
}

  
