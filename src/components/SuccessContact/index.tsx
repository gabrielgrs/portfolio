import { useRouter } from 'next/router'
import { BsArrowLeft } from 'react-icons/bs'
import * as S from './styles'

const SuccessContact = () => {
  const { push } = useRouter()

  return (
    <S.Wrapper>
      <S.H1>
        Thanks for contact me! <span role="img">🚀</span>
      </S.H1>
      <S.H2>I will get in touch with you soon!</S.H2>
      <S.Action onClick={() => push('/')}>
        <S.Arrow>
          <BsArrowLeft />
        </S.Arrow>
        <span>Back to my beautiful portfolio</span>
      </S.Action>
    </S.Wrapper>
  )
}

export default SuccessContact
