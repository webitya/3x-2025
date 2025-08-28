"use client"
import Link from "next/link"
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowRight } from "react-icons/fi"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("Thank you for subscribing to our newsletter!")
        setEmail("")
      } else {
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info - Column 1 */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">3x</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  3xGrowth
                </span>
                <div className="text-sm text-gray-300">Consulting</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming B2B marketing with strategic clarity and measurable growth outcomes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm group">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-500/20 transition-colors">
                  <FiMail className="h-4 w-4 text-emerald-400" />
                </div>
                <span>info@3xgrowth.com</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm group">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-500/20 transition-colors">
                  <FiPhone className="h-4 w-4 text-emerald-400" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm group">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-500/20 transition-colors">
                  <FiMapPin className="h-4 w-4 text-emerald-400" />
                </div>
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <FiArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Column 3 */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-3">
              {[
                { href: "/resources/blogs", label: "Blog" },
                { href: "/resources/faqs", label: "FAQs" },
                { href: "/resources/case-studies", label: "Case Studies" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <FiArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Column 4 */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <p className="text-gray-300 text-sm">Get B2B marketing insights delivered weekly.</p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all backdrop-blur-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-600 disabled:to-gray-600 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <FiSend className="h-4 w-4" />
                    Subscribe
                  </>
                )}
              </button>
            </form>

            {message && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  message.includes("Thank you")
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="relative mt-12 pt-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 3xGrowth Consulting. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
