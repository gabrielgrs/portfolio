import { BsChevronDown } from 'react-icons/bs'
import Button from '../Button'
import SectionContent from '../shared/SectionContent'
import * as S from './styles'

const Main = () => {
  return (
    <S.Main id="main">
      <SectionContent>
        <S.GlowImage src="https://nextui.org/stitches-gradient.svg" />
        <span>Hello! I am,</span>
        <S.MainName>{/* Name is before and after */}</S.MainName>
        <S.MainJob>Software Engineer</S.MainJob>
        <br />
        <S.MainDescription>
          Technologies, innovation, entrepreneurship and Front-end Engineer! ~{' '}
          <br />
          <span role="img" aria-label="hand and heart emojis">
            👋💜
          </span>
        </S.MainDescription>
        <br />
        <br />
        <a href="#contact">
          <Button>Contact me</Button>
        </a>
      </SectionContent>
      <S.KnowMoreButton href="#about">
        Know More
        <BsChevronDown />
      </S.KnowMoreButton>
    </S.Main>
  )
}

export default Main
