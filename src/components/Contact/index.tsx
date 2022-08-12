import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Label, Button, Input, Textarea } from '../../components'
import SectionContent from '../shared/SectionContent'
import SectionHeader from '../shared/SectionHeader'
import * as S from './styles'

const Contact = () => {
  const a = useRouter()

  const locationOrigin = useMemo(() => {
    if (typeof window === 'undefined') return ''
    return window.location.origin
  }, [])

  return (
    <S.Contact id="contact">
      <form action={`https://formsubmit.co/${process.env.FORM_SUBMIT_ID}`} method="POST">
        <SectionContent>
          <SectionHeader>Contact</SectionHeader>
          <Label>Name</Label>
          <Input name="name" type="text" placeholder="Type your name" required />
          <br />
          <br />
          <Label>Email</Label>
          <Input name="email" type="email" placeholder="Type your email" required />
          <br />
          <br />
          <Label>Message</Label>
          <Textarea name="message" placeholder="Type your message" rows={5} required />
          <br />
          <br />
          <br />
          <input type="hidden" name="_next" value={`${locationOrigin}/thanks`} />
          <Button type="submit">Send Message</Button>
        </SectionContent>
      </form>
    </S.Contact>
  )
}

export default Contact
