"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { services } from "../../data/services"
import { FiTarget, FiPhone, FiSearch, FiCheckCircle } from "react-icons/fi"

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="relative py-5 px-2 md:px-3 bg-gradient-to-br from-blue-50 to-white">
      <div className=" mx-auto">
        {/* Section Title */}
        <div className="text-center mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore our specialized B2B marketing services designed to accelerate growth and deliver measurable results.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 bg-white/50 backdrop-blur-lg rounded-2xl shadow-md p-3 md:p-3">
          {/* Sidebar */}
          <div className="md:w-1/3 lg:w-1/4 bg-white/70 rounded-xl border border-blue-100 shadow-sm p-2 md:min-h-[80vh]">
            <h3 className="font-semibold text-blue-700 mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg text-left transition-all ${
                      activeTab === index
                        ? "bg-blue-600 text-white shadow-md"
                        : "hover:bg-blue-50 text-gray-700"
                    }`}
                  >
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="flex-1 p-1 md:p-2 overflow-y-auto max-h-[90vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="bg-white/70 backdrop-blur-lg rounded-xl p-6 shadow-md border border-blue-100"
              >
                <h2 className="text-2xl font-bold text-blue-700 mb-1">
                  {services[activeTab].title}
                </h2>
                <p className="text-sm text-blue-500 mb-4">
                  {services[activeTab].subtitle}
                </p>

                {/* Special Formatting for Buying Intent Verification (tab 3) */}
                {activeTab === 3 ? (
                  <div className="text-gray-700 leading-relaxed space-y-4 text-sm">
                    <h3 className="text-lg font-semibold text-blue-600">
                      A. Manual Research
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Funding Signals:</strong> VC/PE rounds, angel investments, grants, expansion announcements.</li>
                      <li><strong>Job Postings:</strong> Hiring in sales/marketing/tech = budget expansion. Senior hires = strategy shift.</li>
                      <li><strong>Operational Complexity:</strong> More SKUs, multiple service lines, new markets, complex onboarding.</li>
                      <li><strong>Productivity Analysis:</strong> Costs and process bottlenecks.</li>
                      <li><strong>Social Engagement:</strong> Decision-makers engaging on competitor/pain-point content.</li>
                      <li><strong>Pain Points:</strong> Leaders discussing challenges in forums, interviews, posts.</li>
                      <li><strong>Attrition Signals:</strong> High churn or leadership exits = opportunity.</li>
                      <li><strong>Growth Trends:</strong> Revenue & headcount trajectory over 3 years.</li>
                      <li><strong>Leadership Behaviour:</strong> CEO/Founder activity, tone of communication.</li>
                      <li><strong>Budget Signals:</strong> Sponsoring events, ads, experimenting with tech adoption.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-blue-600 mt-6">
                      B. Advanced Intent Verification – Outbound Touchpoints
                    </h3>
                    <p>Objective: Not to “sell” but validate buying intent with insights.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Email Campaigns:</strong> 1–2 light-touch/month, insight-driven.</li>
                      <li><strong>Content Engagement:</strong> Case studies = awareness, whitepapers = research, webinars = evaluation.</li>
                      <li><strong>Micro-Surveys:</strong> One-question polls for quick engagement signals.</li>
                      <li><strong>Low-Touch Calls:</strong> 2–3 min research-style calls (budget, timeline, openness).</li>
                    </ul>

                    <p className="italic text-gray-800 mt-4">
                      Why this matters: Separates real-time buyers from good-fit accounts. Builds evidence-based confidence & credibility over 2–4 months.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Default for other tabs */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      {services[activeTab].description}
                    </p>

                    {services[activeTab].features && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">
                          Key Features
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-gray-700 text-sm">
                          {services[activeTab].features.map((f, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <FiCheckCircle className="text-blue-500 mt-1 w-4 h-4" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {services[activeTab].process && (
                      <div>
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">
                          Our Process
                        </h3>
                        <ol className="space-y-1 text-gray-700 text-sm">
                          {services[activeTab].process.map((p, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-blue-500 font-semibold">{i + 1}.</span>
                              {p}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
