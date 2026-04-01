import { NextResponse } from "next/server"
import * as nodemailer from "nodemailer"

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizeEnv(value?: string) {
  if (!value) return ""
  return value.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1")
}

export async function POST(req: Request) {
  const smtpUser = normalizeEnv(process.env.SMTP_USER || process.env.GMAIL_USER)
  const smtpPass = normalizeEnv(process.env.SMTP_PASS || process.env.PASSKEY)

  if (!smtpUser || !smtpPass) {
    console.error("Missing email configuration")
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    )
  }

  try {
    const payload = (await req.json()) as Partial<ContactPayload>
    const name = payload.name?.trim() || ""
    const email = payload.email?.trim() || ""
    const subject = payload.subject?.trim() || ""
    const message = payload.message?.trim() || ""

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    if (name.length > 100 || subject.length > 150 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input too long" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const ownerMailOptions = {
      from: smtpUser,
      to: smtpUser,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333333;
              }
              .header {
                background: linear-gradient(135deg, #00DFD8 0%, #007CF0 100%);
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #ffffff;
                padding: 20px;
                border: 1px solid #e1e1e1;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 15px;
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 6px;
              }
              .label {
                font-weight: bold;
                color: #007CF0;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
              }
              .message-box {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 6px;
                margin-top: 20px;
              }
              .timestamp {
                text-align: center;
                color: #666;
                font-size: 0.9em;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
                <p style="margin: 5px 0 0 0;">Portfolio Website</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${name}</span>
                </div>
                
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
                </div>
                
                <div class="field">
                  <span class="label">Subject:</span>
                  <span class="value">${subject}</span>
                </div>
                
                <div class="message-box">
                  <span class="label">Message:</span>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
                
                <div class="timestamp">
                  Received on ${new Date().toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    }

    const ownerMailInfo = await transporter.sendMail(ownerMailOptions)

    await transporter.sendMail({
      from: smtpUser,
      to: email,
      subject: "Thanks for contacting me",
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #111;">
          <h2 style="margin-bottom: 8px;">Thanks for reaching out, ${name}!</h2>
          <p style="margin-top: 0;">I received your message and will get back to you soon.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="margin: 0 0 8px 0;"><strong>Your subject:</strong> ${subject}</p>
          <p style="margin: 0;"><strong>Your message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    console.log("Message sent:", ownerMailInfo.messageId)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    const err = error as { code?: string; message?: string }
    const isAuthError = err?.code === "EAUTH"

    return NextResponse.json(
      {
        error: isAuthError
          ? "Email authentication failed. Check SMTP credentials."
          : "Failed to send email",
      },
      { status: 500 }
    )
  }
}