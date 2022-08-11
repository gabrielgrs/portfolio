import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Menu } from '../components'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Menu />
      <Main />
    </Fragment>
  )
}

export default Home
