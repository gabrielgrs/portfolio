import axios from 'axios'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Label, Button, Input, Textarea } from '../../components'
import SectionContent from '../shared/SectionContent'
import SectionHeader from '../shared/SectionHeader'
import * as S from './styles'

const defaultValues = { name: '', from: '', message: '' }

const Contact = () => {
  const { push } = useRouter()
  const { handleSubmit, register, formState } = useForm({
    defaultValues,
  })

  const onSubmit = async (formValues: typeof defaultValues) => {
    try {
      await axios.post('/api/send', formValues)
      push('/thanks')
    } catch (error) {}
  }

  return (
    <S.Contact id="contact">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SectionContent>
          <SectionHeader>Contact</SectionHeader>
          <Label>Name</Label>
          <Input
            {...register('name', { required: true })}
            type="text"
            placeholder="Type your name"
            required
          />
          <br />
          <br />
          <Label>Email</Label>
          <Input
            {...register('from', { required: true })}
            type="email"
            placeholder="Type your email"
            required
          />
          <br />
          <br />
          <Label>Message</Label>
          <Textarea
            {...register('message', { required: true })}
            placeholder="Type your message"
            rows={5}
          />
          <br />
          <br />
          <br />
          <Button
            type="submit"
            disabled={!formState.isDirty || !formState.isValid || formState.isSubmitting}
          >
            {formState.isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </SectionContent>
      </form>
    </S.Contact>
  )
}

export default Contact
