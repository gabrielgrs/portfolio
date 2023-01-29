import { NextApiRequest, NextApiResponse } from 'next'
const { Resend } = require('resend')
const resend = new Resend(process.env.RESEND_KEY)

async function request(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, from, message } = req.body

    await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: 'grxgabriel@gmail.com',
      subject: `Contact from ${name}`,
      html: `
        name: ${name} <br />
        email: ${from} <br/ > <br />
        ${message}
      `,
    })
    return res.status(201).send({ message: 'Email sent with seccess' })
  } catch (error) {
    return res.status(500).send(error)
  }
}

export default request
