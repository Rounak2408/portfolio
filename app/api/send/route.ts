import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(req: Request) {
  if (!process.env.GMAIL_USER || !process.env.PASSKEY) {
    console.error('Missing email configuration');
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 } 
      );
    }

    // Create transporter outside try block to test configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.PASSKEY
      }
    });

    // Test the connection
    await transporter.verify();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
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
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: "Failed to send email", details: (error as Error).message },
      { status: 500 }
    );
  }
} 