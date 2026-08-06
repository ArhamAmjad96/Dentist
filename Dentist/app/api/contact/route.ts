import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, privacyConsent, honeypot } = body;

    // 1. Anti-Spam Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Enquiry received' });
    }

    // 2. Server-side validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Please provide full name, email, and phone number.' },
        { status: 400 }
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        { success: false, message: 'Privacy consent is required.' },
        { status: 400 }
      );
    }

    // 3. Email Provider Integration Placeholder (Resend / Formspree / SendGrid / Nodemailer)
    /*
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'St. James Dental <no-reply@stjamesdental.co.uk>',
        to: ['reception@stjamesdental.co.uk'],
        subject: `New Appointment Enquiry from ${fullName}`,
        html: `<p>Name: ${fullName}</p><p>Email: ${email}</p><p>Phone: ${phone}</p>`,
      });
    }
    */

    return NextResponse.json({
      success: true,
      message: 'Appointment enquiry submitted successfully.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error processing request.' },
      { status: 500 }
    );
  }
}
