"use client"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

export default function CTASection() {
  return (
    <section className="relative py-20 flex items-center justify-center overflow-hidden 
                        bg-gradient-to-r from-blue-200/40 to-blue-100/30 backdrop-blur-xl">
      
      {/* Animated Background Shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-sky-400/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-indigo-300/20 rounded-full blur-2xl animate-spin-slow"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 drop-shadow">
          Ready to Get Started?
        </h2>
        <p className="text-slate-600 mb-8 text-base">
          Let’s build something great together.
        </p>

        {/* Glassmorphic Button */}
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-xl 
                     bg-white/30 backdrop-blur-md border border-white/40 shadow-md
                     text-blue-700 font-semibold hover:bg-white/50 transition-all"
        >
          Get in Touch
          <FiArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
