import type { AppProps } from 'next/app'

import { ShoppingProvider } from '../context/shopppingContext'

import { Header } from '../components/Header'

import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ShoppingProvider>
  )
}
