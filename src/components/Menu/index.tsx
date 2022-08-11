import { useState, useEffect } from 'react'
import Image from 'next/image'
import * as S from './styles'

const Menu = () => {
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
        <S.Item href="#item1">item 1</S.Item>
      </S.Section>
    </S.Nav>
  )
}

export default Menu
