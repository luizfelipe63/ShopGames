import { GlobalStyle } from '../styles/global'
import { Container } from '../styles/pages/app'
import type { AppProps } from 'next/app'

import { ProductContextProvider } from '../context/productContext'
import { Navigation } from '../components/Navigation'
import { Search } from '../components/Search'
import { useRouter } from 'next/router'



GlobalStyle()


export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const showNavigation = pathname !== "/success";
  
  return(
    <ProductContextProvider>
      <Container>
          {showNavigation && <Navigation/>}
          {showNavigation && <Search/>}
          <Component {...pageProps} />
      </Container>
    </ProductContextProvider>
  )
}

  
