"use client"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { useState } from "react"

export default function ScheduleMeetingPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/schedule-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("success")
        setForm({ name: "", company: "", phone: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <>
      <Header />

      {/* Full-width Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-12">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
          {/* Left side - Form */}
          <div>
            <h1 className="text-3xl font-bold text-[#4348F9] mb-6">
              Schedule a Meeting
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-[#4348F9] outline-none"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                required
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-[#4348F9] outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-[#4348F9] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-[#4348F9] outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-[#4348F9] outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#4348F9] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
            </form>

            {status === "success" && (
              <p className="text-green-600 text-center mt-4">
                ✅ Your meeting request has been sent!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center mt-4">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </div>

          {/* Right side - Info */}
          <div className="flex flex-col justify-center text-gray-700 space-y-6">
            <h2 className="text-2xl font-semibold text-[#4348F9]">
              Why Schedule a Meeting with 3xGrowth?
            </h2>
            <p>
              At <b>3xGrowth.in</b>, we help businesses accelerate growth by
              providing tailored consulting, sales strategies, and digital
              solutions. Booking a meeting with us means getting access to
              insights that can transform your business.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-[#4348F9]">✔</span> Personalized business
                growth strategies
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#4348F9]">✔</span> Free initial consultation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#4348F9]">✔</span> Expert advice from
                experienced consultants
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#4348F9]">✔</span> Roadmap to scale your
                company faster
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
