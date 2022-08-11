import type { NextPage } from 'next'
import { Input, Menu, Textarea } from '../components'
import Container from '../components/Container'
import Main from '../components/Main'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <Container>
      <Menu />
      <Main />
      <About />
      <Work />
      <Contact />
      <Footer />
    </Container>
  )
}

export default Home
