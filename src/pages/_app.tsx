import '../styles/fonts.css'
import { Fragment } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>~ gabrielgrs ~</title>
        <meta name="description" content="Gabriel Ribeiro personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export { reportWebVitals } from 'next-axiom'
export default MyApp
