"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { FiArrowRight, FiTarget, FiTrendingUp, FiPlay } from "react-icons/fi"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 left-1/2 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 animate-pulse"></span>
              Trusted by 150+ B2B Companies
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              B2B Lead Generation
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                That Finally Works
              </span>
            </h1>

            <p className="text-2xl text-emerald-600 mb-4 max-w-3xl mx-auto font-semibold">
              Clarity. Accountability. Measurable Growth.
            </p>

            <p className="text-lg text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Most companies don t fail at marketing because of effort—they fail because execution is fragmented,
              misaligned, and disconnected from sales. At 3xGrowth Consulting, we fix this broken link by building a
              marketing engine that delivers predictable sales outcomes.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-700 hover:to-teal-700 font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulse-glow"
            >
              Book Free Strategy Session
              <FiArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FiPlay className="mr-2 h-5 w-5" />
              View Our Services
            </Link>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: FiTarget,
                title: "Strategic Clarity",
                description:
                  "Custom marketing plans aligned with your sales targets, breaking down every action item clearly.",
                delay: "delay-500",
              },
              {
                icon: FiTrendingUp,
                title: "Zero-Risk Engagement",
                description:
                  "See the complete roadmap upfront. Only then decide whether to execute with your team or ours.",
                delay: "delay-700",
              },
              {
                icon: FiArrowRight,
                title: "Execution Excellence",
                description: "Turn your plan into a measurable growth engine with our managed resource services.",
                delay: "delay-900",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className={`text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${benefit.delay} ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
                >
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
