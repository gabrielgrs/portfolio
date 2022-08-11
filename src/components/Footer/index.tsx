import * as S from './styles'

const Footer = () => {
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
      <a href="https://github.com/gabrielgrs" target="_blank" rel="noreferrer">
        @gabrielgrs
      </a>
    </S.Footer>
  )
}

export default Footer
