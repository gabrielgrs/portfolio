import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 3%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${theme.colors.primary};
    z-index: 999;
    transition: all 600ms ease;

    ${({ isFarFromTop }: { isFarFromTop: boolean }) =>
      isFarFromTop &&
      css`
        height: 70px;
        box-shadow: 0 0 5px ${theme.colors.secondary};
      `}
  `}
`

export const Section = styled.div`
  display: flex;
  gap: 24px;

  ${({ theme }) => theme.breakPoints.mobile} {
    gap: 12px;
  }
`

export const Item = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    font-family: ${theme.fonts.secondary};
    position: relative;
    text-align: center;
    transition: 600ms ease-in-out;

    &:after {
      content: '()';
      padding-left: 2px;
      color: ${theme.colors.secondary};
      font-family: ${theme.fonts.primary};
      font-size: 1.1em;
    }

    &:before {
      content: '.';
      font-size: 1.2em;
      color: ${theme.colors.secondary};
    }

    &:hover {
      opacity: 0.7;
    }
  `}
`
