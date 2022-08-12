import type { GetStaticProps, NextPage } from 'next'
import type { GithubUser, GithubRepo } from '../types/shared'
import { FadeWhenVisible, Menu } from '../components'
import Container from '../components/Container'
import Main from '../components/Main'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

type Props = {
  login: string
  name: string
  bio: string
  location: string
  html_url: string
  avatar_url: string
  job: string
  email: string
  totalRepos: number
  technologies: string[]
  totalSize: number
  reposLanguages: string[]
}

const Home: NextPage<Props> = (props) => {
  return (
    <Container>
      <Menu />
      <FadeWhenVisible>
        <Main githubUsername={props.login} name={props.name} job={props.job} bio={props.bio} />
      </FadeWhenVisible>
      <FadeWhenVisible>
        <About
          name={props.name}
          job={props.job}
          location={props.location}
          technologies={props.technologies}
          totalRepos={props.totalRepos}
          totalSize={props.totalSize}
          reposLanguages={props.reposLanguages}
          avatarUrl={props.avatar_url}
        />
      </FadeWhenVisible>
      <FadeWhenVisible>
        <Work githubUrl={props.html_url} />
      </FadeWhenVisible>
      <FadeWhenVisible>
        <Contact />
      </FadeWhenVisible>
      <Footer githubUrl={props.html_url} githuUsername={props.login} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const githubUser = process.env.GITHUB_USER

  const baseURL = 'https://api.github.com/users'

  const { login, repos_url, name, bio, location, html_url, avatar_url }: GithubUser = await fetch(
    `${baseURL}/${githubUser}`
  ).then((res) => res.json())

  const reposData: GithubRepo[] = await fetch(repos_url).then((res) => res.json())

  const ONE_HOUR = 60 * 60

  const totalSize = reposData.reduce((acc: number, curr) => {
    acc += curr.size
    return acc
  }, 0)

  const reposLanguages = reposData.reduce((acc: string[], curr) => {
    if (curr.language && !acc.includes(curr.language)) acc.push(curr.language)
    return acc
  }, [])

  return {
    props: {
      login,
      name,
      bio,
      location,
      html_url,
      avatar_url,
      job: 'Software Engineer',
      email: 'grxgabriel@gmail.com',
      technologies: ['JavaScript', 'TypeScript', 'React', ' Next.js', 'GraphQL'],
      totalRepos: reposData.length,
      totalSize,
      reposLanguages,
    },
    revalidate: ONE_HOUR,
  }
}

export default Home
