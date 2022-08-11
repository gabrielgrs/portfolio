import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Menu } from '../components'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Menu />
      <main>Hello there!</main>
    </Fragment>
  )
}

export default Home
