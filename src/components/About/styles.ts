import styled, { css } from 'styled-components'

export const About = styled.div``

export const AboutGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 60px;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    ${theme.breakPoints.mobile} {
      display: flex;
      flex-direction: column-reverse;
    }
  `}
`

export const AboutDescription = styled.p`
  text-align: justify;
`

export const AboutTechnologies = styled.span`
  font-size: 0.9em;
  padding-top: 8px;
  opacity: 0.9;
`

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 50%;
    border-radius: 24px 0 24px 0;
    position: relative;
    box-shadow: 0 0 0.1rem #fff, 0 0 0.1rem #fff,
      0 0 1rem ${theme.colors.secondary}, 0 0 0.5rem ${theme.colors.secondary},
      0 0 0.1rem ${theme.colors.secondary},
      inset 0 0 0.7rem ${theme.colors.secondary};

    justify-self: center;
  `}
`
