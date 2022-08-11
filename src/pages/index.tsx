import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Menu } from '../components'
import Main from '../components/Main'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Menu />
      <Main />
      <About />
    </Fragment>
  )
}

export default Home
