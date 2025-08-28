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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-black mb-6">Get Your Free Strategy Session</h2>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
          <FiCheckCircle className="h-5 w-5 text-green-600 mr-2" />
          <span className="text-green-700">Thank you! We ll be in touch within 24 hours.</span>
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
          <FiAlertCircle className="h-5 w-5 text-red-600 mr-2" />
          <span className="text-red-700">Something went wrong. Please try again.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none transition-colors"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none transition-colors"
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
            Tell us about your marketing challenges *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent outline-none transition-colors resize-vertical"
            placeholder="Describe your current marketing challenges and goals..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sky-600 text-white px-6 py-4 rounded-lg hover:bg-sky-700 font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
