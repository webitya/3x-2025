"use client"

import Link from "next/link"

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Tagline */}
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce-subtle shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Comprehensive B2B Solutions
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 bg-clip-text text-transparent mb-6 animate-slide-up">
            Our Services
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Transform your B2B marketing with our solutions designed to create predictable sales outcomes through{" "}
            <span className="text-blue-700 font-semibold">strategic clarity</span>,{" "}
            <span className="text-blue-700 font-semibold">execution excellence</span>, and{" "}
            <span className="text-blue-700 font-semibold">measurable growth</span>.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-2">
         <Link
  href="https://calendly.com/salessyllabus"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
    Get Free Strategy Session
  </button>
</Link>
<Link href="/resources/case-studies">
  <button className="cursor-pointer border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
    View Case Studies
  </button>
</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
