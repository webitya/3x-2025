import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All required fields must be filled" }), {
        status: 400,
      })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // ✅ Thank-you email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting 3xGrowth!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <div style="background: #4348F9; padding: 40px; text-align: center; border-radius: 6px 6px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 26px;">Thank You, ${name}!</h1>
          </div>
          <div style="padding: 30px; background: #f8fafc;">
            <p style="color: #1e293b; font-size: 16px;">
              We’ve received your message and our team will get back to you shortly.
            </p>
            <p style="color: #475569; margin-top: 20px; font-size: 14px;">
              Meanwhile, feel free to explore more about us:
            </p>
            <div style="text-align: center; margin-top: 20px;">
              <a href="https://3xgrowth.in" 
                 style="background: #4348F9; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          <div style="background: #1e293b; padding: 20px; text-align: center; border-radius: 0 0 6px 6px;">
            <p style="color: #94a3b8; font-size: 14px; margin: 0;">
              © 2025 3xGrowth. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    // ✅ Lead notification email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `📩 New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <div style="background: #4348F9; padding: 30px; text-align: center; border-radius: 6px 6px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Lead Alert</h1>
          </div>
          <div style="padding: 30px; background: #f8fafc;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #eef2ff; padding: 10px; border-left: 4px solid #4348F9; border-radius: 4px;">
              ${message}
            </p>
            <p style="color: #475569; margin-top: 20px; font-size: 14px;">
              Received on: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    })

    return new Response(JSON.stringify({ success: true, message: "Emails sent successfully" }), {
      status: 200,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return new Response(JSON.stringify({ success: false, message: "Failed to send emails" }), {
      status: 500,
    })
  }
}
