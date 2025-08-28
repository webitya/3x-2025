import { FiTarget, FiUsers, FiTrendingUp } from "react-icons/fi"

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                3xGrowth
              </span>{" "}
              Consulting
            </h1>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              We believe B2B lead generation is not just about campaigns it s about building a
              <span className="text-emerald-600 font-semibold"> high-performance marketing engine</span> that directly
              aligns with sales outcomes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-200">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-lg transition-shadow duration-300">
              <FiTarget className="h-12 w-12 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-bold text-black mb-6">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To transform B2B marketing by creating{" "}
              <span className="font-semibold text-emerald-600">clarity, accountability, and measurable growth</span> for
              businesses struggling with fragmented execution.
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-lg transition-shadow duration-300">
              <FiUsers className="h-12 w-12 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-bold text-black mb-6">Our Approach</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We combine{" "}
              <span className="font-semibold text-emerald-600">strategic planning with execution excellence</span>,
              providing both the roadmap and the resources to achieve predictable sales outcomes.
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-600">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-lg transition-shadow duration-300">
              <FiTrendingUp className="h-12 w-12 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-bold text-black mb-6">Our Results</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We help businesses achieve <span className="font-semibold text-emerald-600">3x growth</span> by fixing the
              broken link between marketing activities and sales outcomes through structured processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
