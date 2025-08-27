import { FiCheckCircle, FiArrowRight } from "react-icons/fi"
import Link from "next/link"

export default function AboutContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Philosophy */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8 text-center">Our Philosophy</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              At 3xGrowth Consulting, we've identified the core problem plaguing B2B marketing: the disconnect between
              marketing activities and sales outcomes. Most companies invest heavily in marketing campaigns that look
              impressive on paper but fail to generate predictable revenue growth.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our approach is fundamentally different. We start with your sales targets and work backward to create a
              marketing engine that directly supports those goals. Every strategy, every tactic, and every resource
              allocation decision is made with one question in mind: "How does this contribute to measurable sales
              outcomes?"
            </p>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sky-50 p-8 rounded-lg">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Clarity Before Execution</h3>
              <p className="text-gray-600">
                We co-create a marketing plan that ties every activity back to your sales targets. No vague
                strategies—every detail is mapped out with precision.
              </p>
            </div>

            <div className="bg-sky-50 p-8 rounded-lg">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Zero-Risk Engagement</h3>
              <p className="text-gray-600">
                This strategic plan is presented at no cost. You see the complete roadmap upfront, gaining total clarity
                on what it will take to achieve results.
              </p>
            </div>

            <div className="bg-sky-50 p-8 rounded-lg">
              <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Client-Led Choice</h3>
              <p className="text-gray-600">
                You decide whether to execute with your internal team or leverage our managed resources. Either way, you
                have a transparent execution blueprint.
              </p>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">Execution Excellence</h3>
              <p className="text-gray-600 mb-6">
                Where we create real impact is in execution excellence. We don't just provide resources; we bring
                project management discipline, research depth, and content strategy precision—ensuring every initiative
                translates into measurable sales outcomes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="h-6 w-6 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Project management discipline across all initiatives</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-6 w-6 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Deep research and market intelligence</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-6 w-6 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Strategic content creation and optimization</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-6 w-6 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Continuous performance tracking and improvement</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-black mb-4">Our Client Promise</h4>
              <p className="text-gray-600 mb-4">When you work with 3xGrowth Consulting, you walk away with:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">A clear execution roadmap</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Confidence in results, backed by strategy</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Access to scalable, aligned resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-sky-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-black mb-4">This is Not Outsourcing</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            This is building your growth capability with precision, clarity, and accountability. Ready to experience the
            difference?
          </p>
          <Link
            href="/contact"
            className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-700 font-semibold text-lg transition-colors inline-flex items-center"
          >
            Start Your Growth Journey
            <FiArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
