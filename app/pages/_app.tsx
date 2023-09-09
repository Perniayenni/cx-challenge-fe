import type { AppProps } from 'next/app'
import '@/styles/general.css'
import { Provider } from '@/context/product'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
    )
}
