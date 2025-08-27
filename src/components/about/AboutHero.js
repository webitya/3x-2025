import { FiTarget, FiUsers, FiTrendingUp } from "react-icons/fi"

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-sky-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-6">About 3xGrowth Consulting</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe B2B lead generation is not just about campaigns—it's about building a high-performance marketing
            engine that directly aligns with sales outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiTarget className="h-10 w-10 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To transform B2B marketing by creating clarity, accountability, and measurable growth for businesses
              struggling with fragmented execution.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiUsers className="h-10 w-10 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Our Approach</h3>
            <p className="text-gray-600">
              We combine strategic planning with execution excellence, providing both the roadmap and the resources to
              achieve predictable sales outcomes.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiTrendingUp className="h-10 w-10 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Our Results</h3>
            <p className="text-gray-600">
              We help businesses achieve 3x growth by fixing the broken link between marketing activities and sales
              outcomes through structured processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
