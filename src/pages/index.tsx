import type { NextPage } from 'next'
import { FadeWhenVisible, Menu } from '../components'
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
      <FadeWhenVisible>
        <Main />
      </FadeWhenVisible>
      <FadeWhenVisible>
        <About />
      </FadeWhenVisible>
      <FadeWhenVisible>
        <Work />
      </FadeWhenVisible>
      <FadeWhenVisible>
        <Contact />
      </FadeWhenVisible>
      <Footer />
    </Container>
  )
}

export default Home
