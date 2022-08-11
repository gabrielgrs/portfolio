import styled, { css } from 'styled-components'

const Label = styled.label`
  ${({ theme }) => css`
    padding: 4px;
    line-height: 30px;
    font-size: 1.2em;
    font-weight: 600;
    font-family: ${theme.fonts.secondary};
  `}
`

export default Label
