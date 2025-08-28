import { FiCheckCircle, FiArrowRight } from "react-icons/fi"
import Link from "next/link"

export default function AboutContent() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Clients Served</div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">3x</div>
              <div className="text-gray-600 font-medium">Average Growth</div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Client Retention</div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="mb-24">
          <h2 className="text-5xl font-bold text-black mb-12 text-center animate-fade-in-up">Our Philosophy</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-10 rounded-2xl mb-8 animate-fade-in-up animation-delay-200">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                At 3xGrowth Consulting, we ve identified the core problem plaguing B2B marketing: the
                <span className="font-semibold text-emerald-600">
                  {" "}
                  disconnect between marketing activities and sales outcomes
                </span>
                . Most companies invest heavily in marketing campaigns that look impressive on paper but fail to
                generate predictable revenue growth.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our approach is fundamentally different. We start with your sales targets and work backward to create a
                marketing engine that directly supports those goals. Every strategy, every tactic, and every resource
                allocation decision is made with one question in mind:
                <span className="font-semibold text-emerald-600">
                  {" "}
                  How does this contribute to measurable sales outcomes?
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-24">
          <h2 className="text-5xl font-bold text-black mb-16 text-center animate-fade-in-up">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white border-2 border-emerald-100 p-10 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-emerald-200 animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Clarity Before Execution</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We co-create a marketing plan that ties every activity back to your sales targets.
                <span className="font-semibold text-emerald-600"> No vague strategies</span>—every detail is mapped out
                with precision.
              </p>
            </div>

            <div className="bg-white border-2 border-emerald-100 p-10 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-emerald-200 animate-fade-in-up animation-delay-400">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Zero-Risk Engagement</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                This strategic plan is presented at <span className="font-semibold text-emerald-600">no cost</span>. You
                see the complete roadmap upfront, gaining total clarity on what it will take to achieve results.
              </p>
            </div>

            <div className="bg-white border-2 border-emerald-100 p-10 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-emerald-200 animate-fade-in-up animation-delay-600">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-3xl font-bold text-black mb-6">Client-Led Choice</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                You decide whether to execute with your internal team or leverage our managed resources. Either way, you
                have a <span className="font-semibold text-emerald-600">transparent execution blueprint</span>.
              </p>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-24">
          <h2 className="text-5xl font-bold text-black mb-16 text-center animate-fade-in-up">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up animation-delay-200">
              <h3 className="text-4xl font-bold text-black mb-8">Execution Excellence</h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Where we create real impact is in{" "}
                <span className="font-semibold text-emerald-600">execution excellence</span>. We don t just provide
                resources; we bring project management discipline, research depth, and content strategy
                precision—ensuring every initiative translates into measurable sales outcomes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheckCircle className="h-7 w-7 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Project management discipline across all initiatives</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-7 w-7 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Deep research and market intelligence</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-7 w-7 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Strategic content creation and optimization</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-7 w-7 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Continuous performance tracking and improvement</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-2xl border border-emerald-100 animate-fade-in-up animation-delay-400">
              <h4 className="text-3xl font-bold text-black mb-6">Our Client Promise</h4>
              <p className="text-gray-700 mb-6 text-lg">When you work with 3xGrowth Consulting, you walk away with:</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FiCheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 text-lg">A clear execution roadmap</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 text-lg">Confidence in results, backed by strategy</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 text-lg">Access to scalable, aligned resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 p-16 rounded-3xl text-white animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">This is Not Outsourcing</h2>
          <p className="text-2xl mb-10 max-w-4xl mx-auto leading-relaxed opacity-90">
            This is building your growth capability with precision, clarity, and accountability. Ready to experience the
            difference?
          </p>
          <Link
            href="/contact"
            className="bg-white text-emerald-600 px-10 py-5 rounded-2xl hover:bg-gray-50 font-bold text-xl transition-all duration-300 inline-flex items-center hover:transform hover:scale-105 shadow-lg"
          >
            Start Your Growth Journey
            <FiArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
