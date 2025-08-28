import { FiCheckCircle, FiShield, FiSettings } from "react-icons/fi"

export default function SolutionSection() {
  return (
    <section className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">Our Solution: Clarity & Accountability</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring structure and transparency into B2B lead generation, giving leaders what they have been missing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FiCheckCircle className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">1. Strategic Roadmap</h3>
            <p className="text-sky-600 font-semibold mb-3">Free of Cost</p>
            <p className="text-gray-600 mb-4">
              A custom marketing plan aligned with your sales targets, breaking down every action item clearly.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Best communication channels identified
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Investment requirements mapped out
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Industry standards and benchmarks
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Low-risk marketing strategies
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FiShield className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">2. Zero-Risk Engagement</h3>
            <p className="text-sky-600 font-semibold mb-3">Complete Transparency</p>
            <p className="text-gray-600 mb-4">
              You see the roadmap upfront. Only then decide whether to execute with your team or leverage our managed
              resources.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Q&A sessions with our experts
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Success rate analysis
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Clear execution blueprint
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Flexible implementation options
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FiSettings className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">3. Execution Excellence</h3>
            <p className="text-sky-600 font-semibold mb-3">Measurable Results</p>
            <p className="text-gray-600 mb-4">
              With project management discipline, deep research, and sharp content strategy, we turn your plan into a
              measurable growth engine.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Dedicated project management
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Deep market research
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Strategic content creation
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2 mt-0.5 flex-shrink-0" />
                Performance tracking & optimization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
