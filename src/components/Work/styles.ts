import styled, { css } from 'styled-components'

export const Work = styled.div``

export const ProjectsGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    ${theme.breakPoints.mobile} {
      grid-template-columns: 1fr;
    }
  `}
`
