"use client"
import { motion } from "framer-motion"

const HowWeWork = () => {
  const steps = [
    {
      step: "1",
      title: "Clarity First",
      desc: "We co-create a marketing plan directly tied to your sales targets. No vague strategies—only precision.",
    },
    {
      step: "2",
      title: "Zero-Risk Plan",
      desc: "We present your roadmap upfront at no cost. Full clarity before you invest.",
    },
    {
      step: "3",
      title: "Your Choice",
      desc: "Execute with your team or leverage ours—either way, you gain a transparent blueprint.",
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-blue-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14 text-center"
        >
          How <span className="text-blue-600">We Work</span>
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/60 backdrop-blur-xl border border-blue-100 rounded-2xl p-8 shadow-lg 
              hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-6 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 
                flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-4 ring-white/50">
                {item.step}
              </div>

              {/* Card Content */}
              <div className="pt-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
