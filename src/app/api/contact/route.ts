import { NextResponse } from 'next/server'
import { ServerClient } from 'postmark'

const client = new ServerClient('d0d4dd34-aa29-4d4a-aa36-b6be3f7e2bfe')

export async function POST(request: Request) {
  const payload = await request.json()
  try {
    await client.sendEmail({
      From: 'sean@chatsouffle.com',
      To: 'hello@chatsouffle.com',
      Subject: `${payload.name} has just sent a message through ChatSouffle.com`,
      HtmlBody: `
      <strong>From:</strong> ${payload.name}<br>
      <strong>Company:</strong> ${payload.company}<br>
      <strong>Email:</strong> ${payload.email}<br>
      <strong>Message:</strong> ${payload.message}<br>
      `,
      TextBody: `From: ${payload.name} \n Company: ${payload.company} \n Email: ${payload.email} \n Message: ${payload.message}`,
      MessageStream: 'outbound',
    })

    return NextResponse.json({})
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
