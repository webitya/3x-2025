"use client"
import { FiAlertCircle, FiBarChart, FiUsers } from "react-icons/fi"

export default function ProblemSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            The Problem: Lead Generation is Broken
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            CMOs, Sales Leaders, and Founders often ask the same questions
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: FiBarChart,
              title: "Why do our campaigns look busy but not translate into pipeline?",
              text: "Marketing activities without clear connection to sales outcomes create the illusion of progress.",
            },
            {
              icon: FiAlertCircle,
              title: "Why do agencies focus on vanity metrics instead of sales outcomes?",
              text: "Disconnected execution leads to impressive reports that do not drive revenue growth.",
            },
            {
              icon: FiUsers,
              title: "Why does execution always feel chaotic, without clarity or accountability?",
              text: "Scattered teams and fragmented processes create confusion instead of results.",
            },
          ].map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="p-6 rounded-2xl text-center bg-white/70 backdrop-blur-lg shadow-md 
                           hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full 
                                bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 mb-4
                                hover:animate-pulse transition-colors duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-600 text-sm">{problem.text}</p>
              </div>
            )
          })}
        </div>

        {/* Truth Box */}
        <div className="bg-white/80 backdrop-blur-lg border-l-4 border-blue-500 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">The Truth:</h3>
          <p className="text-base text-slate-700 mb-3">
            Marketing plans are disconnected from sales targets. Execution is scattered across agencies, freelancers,
            and internal teams. Leaders are left with partial visibility, rising costs, and no guarantee of results.
          </p>
          <p className="text-lg font-semibold text-blue-600">
            This broken system costs businesses millions in lost opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
