"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { FiArrowRight, FiTarget, FiTrendingUp, FiPlay } from "react-icons/fi"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 md:w-56 md:h-56 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 md:w-64 md:h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center bg-white/30 backdrop-blur-md border border-white/40 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-4 shadow-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Trusted by 150+ B2B Companies
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-snug">
              B2B Lead Generation
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                That Works
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 mb-6 max-w-md">
              Most companies don’t fail at marketing because of effort—they fail because execution is fragmented and
              disconnected from sales. We fix this by building a marketing engine that drives predictable growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="https://calendly.com/salessyllabus" target="_blank"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 font-medium text-sm transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg"
              >
                Book Free Session
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 font-medium text-sm transition-all duration-300 inline-flex items-center justify-center shadow-sm hover:shadow-md"
              >
                <FiPlay className="mr-2 h-4 w-4" />
                Our Services
              </Link>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: FiTarget, title: "Clarity" },
                { icon: FiTrendingUp, title: "Zero-Risk" },
                { icon: FiArrowRight, title: "Execution" },
              ].map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    className="p-4 bg-white/40 backdrop-blur-md border border-white/50 rounded-xl shadow-sm text-center"
                  >
                    <Icon className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                    <h3 className="text-sm font-semibold text-slate-700">{benefit.title}</h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Image Compact Square with px */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative mx-auto w-[350px] h-[350px] md:w-[390px] md:h-[390px] rounded-2xl overflow-hidden shadow-xl border border-white/30 bg-white/10 backdrop-blur-lg">
              <Image
                src="/hero.png" // Replace with your image
                alt="B2B Growth"
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
