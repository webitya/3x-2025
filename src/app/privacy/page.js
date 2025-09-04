"use client"
import Link from "next/link"
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#eaf0ff] to-[#f5f7ff] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">Last updated: January 15, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when
              you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Fill out contact forms or request consultations</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or phone</li>
              <li>Use our website and services</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This may include your name, email address, phone number, company
              information, and any other information you choose to provide.
            </p>
          </section>

          {/* Sections 2 - 9 (keep your existing content) */}

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="bg-[#f5f7ff] border border-[#4348F9]/20 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>3xGrowth.in</strong>
                <br />
                Email:{" "}
                <a
                  href="mailto:sandeep@3xgrowth.in"
                  className="text-[#4348F9] font-medium"
                >
                  sandeep@3xgrowth.in
                </a>
                <br />
                Phone: +91 6200207379
                <br />
                Address: D Block, Jayshree Green City, Argora, Ranchi, Jharkhand,
                India
              </p>
            </div>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#4348F9] hover:bg-[#363ae6] text-white font-medium rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
