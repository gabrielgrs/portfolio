import { useState, useEffect } from 'react'
import Image from 'next/image'
import * as S from './styles'

const Nav = () => {
  const [isFarFromTop, setIsFarFromTop] = useState(false)

  useEffect(() => {
    const handleNavigation = (event: any) =>
      setIsFarFromTop(event?.currentTarget?.scrollY > 10)

    window.addEventListener('scroll', (event) => handleNavigation(event))
    return () => window.removeEventListener('scroll', handleNavigation)
  }, [])

  return (
    <S.Nav isFarFromTop={isFarFromTop}>
      <Image
        src="/assets/svgs/logo.svg"
        alt="logo"
        height="32px"
        width="32px"
      />
      <S.Section>
        <S.Item href="#main">main</S.Item>
        <S.Item href="#about">about</S.Item>
        <S.Item href="#work">work</S.Item>
      </S.Section>
    </S.Nav>
  )
}

export default Nav
