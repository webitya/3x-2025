"use client"
import { useState } from "react"
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (result.success) {
        setStatus("success")
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-sky-100  mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 mb-4">Get Your Free Strategy Session</h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Fill in the details below and our team will reach out within 24 hours.
      </p>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center text-sm">
          <FiCheckCircle className="h-5 w-5 text-green-600 mr-2" />
          <span className="text-green-700">Thank you! We’ll be in touch soon.</span>
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center text-sm">
          <FiAlertCircle className="h-5 w-5 text-red-600 mr-2" />
          <span className="text-red-700">Something went wrong. Please try again.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition bg-white"
        />

        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition bg-white"
        />

        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition bg-white"
        />

        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your marketing challenges *"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition bg-white resize-y"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 font-semibold text-base transition flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <FiSend className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
