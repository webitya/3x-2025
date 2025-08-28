import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    })

    // Send thank you email to subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to 3xGrowth Consulting Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2, #0e7490); padding: 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to 3xGrowth!</h1>
          </div>
          <div style="padding: 40px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Thank you for subscribing!</h2>
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              You've successfully subscribed to our newsletter. Get ready to receive:
            </p>
            <ul style="color: #475569; line-height: 1.8; margin-bottom: 30px;">
              <li>Latest B2B marketing strategies and insights</li>
              <li>Exclusive case studies and success stories</li>
              <li>Industry trends and best practices</li>
              <li>Free resources and templates</li>
            </ul>
            <div style="text-align: center;">
              <a href="https://3xgrowthconsulting.com" style="background: #0891b2; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          <div style="background: #1e293b; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              © 2025 3xGrowth Consulting. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    // Send lead notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Newsletter Subscription - 3xGrowth Consulting",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e293b; padding: 30px; text-align: center;">
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
              <strong>Source:</strong> Newsletter Subscription Form
            </p>
            <div style="background: #e0f2fe; padding: 20px; border-radius: 6px; border-left: 4px solid #0891b2;">
              <p style="color: #0c4a6e; margin: 0; font-weight: 500;">
                Follow up with this lead to nurture them through your marketing funnel.
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return Response.json({ message: "Subscription successful" }, { status: 200 })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return Response.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
