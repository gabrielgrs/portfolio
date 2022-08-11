import { Fragment } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>~ gabrielgrs ~</title>
        <meta name="description" content="Gabriel Ribeiro personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
