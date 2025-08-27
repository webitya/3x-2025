import { FiAlertCircle, FiBarChart, FiUsers } from "react-icons/fi"

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">The Problem: Lead Generation is Broken</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CMOs, Sales Leaders, and Founders often ask the same questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <FiBarChart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black mb-4">
              "Why do our campaigns look busy but not translate into pipeline?"
            </h3>
            <p className="text-gray-600">
              Marketing activities without clear connection to sales outcomes create the illusion of progress.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <FiAlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black mb-4">
              "Why do agencies focus on vanity metrics instead of sales outcomes?"
            </h3>
            <p className="text-gray-600">
              Disconnected execution leads to impressive reports that don't drive revenue growth.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <FiUsers className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black mb-4">
              "Why does execution always feel chaotic, without clarity or accountability?"
            </h3>
            <p className="text-gray-600">
              Scattered teams and fragmented processes create confusion instead of results.
            </p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-black mb-4">The Truth:</h3>
          <p className="text-lg text-gray-700 mb-4">
            Marketing plans are disconnected from sales targets. Execution is scattered across agencies, freelancers,
            and internal teams. Leaders are left with partial visibility, rising costs, and no guarantee of results.
          </p>
          <p className="text-lg font-semibold text-red-600">
            This broken system costs businesses millions in lost opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
