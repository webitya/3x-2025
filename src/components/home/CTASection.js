import Link from "next/link"
import { FiArrowRight, FiCheckCircle } from "react-icons/fi"

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Fix the Broken Link in Your Growth?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            This isn't outsourcing. This is building your growth capability with precision, discipline, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clarity</h3>
            <p className="text-gray-300">
              Know exactly what actions drive results with our transparent roadmap approach.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Confidence</h3>
            <p className="text-gray-300">Execute with measurable accountability and proven methodologies.</p>
          </div>

          <div className="text-center">
            <div className="bg-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Capability</h3>
            <p className="text-gray-300">Scale lead generation without chaos through structured processes.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">Let's build your roadmap—at no cost.</p>
          <Link
            href="/contact"
            className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-700 font-semibold text-lg transition-colors inline-flex items-center"
          >
            Book My Strategy Session
            <FiArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
