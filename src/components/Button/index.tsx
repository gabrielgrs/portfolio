import styled, { css } from 'styled-components'

const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background: transparent;
    color: ${theme.colors.secondary};
    padding: 8px 24px;
    border-radius: 32px;
    border: solid ${theme.colors.secondary} 2px;
    font-family: ${theme.fonts.secondary};
    font-size: 1em;
    position: relative;

    &:active {
      transition: 100ms ease;
      transform: translateY(-2px);
    }
  `}
`

export default Button
