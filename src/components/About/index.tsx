import SectionContent from '../shared/SectionContent'
import SectionHeader from '../shared/SectionHeader'
import * as S from './styles'
import type * as T from './types'

const About = ({
  name,
  job,
  location,
  technologies,
  totalRepos,
  totalSize,
  reposLanguages,
  avatarUrl,
}: T.Props) => {
  return (
    <S.About id="about">
      <SectionContent>
        <SectionHeader>About</SectionHeader>
        <S.AboutGrid>
          <S.AboutDescription>
            Hello! I am {name}, a {job} based in {location}. I like to create amazing applications.
            Recently I am working with some technologies like: <br />
            <br />
            <S.AboutTechnologies>{technologies.join(' ~ ')}</S.AboutTechnologies>
            <br />
            <br />
            <S.GithubInformations>
              Currently with {totalRepos} repositories on github, with a total of {totalSize} lines
              of code, mainly using {reposLanguages.join(', ')} technologies
            </S.GithubInformations>
          </S.AboutDescription>
          <S.Avatar src={avatarUrl} alt={`${name} picture`} />
        </S.AboutGrid>
      </SectionContent>
    </S.About>
  )
}

export default About
