import * as S from './styles'
import type * as T from './types'
import projects from './projects'
import ProjectCard from './ProjectCard'
import SectionContent from '../shared/SectionContent'
import SectionHeader from '../shared/SectionHeader'

const Work = ({ githubUrl }: T.Props) => (
  <S.Work id="work">
    <SectionContent>
      <SectionHeader>Work</SectionHeader>
      <S.ProjectsGrid>
        {projects.map((p, index) => {
          return (
            <ProjectCard
              key={p.name}
              name={p.name}
              description={p.description}
              technologies={p.technologies}
              githubUrl={`${githubUrl}/${p.repoName}`}
              appUrl={p.appUrl}
            />
          )
        })}
      </S.ProjectsGrid>
    </SectionContent>
  </S.Work>
)

export default Work
