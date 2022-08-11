import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *  {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};
  }
`

export default GlobalStyles
