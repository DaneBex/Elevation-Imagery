import { Resend } from 'resend';
import Welcome from '~/emails/Welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactUsProps = {
    name: string
    company?: string
    email: string
    number: string
    message: string
}

export async function POST(request: Request) {
    const data: ContactUsProps = await request.json() as ContactUsProps;
    
    const { name, company, email, number, message } = data;

await resend.emails.send({
  from: 'no-reply@ecelvevationimagery.com',
  to: 'ecelevationimagery@gmail.com',
  subject: 'Website-contact-us',
  react: Welcome({ name, company, email, number, message }),
});

return Response.json({ name: "dane" })
}