import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const ProjectCard = styled.div`
  ${({ theme }) => css`
    background: ${lighten(0.07, theme.colors.primary)};
    width: 100%;
    transition: 600ms ease;
    padding: 16px 16px 8px;
    position: relative;
    border-radius: 8px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &:hover {
      box-shadow: 0 0 0.1rem #fff, 0 0 0.1rem #fff,
        0 0 1rem ${theme.colors.secondary}, 0 0 0.5rem ${theme.colors.secondary},
        0 0 0.1rem ${theme.colors.secondary},
        inset 0 0 0.7rem ${theme.colors.secondary};
      transform: translateY(-5px);
    }
  `}
`

export const ProjectName = styled.h3``

export const ProjectDescription = styled.p`
  padding: 8px 0%;
`

export const ProjectTechnologies = styled.span`
  opacity: 0.7;
  font-size: 0.9em;
`

export const ProjectLinks = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;

  > a {
    cursor: pointer;
    opacity: 0.7;
  }
`
