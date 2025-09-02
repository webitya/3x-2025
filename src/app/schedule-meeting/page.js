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
<Header/>

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
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
            className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
    </div>

<Footer/>


</>
  )
}
