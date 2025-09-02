"use client"
import { FiTarget, FiUsers, FiTrendingUp } from "react-icons/fi"

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative SVG circle */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 800 800"
        >
          <circle cx="400" cy="400" r="250" fill="url(#blueGradient)" opacity="0.25" />
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col justify-center min-h-[70vh] md:min-h-[90vh]">
        {/* Title + Intro */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              3xGrowth
            </span>{" "}
            Consulting
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            We believe B2B lead generation is not just about campaigns—it’s about building a{" "}
            <span className="text-blue-600 font-semibold">high-performance marketing engine</span> that aligns with sales outcomes.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <FiTarget className="h-8 w-8 text-blue-600" />,
              title: "Our Mission",
              desc: "To transform B2B marketing by creating clarity, accountability, and growth for businesses struggling with fragmented execution.",
            },
            {
              icon: <FiUsers className="h-8 w-8 text-blue-600" />,
              title: "Our Approach",
              desc: "We combine strategic planning with execution excellence, providing both the roadmap and resources for predictable sales outcomes.",
            },
            {
              icon: <FiTrendingUp className="h-8 w-8 text-blue-600" />,
              title: "Our Results",
              desc: "We help businesses achieve 3x growth by fixing the broken link between marketing activities and sales outcomes through structured processes.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white/30 backdrop-blur-lg border border-white/20 shadow-md rounded-xl p-6 h-full flex flex-col">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "150+", label: "Clients Served" },
            { value: "3x", label: "Average Growth" },
            { value: "95%", label: "Client Retention" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, i) => (
            <div key={i} className="animate-fade-in-up">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
