import '../styles/globals.css'
import { Fragment } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>~ gabrielgrs ~</title>
        <meta name="description" content="Gabriel Ribeiro personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
