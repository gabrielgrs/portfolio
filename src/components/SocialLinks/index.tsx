import { Fragment } from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import * as S from './styles'
import type * as T from './types'

const SocialLinks = ({ linkedinUrl, githubUrl, instagramUrl, email }: T.Props) => {
  return (
    <Fragment>
      <S.SocialNetworks>
        <S.SocialNetworkItem href={githubUrl} target="_blank" rel="noreferrer">
          <AiFillGithub size={22} />
        </S.SocialNetworkItem>
        <S.SocialNetworkItem href={linkedinUrl} target="_blank" rel="noreferrer">
          <AiFillLinkedin size={22} />
        </S.SocialNetworkItem>
        <S.SocialNetworkItem href={instagramUrl} target="_blank" rel="noreferrer">
          <AiFillInstagram size={22} />
        </S.SocialNetworkItem>
      </S.SocialNetworks>
      <S.Email href={`mailto:${email}`}>{email}</S.Email>
    </Fragment>
  )
}

export default SocialLinks
