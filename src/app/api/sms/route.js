import { NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
// const userPhoneNumber = process.env.USER_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export async function POST(request) {
  try {
    const data = await request.json()
    console.log('data: ', data)
    const message = await client.messages.create({
      body: data.message,
      from: twilioPhoneNumber,
      to: data.phone,
    });
    console.log(message.sid);
    return NextResponse.json({ message: 'Message Send' });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 400 }
    );
  }
}
