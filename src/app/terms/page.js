import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">Last updated: January 15, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using 3xGrowth Consulting s website and services, you accept and agree to be bound by the
              terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              3xGrowth Consulting provides B2B marketing consulting services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Strategic marketing planning and consultation</li>
              <li>Email marketing campaign management</li>
              <li>Digital marketing services</li>
              <li>Telemarketing and lead generation</li>
              <li>Marketing resource management</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">Users of our services agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not engage in any activity that disrupts or interferes with our services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms are established in individual service agreements. Generally:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Payments are due within 30 days of invoice date</li>
              <li>Late payments may incur additional fees</li>
              <li>Refunds are subject to our refund policy outlined in service agreements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, materials, and intellectual property created by 3xGrowth Consulting remain our property
              unless otherwise specified in writing. Client-specific strategies and implementations become the property
              of the client upon full payment.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              3xGrowth Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate services with 30 days written notice. Upon termination, all outstanding
              payments become immediately due, and access to services will be discontinued.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 mb-4">For questions about these Terms of Service, please contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>3xGrowth Consulting</strong>
                <br />
                Email: info@3xgrowthconsulting.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
