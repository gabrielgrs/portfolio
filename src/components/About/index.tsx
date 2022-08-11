import SectionContent from '../shared/SectionContent'
import SectionHeader from '../shared/SectionHeader'
import * as S from './styles'

const About = () => {
  return (
    <S.About id="about">
      <SectionContent>
        <SectionHeader>About</SectionHeader>
        <S.AboutGrid>
          <S.AboutDescription>
            Hello! I am Gabriel, a Software Engineer based in Florianópolis,
            Brazil. I like to create amazing applications. Recently I am working
            with some technologies like: <br />
            <br />
            <S.AboutTechnologies>
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'GraphQL'].join(
                ' ~ '
              )}
            </S.AboutTechnologies>
          </S.AboutDescription>
          <S.Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQEJHzsHhLS-JA/profile-displayphoto-shrink_800_800/0/1601563676034?e=1665619200&v=beta&t=IAXTJAVDeKwQmYgG1vXRbra-1oGcVvKxQYHG7xT3E9o" />
        </S.AboutGrid>
      </SectionContent>
    </S.About>
  )
}

export default About
