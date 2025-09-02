"use client"
import { motion } from "framer-motion"

const AboutPhilosophy = () => {
  return (
    <section className="relative min-h-[95vh] bg-gradient-to-br from-white via-blue-50 to-white flex items-center overflow-hidden">
      {/* Decorative spotlight background */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-blue-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Our <span className="text-blue-600">Philosophy</span>
          </h2>
          <div className="bg-white/50 backdrop-blur-xl border border-blue-100 rounded-2xl p-8 shadow-xl">
            <p className="text-gray-700 mb-6 leading-relaxed">
              At 3xGrowth Consulting, we’ve identified the core problem plaguing B2B marketing: the{" "}
              <span className="font-semibold text-blue-600">
                disconnect between marketing activities and sales outcomes
              </span>
              . Many campaigns look impressive on paper but fail to generate predictable growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our approach is different: we start with your sales targets and work backward, ensuring{" "}
              <span className="font-semibold text-blue-600">
                every strategy contributes to measurable outcomes
              </span>.
            </p>
          </div>
        </motion.div>

        {/* Right Side Floating 3D Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative text-center">
            {/* 3x */}
            <motion.h1
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-9xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 drop-shadow-[0_8px_20px_rgba(59,130,246,0.1)]"
            >
              3x
            </motion.h1>
            {/* Glow */}
            <div className="absolute inset-0 blur-3xl bg-blue-400/40 rounded-full scale-[1.8] -z-10"></div>
            {/* Growth */}
            <p className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text tracking-wide">
              Growth
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPhilosophy
