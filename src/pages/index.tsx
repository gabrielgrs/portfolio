import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Input, Menu, Textarea } from '../components'
import Main from '../components/Main'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Menu />
      <Main />
      <About />
      <Work />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default Home
