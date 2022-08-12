import styled, { css } from 'styled-components'

export const Email = styled.a`
  ${({ theme }) => css`
    position: fixed;
    bottom: 24px;
    right: 8px;
    writing-mode: vertical-lr;
    font-family: ${theme.fonts.secondary};
    transform: scale(0.9);
    text-decoration: none;
  `}
`

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: fixed;
  bottom: 24px;
  left: 8px;
`

export const SocialNetworkItem = styled.a`
  cursor: pointer;
  position: relative;
  z-index: 2;

  &:hover {
    transition: transform 600ms ease;
    transform: scale(1.1);
  }
`
