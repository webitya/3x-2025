import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      })
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,          // match .env.local
        pass: process.env.GMAIL_APP_PASSWORD,  // match .env.local
      },
    })

    // ✅ Thank-you email to subscriber
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Welcome to 3xGrowth Newsletter! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #4348F9; padding: 40px; text-align: center; border-radius: 6px 6px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to 3xGrowth!</h1>
          </div>
          <div style="padding: 40px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Thank you for subscribing!</h2>
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              You’ve successfully subscribed to our newsletter. Get ready to receive:
            </p>
            <ul style="color: #475569; line-height: 1.8; margin-bottom: 30px;">
              <li>Latest B2B marketing strategies and insights</li>
              <li>Exclusive case studies and success stories</li>
              <li>Industry trends and best practices</li>
              <li>Free resources and templates</li>
            </ul>
            <div style="text-align: center;">
              <a href="https://3xgrowth.in" 
                 style="background: #4348F9; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          <div style="background: #1e293b; padding: 20px; text-align: center; border-radius: 0 0 6px 6px;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              © 2025 3xGrowth. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    // ✅ Notification email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "New Newsletter Subscription - 3xGrowth",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #4348F9; padding: 30px; text-align: center; border-radius: 6px 6px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Newsletter Subscription</h1>
          </div>
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">New Lead Alert!</h2>
            <p style="color: #475569; line-height: 1.6; margin-bottom: 15px;">
              <strong>Email:</strong> ${email}
            </p>
            <p style="color: #475569; line-height: 1.6; margin-bottom: 15px;">
              <strong>Subscription Date:</strong> ${new Date().toLocaleString()}
            </p>
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              <strong>Source:</strong> Newsletter Subscription Form (3xgrowth.in)
            </p>
            <div style="background: #e0e7ff; padding: 20px; border-radius: 6px; border-left: 4px solid #4348F9;">
              <p style="color: #1e3a8a; margin: 0; font-weight: 500;">
                Follow up with this lead to nurture them through your marketing funnel.
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return new Response(JSON.stringify({ message: "Subscription successful" }), {
      status: 200,
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
      status: 500,
    })
  }
}
