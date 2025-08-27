import Link from "next/link"
import { FiArrowRight, FiTarget, FiTrendingUp } from "react-icons/fi"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-sky-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            B2B Lead Generation
            <span className="block text-sky-600">That Finally Works</span>
          </h1>

          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">Clarity. Accountability. Measurable Growth.</p>

          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Most companies don't fail at marketing because of effort—they fail because execution is fragmented,
            misaligned, and disconnected from sales. At 3xGrowth Consulting, we fix this broken link by building a
            marketing engine that delivers predictable sales outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-700 font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Book Free Strategy Session
              <FiArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-lg hover:bg-sky-50 font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTarget className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Strategic Clarity</h3>
              <p className="text-gray-600">
                Custom marketing plans aligned with your sales targets, breaking down every action item clearly.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Zero-Risk Engagement</h3>
              <p className="text-gray-600">
                See the complete roadmap upfront. Only then decide whether to execute with your team or ours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiArrowRight className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Execution Excellence</h3>
              <p className="text-gray-600">
                Turn your plan into a measurable growth engine with our managed resource services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
