import { FiCheckCircle, FiShield, FiSettings } from "react-icons/fi"

export default function SolutionSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-sky-50 to-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solution: Clarity & Accountability
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We bring structure and transparency into B2B lead generation, giving leaders what they’ve been missing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="bg-sky-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <FiCheckCircle className="h-7 w-7 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Strategic Roadmap</h3>
              <p className="text-sky-600 font-medium mb-2">Free of Cost</p>
              <p className="text-gray-600 text-sm mb-3">
                A custom marketing plan aligned with your sales targets, breaking down every action item clearly.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Best communication channels identified
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Investment requirements mapped out
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Industry standards & benchmarks
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Low-risk marketing strategies
                </li>
              </ul>
            </div>
            <button className="mt-6 w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-lg transition">
              Schedule Meeting
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="bg-sky-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <FiShield className="h-7 w-7 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Zero-Risk Engagement</h3>
              <p className="text-sky-600 font-medium mb-2">Complete Transparency</p>
              <p className="text-gray-600 text-sm mb-3">
                You see the roadmap upfront. Only then decide whether to execute with your team or leverage our managed resources.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Q&A sessions with our experts
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Success rate analysis
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Clear execution blueprint
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Flexible implementation options
                </li>
              </ul>
            </div>
            <button className="mt-6 w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-lg transition">
              Schedule Meeting
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="bg-sky-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <FiSettings className="h-7 w-7 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Execution Excellence</h3>
              <p className="text-sky-600 font-medium mb-2">Measurable Results</p>
              <p className="text-gray-600 text-sm mb-3">
                With project management discipline, deep research, and sharp content strategy, we turn your plan into a measurable growth engine.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Dedicated project management
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Deep market research
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Strategic content creation
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
                  Performance tracking & optimization
                </li>
              </ul>
            </div>
            <button className="mt-6 w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-lg transition">
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
