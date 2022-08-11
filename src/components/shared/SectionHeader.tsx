import styled, { css } from 'styled-components'

const SectionHeader = styled.h1`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 1.5em;
    font-weight: 700;
    padding-bottom: 64px;

    &:before {
      content: '';
      background-color: ${theme.colors.secondary};
      width: 100%;
      height: 1px;
    }

    &:after {
      content: '';
      background-color: ${theme.colors.secondary};
      width: 100%;
      height: 1px;
    }
  `}
`

export default SectionHeader
