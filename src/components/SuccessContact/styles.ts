import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    display: flex;
    padding-left: 20%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    ${theme.breakPoints.mobile} {
      padding-left: 3%;
    }
  `}
`

export const H1 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-family: ${theme.fonts.secondary};
  `}
`

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.secondary};
    padding-bottom: 32px;
  `}
`

const actionAnimation = keyframes`
  0%, 100% {
   transform: translateX(0);
  }

  50% {
    transform: translateX(-5px);
  }
`

export const Arrow = styled.div`
  animation: ${actionAnimation} 2s ease infinite;
`

export const Action = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  background: none;
  border: none;
  font-size: 1em;
  opacity: 0.7;
  transition: 600ms ease;

  &:hover {
    opacity: 1;
  }
`
