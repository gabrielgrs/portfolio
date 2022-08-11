import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import type * as T from './types'
import * as S from './styles'

const ProjectCard = (props: T.Props) => {
  return (
    <S.ProjectCard>
      <div>
        <h3>{props.name}</h3>
        <S.ProjectDescription>{props.description}</S.ProjectDescription>
      </div>
      <S.ProjectTechnologies>
        {props.technologies.join(', ')}
      </S.ProjectTechnologies>
      <S.ProjectLinks>
        {props.githubUrl && (
          <a href={props.githubUrl} target="_blank" rel="noreferrer">
            <AiFillGithub size={22} />
          </a>
        )}
        {props.appUrl && (
          <a href={props.appUrl} target="_blank" rel="noreferrer">
            <FiExternalLink size={22} />
          </a>
        )}
      </S.ProjectLinks>
    </S.ProjectCard>
  )
}

export default ProjectCard
