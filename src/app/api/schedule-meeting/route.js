import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, company, phone, email, message } = await req.json()

    // Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    // 📩 Admin Email
    await transporter.sendMail({
      from: `"Meeting Scheduler" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `📩 New Meeting Request from ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; background-color:#f4f7fb; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          <div style="background:#1e3a8a; color:white; padding:20px; text-align:center;">
            <h2 style="margin:0;">New Meeting Request</h2>
          </div>
          <div style="padding:20px; color:#333;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/> ${message}</p>
          </div>
          <div style="background:#f1f5f9; padding:15px; text-align:center; font-size:14px; color:#555;">
            <p>📌 Please follow up with this lead at your earliest convenience.</p>
          </div>
        </div>
      </div>
      `,
    })

    // 📩 User Thank You Email
    await transporter.sendMail({
      from: `"Your Company" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "✅ Thank you for contacting us!",
      html: `
      <div style="font-family: Arial, sans-serif; background-color:#f4f7fb; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          <div style="background:#2563eb; color:white; padding:20px; text-align:center;">
            <h2 style="margin:0;">Thank You, ${name}!</h2>
          </div>
          <div style="padding:20px; color:#333;">
            <p>We’ve received your meeting request and our team will contact you soon.</p>
            <h3 style="color:#1e3a8a;">📌 Your Submitted Details</h3>
            <ul style="list-style:none; padding:0;">
              <li><strong>Company:</strong> ${company}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Message:</strong> ${message}</li>
            </ul>
            <p style="margin-top:20px;">If you have urgent queries, feel free to reply to this email.</p>
          </div>
          <div style="background:#eff6ff; padding:15px; text-align:center; font-size:14px; color:#444;">
            <p>💙 Thank you for trusting <strong>Your Company</strong></p>
          </div>
        </div>
      </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
