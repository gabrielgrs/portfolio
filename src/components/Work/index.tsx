import * as S from './styles'
import projects from './projects'
import ProjectCard from './ProjectCard'
import SectionContent from '../shared/SectionContent'
import SectionHeader from '../shared/SectionHeader'

const Work = () => (
  <S.Work id="work">
    <SectionContent>
      <SectionHeader>Work</SectionHeader>
      <S.ProjectsGrid>
        {projects.map((p, index) => (
          <ProjectCard
            key={p.name}
            name={p.name}
            description={p.description}
            technologies={p.technologies}
            githubUrl={p.githubUrl}
            appUrl={p.appUrl}
          />
        ))}
      </S.ProjectsGrid>
    </SectionContent>
  </S.Work>
)

export default Work
