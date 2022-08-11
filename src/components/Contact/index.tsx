import { Label, Button, Input, Textarea } from '../../components'
import SectionContent from '../shared/SectionContent'
import SectionHeader from '../shared/SectionHeader'
import * as S from './styles'

const Contact = () => (
  <S.Contact id="contact">
    <SectionContent>
      <SectionHeader>Contact</SectionHeader>
      <Label>Name</Label>
      <Input placeholder="Type your name" />
      <br />
      <br />
      <Label>Email</Label>
      <Input placeholder="Type your email" />
      <br />
      <br />
      <Label>Message</Label>
      <Textarea placeholder="Type your message" rows={5} />
      <br />
      <br />
      <br />
      <Button>Send Message</Button>
    </SectionContent>
  </S.Contact>
)

export default Contact
