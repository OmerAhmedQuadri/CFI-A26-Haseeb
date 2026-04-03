import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config()

const resend = new Resend(process.env.resend_API);

export async function sendEmail(userData) {
  const { data, error } = await resend.emails.send({
    from: 'mail@haseebuddin.in',
    to: data.to,
    subject: data.subject,
    html: data.html,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}



