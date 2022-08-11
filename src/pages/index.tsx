import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Menu } from '../components'
import Main from '../components/Main'
import About from '../components/About'
import Work from '../components/Work'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Menu />
      <Main />
      <About />
      <Work />
    </Fragment>
  )
}

export default Home
