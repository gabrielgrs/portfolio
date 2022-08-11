import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.primary};
    border: none;
    border-bottom: solid ${rgba(theme.colors.white, 0.5)} 2px;
    opacity: 0.9;
    /* border-radius: 32px; */
    padding: 0px 4px;
    font-size: 1.1em;
    transition: 600ms ease;
    font-family: ${theme.fonts.secondary};

    &:focus {
      transition: 600ms ease;
      border-bottom: solid ${theme.colors.secondary} 2px;
      opacity: 1;
      outline: none;
    }

    &:focus {
      &::placeholder {
        transition: 600ms ease;
        color: ${rgba(theme.colors.white, 0.9)};
      }
    }
  `}
`

export default Textarea
