import styled, { css, keyframes } from 'styled-components'

export const Footer = styled.footer`
  padding: 32px 0;
  text-align: center;
  font-size: 0.9em;
  opacity: 0.7;
`

export const BuyMeACoffeContainer = styled.div`
  height: 50px;
  position: relative;

  > {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const fontSize = keyframes`
   0%,
    100% {
      font-size: 1.3em;
    }

    50% {
      font-size: 1.5em;
    }
`

export const BuyMeACoffee = styled.a`
  ${({ theme }) => css`
    background: linear-gradient(
      271deg,
      ${theme.colors.secondary} 30%,
      #a162e8 50%,
      #f093b0 70%,
      #edca85 94%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.3em;

    animation: ${fontSize} 2s ease-in-out infinite;
  `}
`
