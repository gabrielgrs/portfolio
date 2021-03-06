import * as S from './styles'
import type * as T from './types'

const Footer = ({ githubUrl, githuUsername }: T.Props) => {
  return (
    <S.Footer>
      <S.BuyMeACoffeContainer>
        <S.BuyMeACoffee
          href="https://www.buymeacoffee.com/gabrielgrs"
          target="_blank"
          rel="noreferrer"
        >
          Buy me a coffee ~ {'<3'}
        </S.BuyMeACoffee>
      </S.BuyMeACoffeContainer>
      <br />
      <br />
      Made with love by{' '}
      <a href={githubUrl} target="_blank" rel="noreferrer">
        @{githuUsername}
      </a>
    </S.Footer>
  )
}

export default Footer
