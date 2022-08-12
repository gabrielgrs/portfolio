import { BsChevronDown } from 'react-icons/bs'
import Button from '../Button'
import SectionContent from '../shared/SectionContent'
import * as S from './styles'
import type * as T from './types'

const Main = ({ name, githubUsername, job, bio }: T.Props) => {
  return (
    <S.Main id="main">
      <SectionContent>
        <S.GlowImage src="https://nextui.org/stitches-gradient.svg" />
        <span>Hello! I am,</span>
        <S.MainName name={name} githubUsername={githubUsername}>
          {/* Name is before and after */}
        </S.MainName>
        <S.MainJob>{job}</S.MainJob>
        <br />
        <S.MainDescription>{bio}</S.MainDescription>
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
