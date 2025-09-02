"use client"
import { motion } from "framer-motion"
import { FiCheckCircle, FiArrowRight } from "react-icons/fi"
import Link from "next/link"

export default function AboutContent() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
      {/* Decorative Glow Background */}
      <div className="absolute top-1/3 left-1/2 w-[700px] h-[700px] bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center"
        >
          What <span className="text-blue-600">Sets Us Apart</span>
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              Execution Excellence
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
              We don’t just create plans—we ensure{" "}
              <span className="font-semibold text-blue-600">execution precision</span>.  
              From project management to content strategy, every detail translates 
              into <span className="font-semibold">measurable outcomes</span>.
            </p>
            <ul className="space-y-4">
              {[
                "Project management discipline",
                "Deep research & intelligence",
                "Strategic content creation",
                "Continuous performance tracking",
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <FiCheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let’s Talk
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white/70 backdrop-blur-xl border border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-5">
              Our Client Promise
            </h4>
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              With <span className="font-semibold text-blue-600">3xGrowth Consulting</span>, you gain:
            </p>
            <ul className="space-y-4">
              {[
                "A clear execution roadmap",
                "Confidence in results, backed by strategy",
                "Access to scalable, aligned resources",
              ].map((point, i) => (
                <li key={i} className="flex items-center">
                  <FiCheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 text-base">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
