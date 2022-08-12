import styled, { css, keyframes } from 'styled-components'

export const Main = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`

export const MainName = styled.h1<{ name: string; githubUsername: string }>`
  ${({ theme, name, githubUsername }) => css`
    font-size: 3em;
    position: relative;
    height: 70px;
    white-space: nowrap;

    *,
    &:before,
    &:after {
      transition: all 600ms ease-in-out;
    }

    &:before {
      color: ${theme.colors.secondary};
      content: '${name}';
      position: absolute;
    }

    &:after {
      color: ${theme.colors.secondary};
      content: '@${githubUsername}';
      position: absolute;
      transform: translateX(-100vw);
      opacity: 0;
    }

    &:hover {
      &:before {
        transform: translateX(-100vw);
        opacity: 0;
      }

      &:after {
        transform: translateX(0);
        opacity: 1;
      }
    }

    &:not(:hover) {
      &:before {
        transform: translateX(0);
        opacity: 1;
      }

      &:after {
        transform: translateX(-100vh);
        opacity: 0;
      }
    }

    ${theme.breakPoints.mobile} {
      font-size: 2.2em;
    }
  `}
`

export const MainJob = styled.h2`
  ${({ theme }) => css`
    font-size: 2em;
    font-family: ${theme.fonts.secondary};

    ${theme.breakPoints.mobile} {
      font-size: 1.5em;
    }
  `}
`

export const MainDescription = styled.p`
  opacity: 0.8;
  text-transform: justify;
  font-style: italic;
`

const knowMoreButtonAnimation = keyframes`
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-3px);
  }
`

export const KnowMoreButton = styled.a`
  cursor: pointer;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  opacity: 0.7;
  animation: ${knowMoreButtonAnimation} 2s ease-out infinite;
  transition: opacity color 600ms ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  &:hover {
    transition: opacity 600ms ease;
    opacity: 1;
  }
`

export const GlowImage = styled.img`
  position: absolute;
  top: 5vh;
  left: 0vh;
  width: 100%;
  opacity: 0.3;
`
